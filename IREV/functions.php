<?php
require_once get_template_directory() . '/inc/assets.php';

// SVG Support
include_once get_template_directory() . '/inc/svg-support.php';

// Custom Header Navigation
include_once get_template_directory() . '/inc/navigation-menu.php';

// Custom Logo Support
add_theme_support('custom-logo', array(
    'height'      => 150,
    'flex-height' => true,
    'flex-width'  => true,
));

// Custom Logo Function
function show_custom_logo($size = 'medium')
{
    if ($custom_logo_id = get_theme_mod('custom_logo')) {
        
        $logo_image = wp_get_attachment_image(
            $custom_logo_id,
            $size,
            false,
            array(
                'class'    => 'custom-logo',
                'itemprop' => 'siteLogo',
                'alt'      => get_bloginfo('name'),
            )
        );
    } else {
        
        $logo_url = get_template_directory_uri() . '/src/icons/logo.svg';
        $w = 200;
        $h = 160;
        $logo_image = '<img src="' . esc_url($logo_url) . '" width="' . $w . '" height="' . $h . '" class="custom-logo" itemprop="siteLogo" alt="' . esc_attr(get_bloginfo('name')) . '">';
    }

    $html = sprintf(
        '<a href="%1$s" class="custom-logo-link logo" rel="home" title="%2$s" itemscope>%3$s</a>',
        esc_url(home_url('/')),
        esc_attr(get_bloginfo('name')),
        $logo_image
    );

    echo apply_filters('get_custom_logo', $html);
}

// Customize Login Screen
function wordpress_login_styling()
{
    if ($custom_logo_id = get_theme_mod('custom_logo')) {
        $custom_logo_img = wp_get_attachment_image_src($custom_logo_id, 'medium');
        $custom_logo_src = $custom_logo_img[0];
    } else {
        $custom_logo_src = 'wp-admin/images/wordpress-logo.svg?ver=20131107';
    }
?>
    <style type="text/css">
        .login #login h1 a {
            background-image: url('<?php echo $custom_logo_src; ?>');
            background-size: contain;
            background-position: 50% 50%;
            width: auto;
            height: 120px;
        }

        body.login {
            background-color: #f1f1f1;
            <?php if ($bg_image = get_background_image()) { ?>background-image: url('<?php echo $bg_image; ?>') !important;
            <?php } ?>background-repeat: repeat;
            background-position: center center;
        }
    </style>
<?php }

add_action('login_enqueue_scripts', 'wordpress_login_styling');

function admin_logo_custom_url()
{
    $site_url = get_bloginfo('url');

    return ($site_url);
}

add_filter('login_headerurl', 'admin_logo_custom_url');

// Disable gutenberg
add_filter('use_block_editor_for_post_type', '__return_false');

// Enable revisions for all custom post types
add_filter('cptui_user_supports_params', function () {
    return array('revisions');
});

// Limit number of revisions for all post types
function limit_revisions_number()
{
    return 5;
}

add_filter('wp_revisions_to_keep', 'limit_revisions_number');

// Register Navigation Menu
register_nav_menus(array(
    'header-menu' => 'Header Menu',
    'footer-menu-1' => 'Footer Menu 1',
    'footer-menu-2' => 'Footer Menu 2',
    'footer-menu-3' => 'Footer Menu 3',
    'footer-menu-4' => 'Footer Menu 4',
    'footer-menu-5' => 'Footer Menu 5',
));

// Register Customizer settings for footer variables
function site_customize_register($wp_customize)
{

    // Footer Section
    $wp_customize->add_section('site_footer_section', array(
        'title'       => __('Footer Settings', 'site'),
        'priority'    => 30,
        'description' => __('Footer settings for your website', 'site'),
    ));

    // Copyright
    $wp_customize->add_setting('site_copyright_text', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('site_copyright_text', array(
        'label'    => __('Copyright Text', 'site'),
        'section'  => 'site_footer_section',
        'type'     => 'text',
    ));

    // Phone
    $wp_customize->add_setting('site_phone', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('site_phone', array(
        'label'    => __('Phone', 'site'),
        'section'  => 'site_footer_section',
        'type'     => 'text',
    ));

    // Email
    $wp_customize->add_setting('site_email', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('site_email', array(
        'label'    => __('Email', 'site'),
        'section'  => 'site_footer_section',
        'type'     => 'email',
    ));

    // Social Networks
    $social_networks = array('Facebook', 'Twitter', 'Instagram', 'LinkedIn');

    foreach ($social_networks as $network) {
        $setting_id = 'site_social_' . strtolower($network);
        $wp_customize->add_setting($setting_id, array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        ));
        $wp_customize->add_control($setting_id, array(
            'label'    => $network . ' URL',
            'section'  => 'site_footer_section',
            'type'     => 'url',
        ));
    }
}
add_action('customize_register', 'site_customize_register');
