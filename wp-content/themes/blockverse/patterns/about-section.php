<?php

/**
 * Title: About Section
 * Slug: blockverse/about-section
 * Categories: blockverse
 */
$blockverse_images = array(
    BLOCKVERSE_URL . 'assets/images/about_img.jpg',
);
?>
<!-- wp:group {"style":{"spacing":{"padding":{"top":"7rem","bottom":"7rem","right":"var:preset|spacing|40","left":"var:preset|spacing|40"},"margin":{"top":"0","bottom":"0"}}},"backgroundColor":"nutral","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group has-nutral-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:7rem;padding-right:var(--wp--preset--spacing--40);padding-bottom:7rem;padding-left:var(--wp--preset--spacing--40)"><!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|80","left":"7rem"}}}} -->
    <div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":704,"sizeSlug":"full","linkDestination":"none"} -->
            <figure class="wp-block-image size-full"><img src="<?php echo esc_url($blockverse_images[0]) ?>" alt="" class="wp-image-704" /></figure>
            <!-- /wp:image -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"verticalAlignment":"center","style":{"spacing":{"blockGap":"0"}}} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading {"level":5,"style":{"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"700","letterSpacing":"2px"}},"textColor":"primary","fontSize":"small"} -->
            <h5 class="wp-block-heading has-primary-color has-text-color has-small-font-size" style="font-style:normal;font-weight:700;letter-spacing:2px;text-transform:uppercase">About Us</h5>
            <!-- /wp:heading -->

            <!-- wp:heading {"level":1,"style":{"typography":{"fontStyle":"normal","fontWeight":"600"},"spacing":{"margin":{"top":"var:preset|spacing|30"}}},"textColor":"foreground","fontSize":"xxx-large"} -->
            <h1 class="wp-block-heading has-foreground-color has-text-color has-xxx-large-font-size" style="margin-top:var(--wp--preset--spacing--30);font-style:normal;font-weight:600">Our Mission and Vision</h1>
            <!-- /wp:heading -->

            <!-- wp:spacer {"height":"20px"} -->
            <div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:paragraph -->
            <p>Our mission at FotaWp is to empower individuals and businesses with innovative solutions that drive growth, efficiency, and success. Our ultimate goal is to make a positive impact on the world by helping our clients achieve their full potential.</p>
            <!-- /wp:paragraph -->

            <!-- wp:spacer {"height":"30px"} -->
            <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:buttons -->
            <div class="wp-block-buttons"><!-- wp:button -->
                <div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Read More</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->