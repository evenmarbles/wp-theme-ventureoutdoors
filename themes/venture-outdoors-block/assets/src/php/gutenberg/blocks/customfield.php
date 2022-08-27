<?php

if( $content ) {
  echo $content;
  return;
}

$tagName = $attributes['tagName'];

$value = get_field( $attributes['name'] );

if ( $tagName ) {
  echo "<{$tagName} class='".$attributes['className']."'>{$value}</{$tagName}>";
  return;
}

echo $value;

?>