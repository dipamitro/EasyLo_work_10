<?php

/**
 * Title: About Section 2 Columns
 * Slug: fotawp/about-section-cols-two
 * Categories: fotawp
 */
$fotawp_images = array(
    FOTAWP_URL . 'assets/images/pattern_thumb.png',
);
?>
<!-- wp:group {"style":{"spacing":{"padding":{"top":"7rem","bottom":"7rem","right":"var:preset|spacing|60","left":"var:preset|spacing|60"},"blockGap":"7rem"}},"backgroundColor":"black","layout":{"type":"constrained","contentSize":"1180px"}} -->
<div class="wp-block-group has-black-background-color has-background" style="padding-top:7rem;padding-right:var(--wp--preset--spacing--60);padding-bottom:7rem;padding-left:var(--wp--preset--spacing--60)"><!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|80","left":"var:preset|spacing|80"}}}} -->
    <div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":79,"sizeSlug":"full","linkDestination":"none"} -->
            <figure class="wp-block-image size-full"><img src="<?php echo esc_url($fotawp_images[0]) ?>" alt="" class="wp-image-79" /></figure>
            <!-- /wp:image -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"verticalAlignment":"center","style":{"spacing":{"blockGap":"var:preset|spacing|40"}}} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading {"level":1,"style":{"typography":{"lineHeight":1.2}},"textColor":"foregound-alt"} -->
            <h1 class="wp-block-heading has-foregound-alt-color has-text-color" style="line-height:1.2">Mobile Integration for Better Business!</h1>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"style":{"typography":{"fontSize":"18px"},"color":{"text":"#d6d6d6"}}} -->
            <p class="has-text-color" style="color:#d6d6d6;font-size:18px">The purpose of&nbsp;lorem ipsum&nbsp;is to create a natural looking block of text that doesn't distract from the layout. A practice not without&nbsp;controversy, laying out pages with meaningless filler text can be very useful.</p>
            <!-- /wp:paragraph -->

            <!-- wp:spacer {"height":"10px"} -->
            <div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:buttons -->
            <div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"secondary","textColor":"black","style":{"typography":{"textDecoration":"none"}},"className":"is-style-button-hover-primary-bgcolor"} -->
                <div class="wp-block-button is-style-button-hover-primary-bgcolor" style="text-decoration:none"><a class="wp-block-button__link has-black-color has-secondary-background-color has-text-color has-background wp-element-button">Read More</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->

    <!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|80","left":"var:preset|spacing|80"}}}} -->
    <div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","style":{"spacing":{"blockGap":"var:preset|spacing|40"}}} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading {"level":1,"style":{"typography":{"lineHeight":"1.2"}},"textColor":"foregound-alt"} -->
            <h1 class="wp-block-heading has-foregound-alt-color has-text-color" style="line-height:1.2">Mobile Integration for Better Business!</h1>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"style":{"typography":{"fontSize":"18px"},"color":{"text":"#d6d6d6"}}} -->
            <p class="has-text-color" style="color:#d6d6d6;font-size:18px">The purpose of&nbsp;lorem ipsum&nbsp;is to create a natural looking block of text that doesn't distract from the layout. A practice not without&nbsp;controversy, laying out pages with meaningless filler text can be very useful.</p>
            <!-- /wp:paragraph -->

            <!-- wp:spacer {"height":"10px"} -->
            <div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:buttons -->
            <div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"secondary","textColor":"black","style":{"typography":{"textDecoration":"none"}},"className":"is-style-button-hover-primary-bgcolor"} -->
                <div class="wp-block-button is-style-button-hover-primary-bgcolor" style="text-decoration:none"><a class="wp-block-button__link has-black-color has-secondary-background-color has-text-color has-background wp-element-button">Read More</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":79,"sizeSlug":"full","linkDestination":"none"} -->
            <figure class="wp-block-image size-full"><img src="<?php echo esc_url($fotawp_images[0]) ?>" alt="" class="wp-image-79" /></figure>
            <!-- /wp:image -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->