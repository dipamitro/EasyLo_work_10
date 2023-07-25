<?php
include_once(ABSPATH . 'wp-admin/includes/plugin.php');
$is_cozy_addons_active = is_plugin_active('cozy-addons/cozy-addons.php');
if ($is_cozy_addons_active) {
    $product_cozy_addons_url = admin_url() . 'admin.php?page=_ct_cozy_addons';
    $prouct_cozy_addons_link_target = '_self';
} else {
    $product_cozy_addons_url = 'https://cozythemes.com/cozy-addons/';
    $prouct_cozy_addons_link_target = '_blank';
}

?>
<div class="ct-companion-dashboard">
    <div class="dashboard-container">
        <h1 class="dashboard-header"><?php echo __('Hello, Welcome to CT Companions!', 'patternberg'); ?></h1>
        <div class="dashboard-content">
            <h3 class="ct-short-text">
                <?php echo __('CT Companions is the companion plugin for Cozy Themes, which provides additional functionality and premium products activator feature of products for Cozy Themes. Checkout our products below:', 'patternberg'); ?>
            </h3>
            <div class="ct-content">


                <div class="ct-dashboard-row second-row">
                    <div class="ct-dashboard-column-one-third">
                        <div class="product-holder cpt-box">
                            <?php
                            $cc_current_theme = wp_get_theme()->get('Name');
                            if ($cc_current_theme == 'FotaWP') { ?>
                                <a href="<?php echo admin_url(); ?>themes.php?page=about-fotawp"><img src="<?php echo CT_COMPANION_SDK_URL . 'images/ct_fotawp_screen-min.png'; ?>" /></a>
                                <h3> <?php echo __('FOTAWP- FSE Multipurpose Theme', 'cozy-addons'); ?></h3>
                                <p><?php echo __('Meet the Most Advanced FSE WordPress Theme', 'cozy-addons') ?></p>
                                <a href="<?php echo admin_url(); ?>themes.php?page=about-fotawp" class="ct-dashboard-button"><?php echo __('Explore FotaWP', 'cozy-addons') ?></a>
                            <?php } else { ?>
                                <a href="https://cozythemes.com/fotawp/" target="_blank"><img src="<?php echo CT_COMPANION_SDK_URL . 'images/ct_fotawp_screen-min.png'; ?>" /></a>
                                <h3> <?php echo __('FOTAWP- FSE Multipurpose Theme', 'cozy-addons'); ?></h3>
                                <p><?php echo __('Meet the Most Advanced FSE WordPress Theme', 'cozy-addons') ?></p>
                                <a href="https://cozythemes.com/fotawp/" class="ct-dashboard-button"><?php echo __('Explore FotaWP', 'cozy-addons') ?></a>
                            <?php }  ?>

                        </div>
                    </div>
                    <div class="ct-dashboard-column-one-third">
                        <div class="product-holder">
                            <a href="<?php echo esc_url($product_cozy_addons_url) ?>" target="<?php echo esc_attr($prouct_cozy_addons_link_target) ?>"><img src="<?php echo CT_COMPANION_SDK_URL . 'images/ct_cozy_addons.png'; ?>" /></a>
                            <h3> <?php echo __('Cozy Addons for Elementor', 'cozy-addons'); ?></h3>
                            <p>
                                <?php echo __('Official one click demo importer for themes of CozyThemes, that means it is dependent plugin for themes by CozyThemes, We are not recommend to use this plugin with other theme or independently', 'patternberg'); ?>
                            </p>
                            <a href="<?php echo esc_url($product_cozy_addons_url) ?>" target="<?php echo esc_attr($prouct_cozy_addons_link_target) ?>" class="ct-dashboard-button"><?php echo __('Explore More', 'patternberg') ?></a>
                        </div>
                    </div><!--end of col -->
                    <div class="ct-dashboard-column-one-third">
                        <div class="product-holder cpt-box">
                            <a href="https://cozythemes.com/cozy-essential-addons/" target="_blank"><img src="<?php echo CT_COMPANION_SDK_URL . 'images/cpt_image.png'; ?>" /></a>
                            <h3> <?php echo __('Cozy Essential Addons', 'cozy-addons'); ?></h3>
                            <p>
                                <?php echo __('Official one click demo importer for themes of CozyThemes, that means it is dependent plugin for themes by CozyThemes, We are not recommend to use this plugin with other theme or independently', 'patternberg'); ?>
                            </p>
                            <a href="https://cozythemes.com/cozy-essential-addons/" target="_blank" class="ct-dashboard-button"><?php echo __('Explore More', 'cozy-addons') ?></a>
                        </div>
                    </div><!--end of col -->
                </div>
            </div>
        </div>
        <div class="ct-dashboard-row">
            <div class="ct-upsell-text">
                <?php
                if (!cozy_addons_premium_access()) { ?>

                    <h1> <?php echo __('Unlock all premium features with just one license.', 'patternberg'); ?></h1>
                    <a href="https://cozythemes.com/pricing-and-plans/" target="_blank" class="ct-dashboard-button"><?php echo __('Upgrade to Pro', 'patternberg') ?></a>

                <?php
                } else { ?>
                    <h1> <?php echo __('Explore More products and Features.', 'patternberg'); ?></h1>
                    <a href="https://cozythemes.com/" target="_blank" class="ct-dashboard-button"><?php echo __('Visit Site', 'patternberg') ?></a>
            </div>
        <?php } ?>
        </div>
    </div>
</div>