<?php

/**
 * Adding Admin Notice for recommended plugins
 */
if (!function_exists('cozy_addons_activation_admin_notice')) :
	function cozy_addons_activation_admin_notice()
	{
		global $submenu;

		$main_menu = 'cozy-addons';

		// if (
		//    isset( $submenu[ $main_menu ] )
		//    && in_array( 'cozy-addons-contact' || 'cozy-addons-account', wp_list_pluck( $submenu[ $main_menu ], 2 ) )
		// ) {
		//     return;
		// } else {
		global $pagenow;
		// $theme_args      = wp_get_theme();
		// $name            = $theme_args->__get( 'Name' );
		$meta            = get_option('cozy-addons-admin-update-notice');
		$current_screen  = get_current_screen();

		if (is_admin() && !$meta) {

			// if( $current_screen->id !== 'dashboard' && $current_screen->id !== 'themes' ) {
			//     return;
			// }

			if (is_network_admin()) {
				return;
			}

			if (!current_user_can('manage_options')) {
				return;
			} ?>
			<div class="notice notice-info is-dismissible cozy-addons-admin-notice">
				<div class="cozy-addons-icons">
					<img src="<?php echo COZY_ADDONS_PLUGIN_URL . '/admin/images/cozy_addons_logo.png'; ?>" />
				</div>
				<div class="notice-content">

					<h2><?php echo __('Welcome to the Cozy Addons!', 'cozy-addons'); ?></h2>
					<!-- plugins list need to be install -->
					<h5><?php echo __('Please Install and Activate the Required and recommended Plugins to Make Plugins works Properly!', 'cozy-addons'); ?></h5>
					<?php

					$check_menu_slug = '_cozy_companions-contact';
					$status_menu_page_url = menu_page_url($check_menu_slug, false);

					if (!empty($status_menu_page_url)) { ?>
						<a href="<?php echo admin_url(); ?>/admin.php?page=_ct_cozy_addons" class="cozy-btns btns-more"><?php echo __('Explore Cozy Addons', 'cozy-addons'); ?></a>
					<?php } else { ?>
						<a href="<?php echo admin_url(); ?>/admin.php?page=_cozy_companions" class="cozy-btns btns-more"><?php echo __('Activate Cozy Addons', 'cozy-addons'); ?></a>
					<?php }

					?>
					<a href="<?php echo admin_url(); ?>/themes.php?cozy-addons-admin-update-notice=true" class="cozy-btns dismiss-notice btn-notice-dismiss"><?php echo __('Dismiss Notice', 'cozy-addons'); ?></a>
				</div>
			</div>
<?php }
	}

endif;
add_action('admin_notices', 'cozy_addons_activation_admin_notice');


if (!function_exists('cozy_addons_ignore_admin_notice')) :
	/**
	 * ignore notice if dismissed!
	 */
	function cozy_addons_ignore_admin_notice()
	{

		if (isset($_GET['cozy-addons-admin-update-notice']) && $_GET['cozy-addons-admin-update-notice'] = 'true') {

			update_option('cozy-addons-admin-update-notice', true);
		}
	}
endif;
add_action('admin_init', 'cozy_addons_ignore_admin_notice');
