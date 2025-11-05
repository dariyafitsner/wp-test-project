<?php

/**
 * Template Part: Home Gear3 (single query version)
 */

$gear_3_title = get_field('gear_3_title');
$gear_3_image = get_field('gear_3_image');
?>

<section class="home_gear3">
    <header class="home_gear_header">
        <span>[GEAR 03]</span>
        <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear3.svg')); ?>" alt="Gear icon" />
    </header>

    <div class="home_gear3_container">
        <?php if ($gear_3_title) : ?>
            <h2><?php echo esc_html($gear_3_title); ?></h2>
        <?php endif; ?>

        <?php if (!empty($gear_3_image['url'])) : ?>
            <img class="home_gear3_background"
                src="<?php echo esc_url($gear_3_image['url']); ?>"
                alt="<?php echo esc_attr($gear_3_image['alt'] ?? ''); ?>" />
        <?php endif; ?>

        <?php
        $args = [
            'post_type'      => 'cpt_partners',
            'posts_per_page' => 10,
            'orderby'        => ['date' => 'ASC'],
        ];
        $query = new WP_Query($args);

        if ($query->have_posts()) :
            $partners = [];

            while ($query->have_posts()) :
                $query->the_post();

                $partners[] = [
                    'id'       => get_the_ID(),
                    'title'    => get_the_title(),
                    'content'  => get_the_content(),
                    'thumb'    => get_the_post_thumbnail_url(get_the_ID(), 'full'),
                    'company'  => get_field('company'),
                ];
            endwhile;
            wp_reset_postdata();
        ?>

            <div class="home_gear3_clients">
                <div class="home_gear3_clients_avatar">
                    <?php foreach ($partners as $index => $partner) : ?>
                        <div class="avatar-item">
                            <button data-trigger="client<?php echo esc_attr($index + 1); ?>">
                                <?php if ($partner['thumb']) : ?>
                                    <img src="<?php echo esc_url($partner['thumb']); ?>"
                                        alt="<?php echo esc_attr($partner['title']); ?>" />
                                <?php endif; ?>
                            </button>
                            <div class="tooltip"><?php echo esc_html($partner['title']); ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <div class="home_gear3_reviews">
                <?php foreach ($partners as $index => $partner) : ?>
                    <div class="home_gear3_reviews_review"
                        data-client="client<?php echo esc_attr($index + 1); ?>">
                        <span><?php echo wp_kses_post($partner['content']); ?></span>
                        <div class="client">
                            <?php if ($partner['thumb']) : ?>
                                <img src="<?php echo esc_url($partner['thumb']); ?>"
                                    alt="<?php echo esc_attr($partner['title']); ?>" />
                            <?php endif; ?>
                            <div class="client_info">
                                <span class="client_name"><?php echo esc_html($partner['title']); ?></span>
                                <?php if (!empty($partner['company'])) : ?>
                                    <span class="client_additional">
                                        <?php echo esc_html($partner['company']); ?>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

        <?php endif; ?>
    </div>
</section>