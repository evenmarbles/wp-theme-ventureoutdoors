<?php
/**
 * Ubermenu Navigation template
 * 
 * @package VentureOutdoors
 */

 $menu_class = \VENTUREOUTDOORS_THEME\Inc\Menus::get_instance();
 $header_menu_id = $menu_class->get_menu_id( 'ventureoutdoors-header-menu' );
 $header_menus = wp_get_nav_menu_items( $header_menu_id );

?>

<nav id="nav-primary" class="nav-primary hidden-md-up">
  <?php
  if ( !empty($header_menus) && is_array($header_menus) ) {
  ?>

  <ul class="menu-main-navigation flexbox-justify flush hard disblock-sm-down">

  <?php
  
    foreach ($header_menus as $menu_item) {
      if (!$menu_item->menu_item_parent) {
        $child_menu_items = $menu_class->get_child_menu_items($header_menus, $menu_item->ID);
        $has_children = !empty($child_menu_items) && is_array($child_menu_items);
        $link_target = !empty($menu_item->target) && '_blank' === $menu_item->target ? '_blank' : '_self';
        $link_rel = !empty($menu_item->xfn) ? 'rel="'.$menu_item->xfn.'" ' : '';

        if(!$has_children) {
  ?>

        <li class="menu-item">
        <a <?php echo $link_rel?>
          href="<?php echo esc_url( $menu_item->url ); ?>"
          target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $menu_item->title ); ?></a>
        </li>
  
  <?php
        } else {
  ?>

        <li class="menu-item menu-item-has-children">
          <a href="<?php echo esc_url( $menu_item->url ); ?>"
            target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $menu_item->title ); ?></a>
          <ul class="submenu">
  <?php
          foreach ($child_menu_items as $child_menu_item) {
            $link_target = !empty($child_menu_item->target) && '_blank' === $child_menu_item->target ? '_blank' : '_self';
  ?>
            <li class="menu-item">
              <a href="<?php echo esc_url( $child_menu_item->url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
                <?php echo esc_html( $child_menu_item->title ); ?>
              </a>
            </li>
  <?php
          }
  ?>
          </ul>
        </li>

  <?php
        }
      }
    }
  }
  ?>

  </ul>
  <div class="header-info hidden-md-up">
    <span>
      <a href="<?php echo site_url() . '/contact'; ?>">
          Contact Us
          <i class="icon-east"></i>
      </a>
    </span>
    
    <?php get_template_part('template_parts/components/social-media', null, array(
      'margin' => 'push-top',
      'btn_color' => 'color-secondary',
    )); ?>

  </div>
</nav>