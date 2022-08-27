<?php
/**
 * Top Mobile Navigation template
 * 
 * @package VentureOutdoors
 */

 $menu_class = \VENTUREOUTDOORS_THEME\Inc\Menus::get_instance();
 $header_menu_id = $menu_class->get_menu_id( 'ventureoutdoors-mobile-menu' );
 $header_menus = wp_get_nav_menu_items( $header_menu_id );

?>

<nav class="nav-secondary hidden-md-up">
  <?php
  if ( !empty($header_menus) && is_array($header_menus) ) {
  ?>

  <ul class="flexbox-justify flush hard">
    
  <?php
  foreach ($header_menus as $menu_item) {
    if (!$menu_item->menu_item_parent) {
      $link_target = !empty($menu_item->target) && '_blank' === $menu_item->target ? '_blank' : '_self';
      $link_rel = !empty($menu_item->xfn) ? 'rel="'.$menu_item->xfn.'" ' : '';

  ?>

      <li class="menu-item">
        <a <?php echo $link_rel?>
          href="<?php echo esc_url( $menu_item->url ); ?>"
          target="<?php echo esc_attr( $link_target ); ?>" class="menu-target"><?php echo esc_html( $menu_item->title ); ?></a>
      </li>

  <?php 
    }
  }
  ?>

  </ul>
  <?php 
  }
  ?>
</nav>