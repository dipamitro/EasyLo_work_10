<?php

/**
 * Title: Header Magazine
 * Slug: fotawp/header-magazine
 * Categories: fotawp, header
 */
$fotawp_images = array(
  FOTAWP_URL . 'assets/images/banner_ads.jpg',
);
?>
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|20","right":"var:preset|spacing|40","bottom":"var:preset|spacing|20","left":"var:preset|spacing|40"}}},"backgroundColor":"foregound-alt","className":"is-style-fotawp-boxshadow-medium","layout":{"type":"constrained","contentSize":"1180px"}} -->
  <div class="wp-block-group is-style-fotawp-boxshadow-medium has-foregound-alt-background-color has-background" style="padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--40)"><!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
    <div class="wp-block-group"><!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap"}} -->
      <div class="wp-block-group"><!-- wp:paragraph {"fontSize":"small"} -->
        <p class="has-small-font-size"><strong>+1 (012) 345-6789</strong></p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph -->
        <p>| </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"fontSize":"small"} -->
        <p class="has-small-font-size"><strong>info@yoursite.com</strong></p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->

      <!-- wp:columns -->
      <div class="wp-block-columns"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:social-links {"style":{"spacing":{"blockGap":{"top":"var:preset|spacing|20","left":"var:preset|spacing|20"}}}} -->
          <ul class="wp-block-social-links"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

            <!-- wp:social-link {"url":"#","service":"instagram"} /-->

            <!-- wp:social-link {"url":"#","service":"pinterest"} /-->

            <!-- wp:social-link {"url":"#","service":"spotify"} /-->
          </ul>
          <!-- /wp:social-links -->
        </div>
        <!-- /wp:column -->
      </div>
      <!-- /wp:columns -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20","right":"var:preset|spacing|40","left":"var:preset|spacing|40"}}},"layout":{"type":"constrained","contentSize":"1180px"}} -->
  <div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--40)"><!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
    <div class="wp-block-group"><!-- wp:site-title {"style":{"typography":{"fontStyle":"normal","fontWeight":"600","textDecoration":"none"}},"fontSize":"x-large"} /-->

      <!-- wp:image {"id":14,"sizeSlug":"full","linkDestination":"none"} -->
      <figure class="wp-block-image size-full"><img src="<?php echo esc_url($fotawp_images[0]); ?>" alt="" class="wp-image-14" /></figure>
      <!-- /wp:image -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"style":{"spacing":{"padding":{"top":"0","right":"var:preset|spacing|40","bottom":"0","left":"var:preset|spacing|40"}}},"backgroundColor":"primary","layout":{"type":"constrained","contentSize":"1180px"}} -->
  <div class="wp-block-group has-primary-background-color has-background" style="padding-top:0;padding-right:var(--wp--preset--spacing--40);padding-bottom:0;padding-left:var(--wp--preset--spacing--40)"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
    <div class="wp-block-group"><!-- wp:navigation {"ref":11,"textColor":"foregound-alt","layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"blockGap":"var:preset|spacing|50"},"typography":{"lineHeight":3.1,"textDecoration":"none"}},"fontSize":"small"} /--></div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->