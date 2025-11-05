<?php
/**
 * Template Part: Home Gear2
 */

$gear_2_title  = get_field('gear_2_title');
$gear_2_text   = get_field('gear_2_text');
$gear_2_image  = get_field('gear_2_image');
$gear_2_button = get_field('gear_2_button');
?>

<section class="home_gear2">
    <header class="home_gear_header">
        <span>[GEAR 02]</span>
        <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear2.svg')); ?>" alt="Gear 2 Icon" />
    </header>

    <div class="home_gear2_upper_container">
        <?php if ($gear_2_title) : ?>
            <h2><?php echo esc_html($gear_2_title); ?></h2>
        <?php endif; ?>

        <div class="home_gear2_upper_back">
            <?php if ($gear_2_text) : ?>
                <div class="home_gear2_upper_credits">
                    <div class="credits_scroll">
                        <div class="credits_track">
                            <div class="credits_group">
                                <?php echo wp_kses_post($gear_2_text); ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

            <?php if ($gear_2_image) : ?>
                <img src="<?php echo esc_url($gear_2_image['url']); ?>" alt="<?php echo esc_attr($gear_2_image['alt'] ?? ''); ?>" />
            <?php endif; ?>
        </div>
    </div>

    <div class="home_gear2_lower_container">
        <div class="home_gear2_lower_container_nitro">
            <div class="nitro-effect">
                <img src="<?php echo esc_url(get_theme_file_uri('src/icons/nitro.png')); ?>" alt="Nitro Effect" />
            </div>
            <span class="home_gear2_lower_container_rev">R-R-REV</span>
        </div>

        <div class="home_gear2_lower_container_lower_wrapper">
            <span>IT UP WITH IREV</span>
            <?php if ($gear_2_button) : ?>
                <button><?php echo esc_html($gear_2_button['title']); ?></button>
            <?php endif; ?>
        </div>
    </div>
</section>