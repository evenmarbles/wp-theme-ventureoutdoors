<div class="col-xxs-12 col-xs-6 col-sm-6 col-lg-4">
  <a class="sngl-activity-similar-item" href="<?php the_permalink(); ?>">
  <?php if (get_field('guides_choice')) { ?>
    <div class="sngl-activity-badges">
      <img width="300" height="300" class="badge img-responsive lazyload"
        sizes="(max-width: 300px) 100vw, 300px"
        data-src="https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon.png"
        data-srcset="https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon.png 300w, 
          https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon-150x150.png 150w, 
          https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon-37x37.png 37w"
        alt="" loading="lazy" />
    </div>
  <?php } ?>
    <div class="sngl-activity-similar-item-img">
      <img width="890" height="500" class="objectfit img-responsive lazyload" 
        sizes="(max-width: 890px) 100vw, 890px"
        data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/activities-thumb/<?php the_field('thumbnail'); ?>" 
        data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_890/activities-thumb/<?php the_field('thumbnail'); ?> 890w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_300/activities-thumb/<?php the_field('thumbnail'); ?> 300w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_853/activities-thumb/<?php the_field('thumbnail'); ?> 853w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_768/activities-thumb/<?php the_field('thumbnail'); ?> 768w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/activities-thumb/<?php the_field('thumbnail'); ?> 49w"
        alt="" loading="lazy" />
    </div>
    <div class="sngl-activity-similar-item-cont">
      <div class="sngl-activity-duration"><?php the_field('duration'); ?></div>
      <div class="sngl-activity-cost">from $<?php the_field('cost'); ?></div>
      <h5 class="flush"><?php echo the_title(); ?></h5>
      <div><strong>Location:</strong> <?php the_field('location'); ?></div>
      <div><strong>Area:</strong> <?php the_field('area'); ?></div>
      <div><strong>Activity Type:</strong> <?php echo array_map(function ($t) {return get_the_title($t->ID);}, get_field('activity_type'))[0]; ?></div>
      <div class="sngl-activity-similar-difficulty">
        <strong>Difficulty:</strong>
        <img width="75" height="20" class="sngl-activity-similar-difficulty__img lazyload" 
          sizes="(max-width: 75px) 100vw, 75px"
          data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/<?php echo str_replace(' ', '-', strtolower(get_field('difficulty_level'))); ?>.png" 
          data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_75/icons/<?php echo str_replace(' ', '-', strtolower(get_field('difficulty_level'))); ?> 75w, 
            https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/icons/<?php echo str_replace(' ', '-', strtolower(get_field('difficulty_level'))); ?> 49w"
          alt="" loading="lazy" />
      </div>
      <?php if (get_field('solitude_level')) { ?>
      <div class="sngl-activity-similar-difficulty">
        <strong>Solitude:</strong>
        <img width="75" height="20" class="sngl-activity-similar-difficulty__img lazyload" 
          sizes="(max-width: 75px) 100vw, 75px"
          data-src="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/<?php echo str_replace(' ', '-', strtolower(get_field('solitude_level'))); ?>.png" 
          data-srcset="https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_75/icons/<?php echo str_replace(' ', '-', strtolower(get_field('solitude_level'))); ?> 75w, 
            https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/icons/<?php echo str_replace(' ', '-', strtolower(get_field('solitude_level'))); ?> 49w"
          alt="" loading="lazy" />
      </div>
      <?php } ?>
      <div>
        <strong>Highlights:</strong> <?php echo wp_strip_all_tags(get_the_excerpt()); ?>
      </div>
    </div>
  </a>
</div>
