<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header class="header">
        <div class="header_wrapper">
            <div class="header_logo">
                <?php show_custom_logo(); ?>
            </div>
            <?php if (has_nav_menu('header-menu')) : ?>
                <nav class="header_nav">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'header-menu',
                            'menu_class'     => 'header_menu',
                            'container'      => false,
                            'walker'         => new Site_Header_Walker(),
                        ));
                        ?>
                </nav>
            <?php endif; ?>
            <button class="header_signIn">
                Sign In
            </button>
            <button class="header_hamburger">
                <img src="<?php echo esc_url(get_theme_file_uri('src/icons/hamburgerIcon.svg')); ?>"
                    alt="hamburger" />
            </button>
        </div>
    </header>