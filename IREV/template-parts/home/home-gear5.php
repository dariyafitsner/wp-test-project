<?php

/**
 * Template Part: Home Gear5
 */

$gear_5_title = get_field('gear_5_title');
$faq_title = get_field('faq_title');
$faq_image = get_field('faq_image');
?>

<section class="home_gear5">
    <header class="home_gear_header">
        <span>[GEAR 05]</span>
        <img
            src="<?php echo esc_url(get_theme_file_uri('src/icons/gear5.svg')); ?>" />
    </header>
    <div class="home_gear5_container">
        <?php if ($gear_5_title) : ?>
            <h2><?php echo $gear_5_title; ?></h2>
        <?php endif; ?>

        <?php
        $args = array(
            'post_type' => 'cpt_solutions',
            'posts_per_page' => -1,
            'orderby' => ['date' => 'ASC'],
        );
        $query = new WP_Query($args);
        if ($query->have_posts()) :
        ?>
            <div class="home_gear5_cards_container">
                <?php
                $i = 0;

                while ($query->have_posts()) :
                    $query->the_post();

                    $icon     = get_field('icon');
                    $subtitle = get_field('subtitle');
                    $link     = get_field('link');
                    $thumb    = get_the_post_thumbnail_url(get_the_ID(), 'full');
                ?>
                    <div class="cards_card" data-card-index="<?php echo esc_attr($i); ?>">

                        <?php if ($thumb) : ?>
                            <img src="<?php echo esc_url($thumb); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" />
                        <?php endif; ?>

                        <div class="card_label">
                            <div class="card_label_wrapper">
                                <?php if ($icon && isset($icon['url'])) : ?>
                                    <img src="<?php echo esc_url($icon['url']); ?>" alt="<?php echo esc_attr($icon['alt'] ?? ''); ?>" />
                                <?php endif; ?>

                                <div><?php the_title(); ?></div>
                            </div>

                            <?php if ($subtitle) : ?>
                                <span><?php echo esc_html($subtitle); ?></span>
                            <?php endif; ?>
                        </div>

                        <div class="card_content">
                            <?php echo wp_kses_post(get_the_content()); ?>
                        </div>

                        <?php if ($link) : ?>
                            <button class="card_button">
                                <?php echo esc_html($link['title']); ?>
                            </button>
                        <?php endif; ?>
                    </div>

                <?php
                    $i++;
                endwhile;

                wp_reset_postdata();
                ?>

            </div>
        <?php endif; ?>
    </div>

    <div class="home_gear5_lower_container">
        <?php if ($faq_image) : ?>
            <img
                src="<?php echo esc_url($faq_image['url']); ?>"
                alt="<?php echo esc_attr($faq_image['alt'] ?? ''); ?>" />
        <?php endif; ?>

        <?php if ($faq_title) : ?>
            <h2><?php echo esc_html($faq_title); ?></h2>
        <?php endif; ?>

        <?php
        $args = array(
            'post_type'      => 'cpt_faq',
            'posts_per_page' => -1,
            'orderby'        => array('date' => 'ASC'),
        );

        $query = new WP_Query($args);

        if ($query->have_posts()) :
        ?>
            <div class="home_gear5_accordion">
                <?php
                while ($query->have_posts()) :
                    $query->the_post();
                ?>
                    <div class="accordion_item">
                        <span class="accordion_title"><?php the_title(); ?></span>
                        <span class="text_opened"><?php echo wp_kses_post(get_the_content()); ?></span>
                        <button class="accordion_toggle" aria-label="<?php esc_attr_e('Toggle FAQ', 'textdomain'); ?>">
                            <img
                                class="open"
                                src="<?php echo esc_url(get_theme_file_uri('src/icons/accordionopen.svg')); ?>"
                                alt="<?php esc_attr_e('Open', 'textdomain'); ?>" />
                            <img
                                class="close"
                                src="<?php echo esc_url(get_theme_file_uri('src/icons/close.svg')); ?>"
                                alt="<?php esc_attr_e('Close', 'textdomain'); ?>" />
                        </button>
                    </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
        <?php endif; ?>
    </div>

</section>