<?php

	$blocks = [
    'banner' => [],
    'customfield' => [],
    'genericimg' => [],
    'location' => [],
    'masthead' => [],
		'secimgbg' => ["fallbackimage" => "https://res.cloudinary.com/ventureoutdoors/image/upload/background-images/bg-rivermap"],
    'secsidebar' => [],
    'snglactivityaccrdn' => [],
    'testimonial' => [],
	];

  $placeholders = [
    'activitydetails',
    'contactform',
    'filteractivity',
    'findactivity',
    'footer',
    'header',
    'postcontentpart',
  ];

  return [ $blocks, $placeholders ];

?>