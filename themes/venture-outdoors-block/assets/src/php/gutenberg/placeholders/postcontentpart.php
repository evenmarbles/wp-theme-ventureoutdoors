<?php
  $content = get_post( get_the_ID() )->post_content;
  $html = str_get_html($content);

  $blockInclude = $attributes['blockInclude'];
  $endBlock = '/'.strtok( $blockInclude, ' ' );

  $blockId = $attributes['blockId'];

  // echo '<pre>';
  // print_r($blockInclude);
  // echo '</pre>';

  foreach( $html->find('comment') as $e) {
    if ( strpos( $e->innertext, $blockInclude ) !== false &&    // this is the block type we are looking for
         strpos( $e->innertext, $endBlock) === false &&         // this is NOT the end of the block
         ( !$blockId || strpos( $e->innertext, $blockId ) ) ) { // if block ID is set, this is the block with the ID

      $content_part = $e->innertext;
      if ( strpos( $content_part, '/-->' ) === false ) {

        while( $e->next_sibling() !== null && strpos( $e->next_sibling(), $endBlock ) === false ) {
          $content_part .= $e->next_sibling();
          $e = $e->next_sibling();
        }

        $content_part .= $e->next_sibling();
      }

      $content_part = apply_filters('the_content', $content_part);
      $content_part = str_replace(']]>', ']]&gt;', $content_part);

      echo $content_part;
    }
  }
?>