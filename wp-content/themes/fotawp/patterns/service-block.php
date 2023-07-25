<?php

/**
 * Title: Services Block
 * Slug: fotawp/services-block
 * Categories: fotawp
 */
$fotawp_images = array(
    FOTAWP_URL . 'assets/images/pattern_image_1.jpg',
    FOTAWP_URL . 'assets/images/pattern_image_4.jpg',
    FOTAWP_URL . 'assets/images/pattern_image_5.jpg',
);
?>
<!-- wp:group {"style":{"color":{"background":"#181717"},"spacing":{"padding":{"right":"var:preset|spacing|50","left":"var:preset|spacing|50","top":"7rem","bottom":"7rem"}}},"layout":{"type":"constrained","contentSize":"1180px"}} -->
<div class="wp-block-group has-background" style="background-color:#181717;padding-top:7rem;padding-right:var(--wp--preset--spacing--50);padding-bottom:7rem;padding-left:var(--wp--preset--spacing--50)"><!-- wp:group {"layout":{"type":"constrained","contentSize":"750px"}} -->
    <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":1,"textColor":"foregound-alt"} -->
        <h1 class="wp-block-heading has-text-align-center has-foregound-alt-color has-text-color">Services Block</h1>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center","style":{"color":{"text":"#aeabab"},"typography":{"fontSize":"18px","lineHeight":1.9}}} -->
        <p class="has-text-align-center has-text-color" style="color:#aeabab;font-size:18px;line-height:1.9">The purpose of <em>lorem ipsum</em> is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

    <!-- wp:spacer {"height":"20px"} -->
    <div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
    <!-- /wp:spacer -->

    <!-- wp:columns {"verticalAlignment":null,"style":{"spacing":{"blockGap":{"top":"3rem","left":"3rem"}}}} -->
    <div class="wp-block-columns"><!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":14,"sizeSlug":"full","linkDestination":"none"} -->
            <figure class="wp-block-image size-full"><img src="<?php echo esc_url($fotawp_images[0]); ?>" alt="" class="wp-image-14" /></figure>
            <!-- /wp:image -->

            <!-- wp:spacer {"height":"1px"} -->
            <div style="height:1px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"28px","fontStyle":"normal","fontWeight":"500"}},"textColor":"background"} -->
            <h3 class="wp-block-heading has-text-align-center has-background-color has-text-color" style="font-size:28px;font-style:normal;font-weight:500">Mobile Application</h3>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","style":{"color":{"text":"#d7d7d7"}},"fontSize":"small"} -->
            <p class="has-text-align-center has-text-color has-small-font-size" style="color:#d7d7d7">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets</p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
            <div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"secondary","textColor":"black","style":{"typography":{"textDecoration":"none"}},"className":"is-style-button-hover-primary-bgcolor"} -->
                <div class="wp-block-button is-style-button-hover-primary-bgcolor" style="text-decoration:none"><a class="wp-block-button__link has-black-color has-secondary-background-color has-text-color has-background wp-element-button">Read More</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":14,"sizeSlug":"full","linkDestination":"none"} -->
            <figure class="wp-block-image size-full"><img src="<?php echo esc_url($fotawp_images[1]); ?>" alt="" class="wp-image-14" /></figure>
            <!-- /wp:image -->

            <!-- wp:spacer {"height":"1px"} -->
            <div style="height:1px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"28px","fontStyle":"normal","fontWeight":"500"}},"textColor":"background"} -->
            <h3 class="wp-block-heading has-text-align-center has-background-color has-text-color" style="font-size:28px;font-style:normal;font-weight:500">StartUp Ideas</h3>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","style":{"color":{"text":"#d7d7d7"}},"fontSize":"small"} -->
            <p class="has-text-align-center has-text-color has-small-font-size" style="color:#d7d7d7">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets</p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
            <div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"secondary","textColor":"black","style":{"typography":{"textDecoration":"none"}},"className":"is-style-button-hover-primary-bgcolor"} -->
                <div class="wp-block-button is-style-button-hover-primary-bgcolor" style="text-decoration:none"><a class="wp-block-button__link has-black-color has-secondary-background-color has-text-color has-background wp-element-button">Read More</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":14,"sizeSlug":"full","linkDestination":"none"} -->
            <figure class="wp-block-image size-full"><img src="<?php echo esc_url($fotawp_images[2]); ?>" alt="" class="wp-image-14" /></figure>
            <!-- /wp:image -->

            <!-- wp:spacer {"height":"1px"} -->
            <div style="height:1px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"28px","fontStyle":"normal","fontWeight":"500"}},"textColor":"background"} -->
            <h3 class="wp-block-heading has-text-align-center has-background-color has-text-color" style="font-size:28px;font-style:normal;font-weight:500">Business Strategy</h3>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","style":{"color":{"text":"#d7d7d7"}},"fontSize":"small"} -->
            <p class="has-text-align-center has-text-color has-small-font-size" style="color:#d7d7d7">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets</p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
            <div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"secondary","textColor":"black","style":{"typography":{"textDecoration":"none"}},"className":"is-style-button-hover-primary-bgcolor"} -->
                <div class="wp-block-button is-style-button-hover-primary-bgcolor" style="text-decoration:none"><a class="wp-block-button__link has-black-color has-secondary-background-color has-text-color has-background wp-element-button">Read More</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->