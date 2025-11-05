<?php
// Custom Walker for Header Menu
class Site_Header_Walker extends Walker_Nav_Menu
{

    function start_lvl(&$output, $depth = 0, $args = array())
    {
        $output .= '<div class="nav_dropdown" data-dropdown-content="' . strtolower($this->current_parent_title) . '">';
    }

    function end_lvl(&$output, $depth = 0, $args = array())
    {
        $output .= '</div>';
    }

    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
    {
        $has_children = in_array('menu-item-has-children', $item->classes);
        $title = apply_filters('the_title', $item->title, $item->ID);

        if ($has_children && $depth === 0) {
            $this->current_parent_title = $title;
            $output .= '<div class="header_menu_item" data-dropdown-trigger="' . strtolower($title) . '">';
            $output .= '<div class="header_menu_item_inner">';
            $output .= '<button>' . esc_html($title) . '</button>';
            $output .= '<img src="' . esc_url(get_theme_file_uri('src/icons/miniArrow.svg')) . '" alt="arrow" class="header_menu_item_arrow_unselected" />';
            $output .= '<img src="' . esc_url(get_theme_file_uri('src/icons/arrowSelected.svg')) . '" alt="arrow" class="header_menu_item_arrow_selected" />';
            $output .= '</div>';
        } else {
            $output .= '<div class="header_menu_item">';
            $output .= '<a href="' . esc_url($item->url) . '">' . esc_html($title) . '</a>';
        }
    }

    function end_el(&$output, $item, $depth = 0, $args = array())
    {
        $output .= '</div>';
    }
}
