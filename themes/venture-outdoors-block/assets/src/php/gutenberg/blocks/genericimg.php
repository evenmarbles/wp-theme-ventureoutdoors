<?php

$className = $attributes['className'] ? $attributes['className'].' lazyload' : 'lazyload';
$alt = $attributes['context'] ? $attributes['context']['alt'] : '';

$thisSrc = "https://res.cloudinary.com/ventureoutdoors/image/upload/e_pixelate:20/{$attributes['public_id']}";
$dataSrc = "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/{$attributes['public_id']}";
$thisSrcset = "";
$dataSrcset = "";

if ( $attributes['width'] > 500 ) {
  $imageSizes = $attributes['imageSizes'] ? explode(',', $attributes['imageSizes']) : [500, 800, 1000];
  foreach ( $imageSizes as $index=>$d) {
    $thisSrcset .= "https://res.cloudinary.com/ventureoutdoors/image/upload/e_pixelate:20/c_scale,w_$d/{$attributes['public_id']} ${d}w";
    $dataSrcset .= "https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/c_scale,w_$d/{$attributes['public_id']} ${d}w";
    if ( $index < count($imageSizes) - 1 ) { 
      $thisSrcset .= ",";
      $dataSrcset .= ",";
    }
  }
}

$width = $attributes['isWidth100'] ? "100%" : $attributes['width'];
$height = $attributes['isHeight100'] ? "100%" : $attributes['height'];
$dimAttr = " width={$width} height={$height}";

$sizeAttr = '';
if (  strlen($thisSrcset) > 0 || strlen($dataSrcset) > 0 ) {
  $sizeAttr = $attributes['sizes'] ? " sizes='".$attributes['sizes']."'" : " sizes='100vw'";
}

?>
<img class="<?php echo $className ?>"<?php echo $dimAttr; echo $sizeAttr; ?>
  src="<?php echo $thisSrc; ?>"
  <?php 
    echo $thisSrcset ? " srcset='$thisSrcset'" : "";
    echo $dataSrc ? " data-src='$dataSrc'" : ""; 
    echo $dataSrcset ? " data-srcset='$dataSrcset'" : ""
  ?> alt="<?php echo $alt; ?>" 
/>