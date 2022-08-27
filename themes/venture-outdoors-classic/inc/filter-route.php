<?php

add_action('rest_api_init', 'ventureoutdoors_register_filter');

function ventureoutdoors_register_filter() {
  register_rest_route('ventureoutdoors/v1', 'filter', array(
    'method' => WP_REST_SERVER::READABLE,
    'callback' => 'ventureoutdoors_filter_results'
  ));
}

function ventureoutdoors_filter_results($data) {

  $data['slug'] = $data['slug'] ? $data['slug'] : 'activities';
  $data['type'] = $data['slug'] === 'activities' ? $data['type'] : $data['slug'];
  $paged = ($data['paged']) ? $data['paged'] : 1;

  if (!is_array($data['type'])) {
    $data['type'] = explode(',', $data['type']);
  }
  if (!is_array($data['length'])) {
    $data['length'] = explode(',', $data['length']);
  }
  if (!is_array($data['difficulty'])) {
    $data['difficulty'] = explode(',', $data['difficulty']);
  }

  $results = array(
    'type' => array(),
    'length' => array(),
    'difficulty' => array(),
  );

  // Build relationship meta query
  $activityMetaQuery = array('relation' => 'AND');
  $typeMetaQuery = array('relation' => 'OR');
  $lengthMetaQuery = array('relation' => 'OR');
  $difficultyMetaQuery = array('relation' => 'OR');

  $typeQuery = new WP_Query(array(
    'post_type' => 'activity-type',
    'order' => 'ASC'
  ));

  while ($typeQuery->have_posts()) {
    $typeQuery->the_post();

    $type_id = get_the_ID();

    if (!$data['type'] OR in_array(strtolower(get_post_field('post_name', $type_id)), array_map(function($x) { return strtolower($x); }, $data['type']))) {
      array_push($typeMetaQuery,array(
        'key' => 'activity_type',
        'compare' => 'LIKE',
        'value' => '"' . $type_id . '"'
      ));
    }

    array_push($results['type'], array(
      'title' => get_the_title(),
      'slug' => get_post_field('post_name', $type_id),
      'permalink' => get_the_permalink(),
      'id' => $type_id
    ));
  }
  array_push($activityMetaQuery, $typeMetaQuery);
  wp_reset_postdata();

  $acfFields = acf_get_fields('56'); // id: 56 => Custom Field Group: Activity Type(s)
  foreach ($acfFields as $field) {
    if ($field['label'] === 'Duration Summary') {
      foreach ($field['choices'] as $choice) {
        if (!$data['length'] OR in_array(str_replace(' ', '-', strtolower($choice)), array_map(function($x) { return strtolower($x); }, $data['length']))) {
          array_push($lengthMetaQuery, array(
            'key' => 'duration_summary',
            'compare' => 'LIKE',
            'value' => $choice
          ));
        }
        array_push($results['length'], array(
          'title' => $choice,
          'slug' => str_replace(' ', '-', strtolower($choice))
        ));
      }
      array_push($activityMetaQuery, $lengthMetaQuery);
    }

    if ($field['label'] === 'Difficulty Level') {
      foreach ($field['choices'] as $choice) {
        if (!$data['difficulty'] OR in_array(str_replace(' ', '-', strtolower($choice)), array_map(function($x) { return strtolower($x); }, $data['difficulty']))) {
          array_push($difficultyMetaQuery, array(
            'key' => 'difficulty_level',
            'compare' => 'LIKE',
            'value' => $choice
          ));
        }
        array_push($results['difficulty'], array(
          'title' => $choice,
          'slug' => str_replace(' ', '-', strtolower($choice))
        ));
      }
      array_push($activityMetaQuery, $difficultyMetaQuery);
    }
  }

  foreach ($results as $key => $value1) {

    $metaQuery = array('relation' => 'AND');
    if ($key === 'type') {
      array_push($metaQuery, $lengthMetaQuery);
      array_push($metaQuery, $difficultyMetaQuery);
      $meta_key = 'activity_type';
    }
    if ($key == 'length') {
      array_push($metaQuery, $typeMetaQuery);
      array_push($metaQuery, $difficultyMetaQuery);
      $meta_key = 'duration_summary';
    }
    if ($key == 'difficulty') {
      array_push($metaQuery, $typeMetaQuery);
      array_push($metaQuery, $lengthMetaQuery);
      $meta_key = 'difficulty_level';
    }

    foreach ($results[$key] as $index => $value2) {
      $query = $metaQuery;
      $q = array('relation' => 'OR');
      array_push($q, array(
        'key' => $meta_key,
        'compare' => 'LIKE',
        'value' => $value2['id'] ? '"' . $value2['id'] . '"' : $value2['title'],
      ));
      array_push($query,  $q);

      $count = 0;
      $posts = new WP_Query(array(
        'post_type' => 'activity',
        'posts_per_page' => -1,
        'meta_query' => $query,
      ));
      $results[$key][$index]['count'] = $posts->found_posts;
      wp_reset_postdata();
    }
  }

  $activityRelationshipQuery = new WP_Query(array(
    'post_type' => 'activity',
    'posts_per_page' => 12,
    'meta_query' => $activityMetaQuery,
    'paged' => $paged,
  ));

  ob_start();
  while ($activityRelationshipQuery->have_posts()) {
    $activityRelationshipQuery->the_post();

    get_template_part('template_parts/card', 'activity');
  }
  wp_reset_postdata();

  $results['html'] .= ob_get_contents();
  ob_end_clean();

  $results['count'] = $activityRelationshipQuery->found_posts;
  $results['max'] = $activityRelationshipQuery->max_num_pages;

  return $results;
}

