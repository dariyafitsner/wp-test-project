<?php wp_footer();

$copyright_text = get_theme_mod('site_copyright_text');
$social_linkedin = get_theme_mod('site_social_linkedin');
$social_facebook = get_theme_mod('site_social_facebook');
$social_instagram = get_theme_mod('site_social_instagram');
$social_twitter = get_theme_mod('site_social_twitter');

$social_links = array(
    'linkedin'  => $social_linkedin,
    'facebook'  => $social_facebook,
    'instagram' => $social_instagram,
    'twitter'   => $social_twitter,
);

$links_output = array();
foreach ($social_links as $name => $url) {
    if ($url) {
        $links_output[] = '<a href="' . esc_url($url) . '" target="_blank" rel="nofollow">' . strtoupper($name) . '</a>';
    }
}
?>
<footer>
    <div class="footer_wrapper">
        <section class="footer_nav">
            <?php if (has_nav_menu('footer-menu-1')) : ?>
                <div class="footer_nav_list">
                    <span class="footer_nav_list_title">
                        PARTNER PLATFORM
                    </span>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'footer-menu-1',
                        'menu_class'     => 'footer_nav_list_list',
                        'items_wrap'     => '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown" data-submenu-toggle="true" data-multi-open="false" data-close-on-click-inside="false">%3$s</ul>'
                    )); ?>
                </div>
            <?php endif; ?>
            <?php if (has_nav_menu('footer-menu-2')) : ?>
                <div class="footer_nav_list">
                    <span class="footer_nav_list_title">
                        SOLUTIONS
                    </span>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'footer-menu-2',
                        'menu_class'     => 'footer_nav_list_list',
                        'items_wrap'     => '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown" data-submenu-toggle="true" data-multi-open="false" data-close-on-click-inside="false">%3$s</ul>'
                    )); ?>
                </div>
            <?php endif; ?>
            <?php if (has_nav_menu('footer-menu-3')) : ?>
                <div class="footer_nav_list">
                    <span class="footer_nav_list_title">
                        COMPANY
                    </span>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'footer-menu-3',
                        'menu_class'     => 'footer_nav_list_list',
                        'items_wrap'     => '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown" data-submenu-toggle="true" data-multi-open="false" data-close-on-click-inside="false">%3$s</ul>'
                    )); ?>
                </div>
            <?php endif; ?>
            <?php if (has_nav_menu('footer-menu-4')) : ?>
                <div class="footer_nav_list">
                    <span class="footer_nav_list_title">
                        RESOURCES
                    </span>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'footer-menu-4',
                        'menu_class'     => 'footer_nav_list_list',
                        'items_wrap'     => '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown" data-submenu-toggle="true" data-multi-open="false" data-close-on-click-inside="false">%3$s</ul>'
                    )); ?>
                </div>
            <?php endif; ?>
            <?php if (has_nav_menu('footer-menu-5')) : ?>
                <div class="footer_nav_list">
                    <span class="footer_nav_list_title">
                        LEGAL
                    </span>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'footer-menu-5',
                        'menu_class'     => 'footer_nav_list_list',
                        'items_wrap'     => '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown" data-submenu-toggle="true" data-multi-open="false" data-close-on-click-inside="false">%3$s</ul>'
                    )); ?>
                </div>
            <?php endif; ?>
        </section>
        <div class="footer_lower">
            <?php if ($copyright_text): ?>
                <span class="footer_lower_copyrighting">
                    <?php echo esc_html($copyright_text); ?>
                </span>
            <?php endif; ?>
            <?php if ($links_output) : ?>
                <div>
                    <?php echo implode(', ', $links_output); ?>
                </div>
            <?php endif; ?>
        </div>
        <div class="footer_logo">
            <?php show_custom_logo(); ?>
        </div>
    </div>
</footer>
</body>

</html>