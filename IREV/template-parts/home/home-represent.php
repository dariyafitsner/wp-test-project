<?php
/**
 * Template Part: Home Represent
 */

$top_title = get_field('top_title');
$top_image = get_field('top_image');
$top_text = get_field('top_text');
$top_rating_text = get_field('top_rating_text');
$top_video = get_field('top_video');
?>

<section class="home_represent">
    <div class="home_represent_upperWrapper">
        <div class="home_represent_counter">
            <span class="home_represent_counter_timer">00:03,00</span>
            <img class="home_represent_counter_red" src="<?php echo esc_url(get_theme_file_uri('src/icons/dot.svg')); ?>" alt="" />
            <img class="home_represent_counter_yellow" src="<?php echo esc_url(get_theme_file_uri('src/icons/yellowDot.svg')); ?>" alt="" />
            <img class="home_represent_counter_green" src="<?php echo esc_url(get_theme_file_uri('src/icons/greenDot.svg')); ?>" alt="" />
            <span class="home_represent_counter_go">let`s Go!</span>
        </div>

        <div class="home_represent_general">
            <?php if ($top_title) : ?>
                <h1 class="home_represent_general_slogan">
                    <?php echo esc_html($top_title); ?>
                </h1>
            <?php endif; ?>

            <div class="home_represent_form_container">
                <form class="home_represent_form">
                    <input type="email" placeholder="Enter e-mail" class="home_represent_form_container_input" />
                    <button class="home_represent_form_container_button" type="submit">test-drive</button>
                </form>
                <span>[Only 5 slots left this month]</span>
            </div>
        </div>
    </div>

    <?php if ($top_rating_text) : ?>
        <div class="home_represent_rate">
            <?php
            $args = array(
                'post_type' => 'cpt_partners',
                'posts_per_page' => 10,
                'orderby' => array('date' => 'ASC'),
            );
            $query = new WP_Query($args);

            if ($query->have_posts()) :
            ?>
                <div class="home_represent_rate_avatars">
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <?php
                        $thumb = get_the_post_thumbnail_url(get_the_ID(), 'full');
                        if ($thumb) :
                        ?>
                            <img src="<?php echo esc_url($thumb); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" />
                        <?php endif; ?>
                    <?php endwhile; wp_reset_postdata(); ?>
                </div>
            <?php endif; ?>

            <img class="home_represent_rate_rating" src="<?php echo esc_url(get_theme_file_uri('src/icons/stars.svg')); ?>" alt="rating" />
            <span><?php echo esc_html($top_rating_text); ?></span>
        </div>
    <?php endif; ?>

    <?php if ($top_text || $top_video) : ?>
        <div class="home_represent_lowerWrapper">
            <?php if ($top_text) : ?>
                <span class="home_represent_lowerWrapper_text">
                    <?php echo wp_kses_post($top_text); ?>
                </span>
            <?php endif; ?>

            <?php if ($top_video && !empty($top_video['url'])) : ?>
                <div class="home_represent_lowerWrapper_video">
                    <div class="video_cont">
                        <video width="100%">
                            <source src="<?php echo esc_url($top_video['url']); ?>" type="video/mp4">
                        </video>
                        <img src="<?php echo esc_url(get_theme_file_uri('src/icons/playbutton.svg')); ?>" alt="play" />
                    </div>
                    <div class="video_player">
                        <span>00:30</span>
                        <button><img src="<?php echo esc_url(get_theme_file_uri('src/icons/play.svg')); ?>" alt="play icon" /></button>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    <?php endif; ?>

    <?php if ($top_image && !empty($top_image['url'])) : ?>
        <img class="home_represent_backgroundImg"
             src="<?php echo esc_url($top_image['url']); ?>"
             alt="<?php echo esc_attr($top_image['alt'] ?? ''); ?>" />
    <?php endif; ?>
</section>