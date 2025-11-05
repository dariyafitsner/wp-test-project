<?php
/**
 * Template Part: Home Gear1
 */

$args = array(
    'post_type'      => 'cpt_steps',
    'posts_per_page' => -1,
    'orderby'        => array('date' => 'ASC'),
);
$query = new WP_Query($args);

if ($query->have_posts()) :
    $i = 1;
?>
    <section class="home_gear1">
        <header class="home_gear_header">
            <span>[GEAR 01]</span>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear1.svg')); ?>" alt="Gear 1 Icon" />
        </header>

        <div class="home_gear1_wrapper">
            <?php while ($query->have_posts()) : $query->the_post(); ?>
                <div class="home_gear1_info_container" data-section="<?php echo esc_attr($i); ?>">
                    <span class="home_gear1_info_label"><?php echo esc_html(get_the_title()); ?></span>
                    <div class="home_gear1_info_text_container">
                        <?php echo wp_kses_post(get_the_content()); ?>
                    </div>
                </div>
            <?php $i++; endwhile; ?>
            <?php wp_reset_postdata(); ?>
        </div>
    </section>
<?php endif; ?>