<?php

/**
 * Title: Hero Section 
 * Slug: blockverse/hero-section
 * Categories: blockverse
 */
$blockverse_images = array(
    BLOCKVERSE_URL . 'assets/images/banner_image.jpg',
);
?>
<!-- wp:cover {"url":"<?php echo esc_url($blockverse_images[0]) ?>","id":6,"minHeight":860,"gradient":"secondary-gradient"} -->
<div class="wp-block-cover" style="min-height:860px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim wp-block-cover__gradient-background has-background-gradient has-secondary-gradient-gradient-background"></span><img class="wp-block-cover__image-background wp-image-6" alt="" src="<?php echo esc_url($blockverse_images[0]) ?>" data-object-fit="cover" />
    <div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"}}},"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50)"><!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|80","left":"var:preset|spacing|80"}}}} -->
            <div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"100%","style":{"spacing":{"blockGap":"var:preset|spacing|50","padding":{"top":"1.5rem"}}}} -->
                <div class="wp-block-column is-vertically-aligned-center" style="padding-top:1.5rem;flex-basis:100%"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|40"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
                    <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":6,"style":{"typography":{"fontStyle":"normal","fontWeight":"600","textTransform":"uppercase","letterSpacing":"2px"}},"textColor":"light-shade","fontSize":"x-small"} -->
                        <h6 class="wp-block-heading has-text-align-center has-light-shade-color has-text-color has-x-small-font-size" style="font-style:normal;font-weight:600;letter-spacing:2px;text-transform:uppercase">Welcome to BlockVerse</h6>
                        <!-- /wp:heading -->

                        <!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontStyle":"normal","fontWeight":"500","lineHeight":1.3,"fontSize":"4em"}}} -->
                        <h1 class="wp-block-heading has-text-align-center" style="font-size:4em;font-style:normal;font-weight:500;line-height:1.3">The Ultimate Partner for Your Digital Solutions.</h1>
                        <!-- /wp:heading -->
                    </div>
                    <!-- /wp:group -->

                    <!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":1.6}}} -->
                    <p class="has-text-align-center" style="line-height:1.6">From its medieval origins to the digital era, learn everything there is to know about the ubiquitous&nbsp;lorem ipsum&nbsp;passage.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"typography":{"fontStyle":"normal","fontWeight":"500"},"spacing":{"margin":{"top":"var:preset|spacing|70"}}},"fontSize":"normal"} -->
                    <div class="wp-block-buttons has-custom-font-size has-normal-font-size" style="margin-top:var(--wp--preset--spacing--70);font-style:normal;font-weight:500"><!-- wp:button {"style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}}} -->
                        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)">Create Free Account</a></div>
                        <!-- /wp:button -->

                        <!-- wp:button {"backgroundColor":"foreground-alt","textColor":"background-alt","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"className":"is-style-button-hover-secondary-bgcolor"} -->
                        <div class="wp-block-button is-style-button-hover-secondary-bgcolor"><a class="wp-block-button__link has-background-alt-color has-foreground-alt-background-color has-text-color has-background wp-element-button" href="#" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)">Get Started Today</a></div>
                        <!-- /wp:button -->
                    </div>
                    <!-- /wp:buttons -->

                    <!-- wp:spacer {"height":"10px"} -->
                    <div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
                    <!-- /wp:spacer -->
                </div>
                <!-- /wp:column -->
            </div>
            <!-- /wp:columns -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->