<?php
include_once(ABSPATH . 'wp-admin/includes/plugin.php');
$is_elementor_install = file_exists(WP_PLUGIN_DIR . '/elementor/elementor.php');
$is_elementor_active = is_plugin_active('elementor/elementor.php');
$elementor_active_status_class = '';
if ($is_elementor_active) {
	$elementor_active_status_class = 'active';
}

$is_cozy_essentials_install = file_exists(WP_PLUGIN_DIR . '/cozy-essential-addons/cozy-essential-addons.php');
$is_cozy_essentials_active = is_plugin_active('cozy-essential-addons/cozy-essential-addons.php');
$cozy_essential_status_class = '';
if ($is_cozy_essentials_active) {
	$cozy_essential_status_class = 'active';
}

$is_cfseven_install = file_exists(WP_PLUGIN_DIR . '/contact-form-7/wp-contact-form-7.php');
$is_cfseven_active = is_plugin_active('contact-form-7/wp-contact-form-7.php');
$cfseven_status_class = '';
if ($is_cfseven_active) {
	$cfseven_status_class = 'active';
}

$is_woo_install = file_exists(WP_PLUGIN_DIR . '/woocommerce/woocommerce.php');
$is_woo_active = is_plugin_active('woocommerce/woocommerce.php');
$woo_status_class = '';
if ($is_woo_active) {
	$woo_status_class = 'active';
}
?>
<div class="cozy-addons-dashboard">
	<div class="dashboard-holder">
		<div class="ca-dashboard-header">
			<div class="header-left">
				<h1><?php echo __('Welcome to the Cozy Addons!', 'cozy-addons'); ?></h1>
				<h4 class="addons-info"><?php echo __('Cozy Addons for Elementor is an elementor widgets plugin, which provides additional widgets and layout for Elementor, Please install and activate the following plugins as your requirement to make work properly.', 'cozy-addons'); ?></h4>
				<div class="ca-basic-guideline">
					<h3><?php echo __('How it is work?', 'cozy-addons') ?></h3>
					<p><?php echo __('Once you have installed and activated the plugin, You can just drag and drop the widgets in page edit mode, you can find our widgets under the name of "Cozy Addons" on the sidebar panel of Elementor Widgets.', 'cozy-addons') ?> </p>
					<h3><?php echo __('Access Header & Footer Builder and Custom Scripts (PRO Only)', 'cozy-addons') ?></h3>
					<p> <?php echo __('You can find the header and footer builder, custom CSS, custom scripts and fonts options under the menu name "CT Companions" at the sidebar menu.', 'cozy-addons') ?></p>
				</div>
				<div class="cozy-recommended-plugins">
					<h3><?php echo __('Required & Recommended Plugins', 'cozy-addons'); ?></h3>
					<ul class="plugins-list">
						<li class="<?php echo esc_attr($elementor_active_status_class); ?>">


							<span class="dashicons dashicons-yes-alt"></span> <?php echo __('Elementor', 'cozy-addons'); ?> <span class="info"><?php echo __('(*Required)', 'cozy-addons'); ?></span>
							<?php
							if ($is_elementor_active) { ?>
								<span class="plugin-status">
									<?php echo __('Activated', 'cozy-addons'); ?>
								</span>
							<?php } elseif ($is_elementor_install && !$is_elementor_active) { ?>
								<a href="<?php get_admin_url(); ?>plugins.php?action=active&plugin=elementor"><span class="plugin-status"><?php echo __('Activate Plugin', 'cozy-addons'); ?></span></a>
							<?php } else { ?>
								<a href="<?php get_admin_url(); ?>plugin-install.php?tab=plugin-information&plugin=elementor&TB_iframe=true&width=600&height=550"><span class="plugin-status"><?php echo __('Install & Activate', 'cozy-addons'); ?></span></a>
							<?php  } ?>

						</li>
						<li class="<?php echo esc_attr($cozy_essential_status_class); ?>"><span class="dashicons dashicons-yes-alt"></span> <?php echo __('Cozy Essential Addons', 'cozy-addons'); ?> <span class="info"> <?php echo __('(Required for Custom Post Type)', 'cozy-addons'); ?></span>

							<?php
							if ($is_cozy_essentials_active) { ?>
								<span class="plugin-status">
									<?php echo __('Activated', 'cozy-addons'); ?>
								</span>
							<?php } elseif ($is_cozy_essentials_install && !$is_cozy_essentials_active) { ?>
								<a href="<?php get_admin_url(); ?>plugins.php?action=active&plugin=cozy-essential-addons"><span class="plugin-status"><?php echo __('Activate Plugin', 'cozy-addons'); ?></span></a>
							<?php } else { ?>
								<a href="<?php get_admin_url(); ?>plugin-install.php?s=cozy%20essential%20addons&tab=search&type=term"><span class="plugin-status"><?php echo __('Install & Activate', 'cozy-addons'); ?></span></a>
							<?php  } ?>
						</li>

						<li class="<?php echo esc_attr($woo_status_class); ?>"><span class="dashicons dashicons-yes-alt"></span> <?php echo __('Woocommerce', 'cozy-addons'); ?> <span class="info"><?php echo __('(Required only for Woocommerce Widgets)', 'cozy-addons'); ?></span>
							<?php
							if ($is_woo_active) { ?>
								<span class="plugin-status">
									<?php echo __('Activated', 'cozy-addons'); ?>
								</span>
							<?php } elseif ($is_woo_install && !$is_woo_active) { ?>
								<a href="<?php get_admin_url(); ?>plugins.php?action=active&plugin=woocommerce"><span class="plugin-status"><?php echo __('Activate Plugin', 'cozy-addons'); ?></span></a>
							<?php } else { ?>
								<a href="<?php get_admin_url(); ?>plugin-install.php?s=woocommerce&tab=search&type=term"><span class="plugin-status"><?php echo __('Install & Activate', 'cozy-addons'); ?></span></a>
							<?php  } ?>

						</li>

						<li class="<?php echo esc_attr($cfseven_status_class); ?>"><span class="dashicons dashicons-yes-alt"></span> <?php echo __('Contact Form 7', 'cozy-addons'); ?> <span class="info"><?php echo __('(Required only for form Widget)', 'cozy-addons'); ?></span>
							<?php
							if ($is_cfseven_active) { ?>
								<span class="plugin-status">
									<?php echo __('Activated', 'cozy-addons'); ?>
								</span>
							<?php } elseif ($is_cfseven_install && !$is_cfseven_active) { ?>
								<a href="<?php get_admin_url(); ?>plugins.php?action=active&plugin=contact%20form%207"><span class="plugin-status"><?php echo __('Activate Plugin', 'cozy-addons'); ?></span></a>
							<?php } else { ?>
								<a href="<?php get_admin_url(); ?>plugin-install.php?s=contact%20form%207&tab=search&type=term"><span class="plugin-status"><?php echo __('Install & Activate', 'cozy-addons'); ?></span></a>
							<?php  } ?>
						</li>
					</ul>
				</div><!--end of recommended-plugins -->
			</div>
			<div class="header-right">
				<img src="<?php echo esc_url(COZY_ADDONS_PLUGIN_URL . '/admin/images/cozy_addons_hero.png'); ?>" />
			</div>
		</div><!--end of dashboard header -->

		<div class="cozy-free-widgets grid-layout">
			<h3 class="widget-box-header"><?php echo __('Free Widgets for Elementor', 'cozy-addons'); ?><span><?php echo __('25 Widgets', 'cozy-addons'); ?></span></h3>
			<ul class="widgets-holder">
				<li><a href="https://cozythemes.com/pricing-table/" target="_blank"><?php echo __('Pricing Table', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/call-to-action/" target="_blank"><?php echo __('Call To Action', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/flip-box/" target="_blank"><?php echo __('Flip Box', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/working-hour/" target="_blank"><?php echo __('Working Hour', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/multi-buttons/" target="_blank"><?php echo __('Multi Buttons', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/brands-logo-showcase/" target="_blank"><?php echo __('Brands Logo Showcase', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/advance-header/" target="_blank"><?php echo __('Advanced Text', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/basic-post-demos/" target="_blank"><?php echo __('Basic Blog Posts', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/post-slider-demos/" target="_blank"><?php echo __('Post Slider', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/cozy-popular-posts/" target="_blank"><?php echo __('Popular Posts', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/focus-posts-demos/" target="_blank"><?php echo __('Focus Posts', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/author-box-demos/" target="_blank"><?php echo __('Author Box', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/search-form-demos/" target="_blank">S<?php echo __('earch Form', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/travel-list-demo/" target="_blank"><?php echo __('Travel List', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/properties-list-demo/" target="_blank"><?php echo __('Properties List', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/pages-list-demo/" target="_blank"><?php echo __('Pages List', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/site-logo-demo/" target="_blank"><?php echo __('Site Logo', 'cozy-addons') ?></a> </li>
				<li><a href="https://cozythemes.com/courses-list-demo/" target="_blank"><?php echo __('Course List', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/post-categories-demo/" target="_blank"><?php echo __('Post Categories', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/price-list-demos/" target="_blank"><?php echo __('Price List', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/cozy-teams/" target="_blank"><?php echo __('Teams', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/cozy-woo-products-demo/" target="_blank"><?php echo __('Products List', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/testimonials-demos/" target="_blank"><?php echo __('Testimonials', 'cozy-addons') ?> </a> </li>
				<li><a href="https://cozythemes.com/sliders/" target="_blank"><?php echo __('Slider', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/event-lists/" target="_blank"><?php echo __('Events List<', 'cozy-addons') ?>/a></li>
			</ul>
		</div><!--end of free-widgets -->
		<div class="cozy-pro-widgets grid-layout">
			<h3 class="widget-box-header"><?php echo __('Premium Widgets for Elementor', 'cozy-addons'); ?><span><?php echo __('20 Widgets', 'cozy-addons'); ?></span></h3>
			<ul class="widgets-holder">
				<li><a href="https://cozythemes.com/cozy-portfolios-demo/" target="_blank"><?php echo __('Portfolio', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/cozy-services-demos/" target="_blank"><?php echo __('Service', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/cozy-promotions-demo/" target="_blank"><?php echo __('Promotion ', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/cozy-blog-posts-demos/" target="_blank"><?php echo __('Blog Posts', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/cozy-faqs/" target="_blank"><?php echo __('FAQ', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/hover-box-demo/" target="_blank"><?php echo __('Hover Box', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/contact-form-7-styler/" target="_blank"><?php echo __('Contact Form 7 styler ', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/cozy-typeout-text/" target="_blank"><?php echo __('Typeout Text', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/cozy-woo-slider-demos/" target="_blank"><?php echo __('Product Sldier', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/advanced-magazine-block-demos/" target="_blank"><?php echo __('Magazine Block ', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/menu-search-demo/" target="_blank"><?php echo __('Menu Search<', 'cozy-addons') ?>/a></li>
				<li><a href="https://cozythemes.com/menu-cart-demo/" target="_blank"><?php echo __('Menu Cart', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/toggle-content-demo/" target="_blank"><?php echo __('Toggle Content', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/navigation-demo/" target="_blank"><?php echo __('Navigation Menu', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/sitemap-demo/" target="_blank"><?php echo __('Sitemap', 'cozy-addons') ?> </a></li>
				<li><a href="https://cozythemes.com/sidebar-panel-demo/" target="_blank"><?php echo __('Sidebar Panel', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/date-and-time-demo/" target="_blank"><?php echo __('Date & Time', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/footer-copyright-text/" target="_blank"><?php echo __('Footer Copyright Text', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/product-categories-demo/" target="_blank"><?php echo __('Product Categories', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/my-account-demo/" target="_blank"><?php echo __('My Account', 'cozy-addons') ?></a></li>
			</ul>

			<h3 class="widget-box-header"><?php echo __('Other Premium Features', 'cozy-addons'); ?></h3>
			<ul class="widgets-holder other-features">
				<li><a href="https://cozythemes.com/header-footer-builder/"><?php echo __('Header and Footer builder for Elementor', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/custom-scripts/"><?php echo __('Custom CSS, Custom Header and Footer Scripts', 'cozy-addons') ?></a></li>
				<li><a href="https://cozythemes.com/sticky-section-feature/"><?php echo __('Sticky Section', 'cozy-addons') ?></a></li>
			</ul>

			<?php if (!cozy_addons_premium_access()) { ?>
				<a href="https://cozythemes.com/cozy-addons/" class="unlock-pro" target="_blank"><span class="dashicons dashicons-lock"></span> <span class="dashicons dashicons-unlock"></span> <?php echo __('Unlock Pro Features', 'cozy-addons'); ?></a>
			<?php } ?>
		</div><!--end of pro-widgets -->
		<div class="cozy-faq-section">
			<h3><?php echo __('F . A . Q', 'cozy-addons'); ?></h3>
			<div class="faq-box">
				<h4><?php echo __('Is Cozy Addons for Free?', 'cozy-addons'); ?></h4>
				<p><?php echo __('- Yes, it is free!', 'cozy-addons'); ?></p>
			</div>
			<div class="faq-box">
				<h4><?php echo __('Can I use this plugin with any theme?', 'cozy-addons'); ?></h4>
				<p><?php echo __('- Yes, you can use this plugin for any theme that support Elementor page builder.', 'cozy-addons'); ?></p>
			</div>
		</div><!--end of faq section -->
		<div class="footer-buttons">
			<h3><?php echo __('Need Help?', 'cozy-addons'); ?></h3>
			<p><?php echo __('If you are stuck anywhere and need any support, please go through the plugin documentation or contact our support team.', 'cozy-addons'); ?></p>
			<div class="buttons-group">
				<a href="https://cozythemes.com/cozy-addons/" class="doc-btn" target="_blank"><span class="dashicons dashicons-arrow-right-alt"></span> <?php echo __('More Information', 'cozy-addons'); ?></a><a href="https://cozythemes.com/support/" class="support-btn" target="_blank"><span class="dashicons dashicons-admin-tools"></span> <?php echo __('Support Ticket', 'cozy-addons'); ?></a>
			</div>
		</div>
	</div>
</div><!--end of cozy-addons dashboard -->