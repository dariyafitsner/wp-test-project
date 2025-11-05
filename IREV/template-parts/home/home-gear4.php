<?php
/**
 * Template Part: Home Gear4
 */

$gear_4_title     = get_field('gear_4_title');
$gear_4_content   = get_field('gear_4_content');
$gear_4_image     = get_field('gear_4_image');
$industry_item    = get_field('industry_item');
$industry_item_2  = get_field('industry_item_2');
$industry_item_3  = get_field('industry_item_3');
$industry_item_4  = get_field('industry_item_4');
$industry_item_5  = get_field('industry_item_5');
$industry_image   = get_field('industry_image');
?>

<section class="home_gear4">
    <header class="home_gear_header">
        <span>[GEAR 04]</span>
        <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear4.svg')); ?>" alt="Gear 4 Icon" />
    </header>

    <div class="home_gear4_container">
        <?php for ($i = 1; $i <= 4; $i++) : ?>
            <img class="star<?php echo $i; ?>" src="<?php echo esc_url(get_theme_file_uri('src/icons/gear4star.svg')); ?>" alt="Star <?php echo $i; ?>" />
        <?php endfor; ?>

        <?php if ($gear_4_image) : ?>
            <img src="<?php echo esc_url($gear_4_image['url']); ?>" alt="<?php echo esc_attr($gear_4_image['alt'] ?? ''); ?>" />
        <?php endif; ?>

        <?php if ($gear_4_content) : ?>
            <div class="text_wrapper">
                <?php echo wp_kses_post($gear_4_content); ?>
            </div>
        <?php endif; ?>
    </div>

    <div class="home_gear4_lower_container">
        <?php if ($gear_4_title) : ?>
            <h2><?php echo esc_html($gear_4_title); ?></h2>
        <?php endif; ?>

        <div class="home_gear4_lower_label_wrapper">
            <div class="label">
                <?php if ($industry_item) : ?>
                    <div class="label_upper"><?php echo esc_html($industry_item); ?></div>
                <?php endif; ?>
                <div class="border">
                    <div class="border_vertical">
                        <div class="upper_circle circle1"></div>
                        <div class="lower_circle circle2"></div>
                    </div>
                    <div class="border_horizontal"></div>
                </div>
                <?php if ($industry_item_2) : ?>
                    <div class="label_lower"><?php echo esc_html($industry_item_2); ?></div>
                <?php endif; ?>
            </div>

            <div class="border_link"></div>

            <div class="label">
                <?php if ($industry_item_3) : ?>
                    <div class="label_upper"><?php echo esc_html($industry_item_3); ?></div>
                <?php endif; ?>
                <div class="border">
                    <div class="border_horizontal"></div>
                    <div class="border_vertical second">
                        <div class="upper_circle circle3"></div>
                        <div class="lower_circle circle4"></div>
                    </div>
                    <div class="border_horizontal"></div>
                </div>
                <?php if ($industry_item_4) : ?>
                    <div class="label_lower"><?php echo esc_html($industry_item_4); ?></div>
                <?php endif; ?>
            </div>

            <div class="border_link"></div>

            <div class="label third">
                <?php if ($industry_item_5) : ?>
                    <div class="label_upper"><?php echo esc_html($industry_item_5); ?></div>
                <?php endif; ?>
                <div class="border">
                    <div class="border_horizontal"></div>
                    <div class="border_vertical second">
                        <div class="upper_circle circle5"></div>
                    </div>
                </div>
                <div class="label_lower last">
                    <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear4logo.svg')); ?>" alt="Gear 4 Logo" />
                </div>
            </div>
        </div>

        <?php if ($industry_image) : ?>
            <img class="gear4back" src="<?php echo esc_url($industry_image['url']); ?>" alt="<?php echo esc_attr($industry_image['alt'] ?? ''); ?>" />
        <?php endif; ?>
    </div>
</section>