<?php
/**
 * Ubermenu Navigation template
 * 
 * @package VentureOutdoors
 */

 $menu_class = \VENTUREOUTDOORS_THEME\Inc\Menus::get_instance();
 $header_menu_id = $menu_class->get_menu_id( 'ventureoutdoors-header-menu' );
 $header_menus = wp_get_nav_menu_items( $header_menu_id );

 $counter = 0;
 $menucontent_counter = 0;

?>

<nav id="ubermenu-main" class="ubermenu ubermenu-main ubermenu-loc-main_menu ubermenu-responsive-collapse ubermenu-horizontal ubermenu-transition-shift ubermenu-trigger-hover_intent ubermenu-skin-none ubermenu-bar-align-full ubermenu-items-align-auto ubermenu-disable-submenu-scroll ubermenu-sub-indicators ubermenu-retractors-responsive ubermenu-submenu-indicator-closes ubermenu-notouch">
  <?php
  if ( !empty($header_menus) && is_array($header_menus) ) {
  ?>

  <ul class="ubermenu-nav" data-title="mainmenu">

  <?php
  
  foreach ($header_menus as $menu_item) {
    if (!$menu_item->menu_item_parent) {
      $child_menu_items = $menu_class->get_child_menu_items($header_menus, $menu_item->ID);
      $has_children = !empty($child_menu_items) && is_array($child_menu_items);
      $link_target = !empty($menu_item->target) && '_blank' === $menu_item->target ? '_blank' : '_self';
      $link_rel = !empty($menu_item->xfn) ? 'rel="'.$menu_item->xfn.'" ' : '';

      if(!$has_children) {
  ?>

        <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-advanced-sub ubermenu-item-level-0 ubermenu-column ubermenu-column-auto ubermenu-has-submenu-drop ubermenu-has-submenu-mega">
          <a <?php echo $link_rel?> class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only ubermenu-noindicator"
            href="<?php echo esc_url( $menu_item->url ); ?>"
            target="<?php echo esc_attr( $link_target ); ?>" 
            role="button" target="<?php echo esc_attr( $link_target ); ?>" 
            tabindex="<?php echo $counter; ?>">
            <div class="ubermenu-target-title ubermenu-target-text"><?php echo esc_html( $menu_item->title ); ?></div>
          </a>
        </li>

  <?php
      } else {
  ?>

        <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-has-children ubermenu-advanced-sub ubermenu-item-level-0 ubermenu-column ubermenu-column-auto ubermenu-has-submenu-drop ubermenu-has-submenu-mega">
          <a <?php echo $link_rel?> class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only ubermenu-noindicator" 
            href="<?php echo esc_url( $menu_item->url ); ?>" 
            role="button" target="<?php echo esc_attr( $link_target ); ?>" 
            tabindex="<?php echo $counter; ?>">
            <span class="ubermenu-target-title ubermenu-target-text"><?php echo esc_html( $menu_item->title ); ?></span>
          </a>
          <div class="ubermenu-submenu ubermenu-submenu-type-mega ubermenu-submenu-drop ubermenu-submenu-align-full_width">
            <ul class="ubermenu-row ubermenu-autoclear">
              <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-has-children ubermenu-item-2119 ubermenu-item-level-2 ubermenu-column ubermenu-column-1-2 ubermenu-has-submenu-stack ubermenu-item-type-column">
                <ul class="ubermenu-submenu ubermenu-submenu-type-stack">
  <?php
        foreach ($child_menu_items as $child_menu_item) {
          $link_target = !empty($child_menu_item->target) && '_blank' === $child_menu_item->target ? '_blank' : '_self';
  ?>
                  <li class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                    <a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only" href="<?php echo esc_url( $child_menu_item->url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
                      <span class="ubermenu-target-title ubermenu-target-text"><?php echo esc_html( $child_menu_item->title ); ?></span>
                    </a>
                  </li>
  <?php
        }
  ?>
                </ul>
              </li>
              <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-has-children ubermenu-item-2120 ubermenu-item-level-2 ubermenu-column ubermenu-column-1-2 ubermenu-has-submenu-stack ubermenu-item-type-column">
                <ul class="ubermenu-submenu ubermenu-submenu-type-stack">
                  <li class="ubermenu-item ubermenu-item-type-custom ubermenu-item-object-ubermenu-custom ubermenu-item-2110 ubermenu-item-auto ubermenu-item-normal ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
                    <div class="ubermenu-content-block ubermenu-custom-content">
                      <div class="custom-content-wrapper">
                        <?php get_template_part('template_parts/header/menucontent', $menucontent_counter); ?>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>

  <?php
          $menucontent_counter++;
        }

        $counter++;
      }
    }
  ?>

  </ul>

  <?php
  }
  ?>

</nav>