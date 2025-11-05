<?php

/**
 * Template Part: Home Gear6
 */

$gear_6_title  = get_field('gear_6_title');
$gear_6_image  = get_field('gear_6_image');
$gear_6_button = get_field('gear_6_button');
?>

<section class="home_gear6">
    <header class="home_gear_header">
        <span>[GEAR 06]</span>
        <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear6.svg')); ?>" alt="Gear 6 icon" />
    </header>

    <div class="home_gear6_container">
        <?php if ($gear_6_title) : ?>
            <h2><?php echo esc_html($gear_6_title); ?></h2>
        <?php endif; ?>

        <?php if ($gear_6_button) : ?>
            <button class="open_modal"><?php echo esc_html($gear_6_button['title']); ?></button>
        <?php endif; ?>

        <?php if ($gear_6_image) : ?>
            <img
                src="<?php echo esc_url($gear_6_image['url']); ?>"
                alt="<?php echo esc_attr($gear_6_image['alt']); ?>" />
        <?php endif; ?>
    </div>
</section>