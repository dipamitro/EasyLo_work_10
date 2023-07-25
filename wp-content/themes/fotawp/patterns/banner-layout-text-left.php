<?php

/**
 * Title: Banner/Hero Layout Left Centered
 * Slug: fotawp/banner-layout-text-left
 * Categories: fotawp
 */
$fotawp_images = array(
    FOTAWP_URL . 'assets/images/pattern_image.png',
);
?>
<!-- wp:group {"style":{"spacing":{"padding":{"top":"8rem","bottom":"var:preset|spacing|80","right":"var:preset|spacing|70","left":"var:preset|spacing|80"},"blockGap":"var:preset|spacing|40"}},"gradient":"second-primary-gradient","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group has-second-primary-gradient-gradient-background has-background" style="padding-top:8rem;padding-right:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--80);padding-left:var(--wp--preset--spacing--80)"><!-- wp:columns -->
    <div class="wp-block-columns"><!-- wp:column {"width":"66.66%"} -->
        <div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|30","margin":{"bottom":"var:preset|spacing|70"}}},"layout":{"type":"constrained","contentSize":"100%"}} -->
            <div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--70)"><!-- wp:heading {"textAlign":"left","style":{"typography":{"fontStyle":"normal","fontWeight":"500","lineHeight":1.2}},"textColor":"foregound-alt","fontSize":"xxx-large"} -->
                <h2 class="wp-block-heading has-text-align-left has-foregound-alt-color has-text-color has-xxx-large-font-size" style="font-style:normal;font-weight:500;line-height:1.2">Meet the Tech Partner for Your Business Growth</h2>
                <!-- /wp:heading -->

                <!-- wp:paragraph {"align":"left","style":{"color":{"text":"#d7caea"},"typography":{"lineHeight":1.7}}} -->
                <p class="has-text-align-left has-text-color" style="color:#d7caea;line-height:1.7">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                <!-- /wp:paragraph -->

                <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|60"}}}} -->
                <div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--60)"><!-- wp:button {"backgroundColor":"secondary","textColor":"heading-color","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"className":"is-style-button-hover-white-bgcolor"} -->
                    <div class="wp-block-button is-style-button-hover-white-bgcolor"><a class="wp-block-button__link has-heading-color-color has-secondary-background-color has-text-color has-background wp-element-button" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)">Schedule an Appointment</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"width":"33.33%"} -->
        <div class="wp-block-column" style="flex-basis:33.33%"></div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->

    <!-- wp:image {"align":"wide","id":55,"sizeSlug":"full","linkDestination":"none"} -->
    <figure class="wp-block-image alignwide size-full"><img src="<?php echo esc_url($fotawp_images[0]) ?>" alt="" class="wp-image-55" /></figure>
    <!-- /wp:image -->
</div>
<!-- /wp:group -->