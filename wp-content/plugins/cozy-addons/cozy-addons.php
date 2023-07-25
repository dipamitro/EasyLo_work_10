<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://cozythemes.com/
 * @since             1.0.0
 * @package           Cozy_Addons
 *
 * @wordpress-plugin
 * Plugin Name:       Cozy Addons
 * Plugin URI:        https://cozythemes.com/cozy-addons
 * Description:       Cozy Addons is the powerful elementor widgets plugin, which comes with advanced powerful widget with multiple layout that powerup your website. 
 * Version:           1.2.5
 * Author:            CozyThemes
 * Author URI:        https://cozythemes.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       cozy-addons
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}
if (!function_exists('cc_fs')) {
	// Create a helper function for easy SDK access.
	function cc_fs()
	{
		global $cc_fs;

		if (!isset($cc_fs)) {
			// Include Freemius SDK.
			require_once dirname(__FILE__) . '/freemius/start.php';

			$cc_fs = fs_dynamic_init(array(
				'id'                  => '12692',
				'slug'                => 'cozy-addons',
				'premium_slug'        => 'cozy-companions-premium',
				'type'                => 'plugin',
				'public_key'          => 'pk_fbca81b65cb25c89dcf0662ce4cc6',
				'is_premium'          => true,
				'premium_suffix'      => 'Pro',
				// If your plugin is a serviceware, set this option to false.
				'has_premium_version' => true,
				'has_addons'          => false,
				'has_paid_plans'      => true,
				'menu'                => array(
					'slug'           => '_cozy_companions',
					'support'        => false,
				),
				'is_live'        => true,
			));
		}

		return $cc_fs;
	}

	// Init Freemius.
	cc_fs();
	// Signal that SDK was initiated.
	do_action('cc_fs_loaded');
}
define('COZY_ADDONS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('COZY_ADDONS_PLUGIN_URL', plugins_url('', __FILE__));
if (!defined('CT_COMPANION_SDK_URL')) {
	define('CT_COMPANION_SDK_URL', COZY_ADDONS_PLUGIN_URL . '/admin/ct-companions/');
}


/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-cozy-addons-activator.php
 */
function activate_cozy_addons()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-cozy-addons-activator.php';
	Cozy_Addons_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-cozy-addons-deactivator.php
 */
function deactivate_cozy_addons()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-cozy-addons-deactivator.php';
	Cozy_Addons_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_cozy_addons');
register_deactivation_hook(__FILE__, 'deactivate_cozy_addons');
cc_fs()->add_action('after_uninstall', 'cc_fs_uninstall_cleanup');
/**
 * Main Elementor Layout Class
 *
 * The main class that initiates and runs the plugin.
 *
 * @since 1.0.0
 */
if (!class_exists('Cozy_Addons')) :
	final class Cozy_Addons
	{
		/**
		 * Plugin Version
		 *
		 * @since 1.0.0
		 *
		 * @var string The plugin version.
		 */
		const VERSION = '1.2.5';

		/**
		 * Minimum Elementor Version
		 *
		 * @since 1.0.0
		 *
		 * @var string Minimum Elementor version required to run the plugin.
		 */
		const MINIMUM_ELEMENTOR_VERSION = '2.0.0';

		/**
		 * Minimum PHP Version
		 *
		 * @since 1.0.0
		 *
		 * @var string Minimum PHP version required to run the plugin.
		 */
		const MINIMUM_PHP_VERSION = '7.0';

		/**
		 * Instance
		 *
		 * @since 1.0.0
		 *
		 * @access private
		 * @static
		 *
		 * @var Cozy_Addons The single instance of the class.
		 */
		private static $_instance = null;

		/**
		 * Instance
		 *
		 * Ensures only one instance of the class is loaded or can be loaded.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 * @static
		 *
		 * @return Cozy_Addons An instance of the class.
		 */
		public static function instance()
		{

			if (is_null(self::$_instance)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 * @access public
		 */
		public function __construct()
		{

			// Load translation
			add_action('init', array($this, 'i18n'));

			// Init Plugin
			add_action('plugins_loaded', array($this, 'init'));
			$this->cozy_addons_load_files();
			add_action('admin_enqueue_scripts', array($this, 'cozy_addons_dashboard_style'));
		}

		private function cozy_addons_load_files()
		{
			/**
			 * Register menu for cozy addons
			 */
			require_once COZY_ADDONS_PLUGIN_DIR . 'admin/register-menu.php';
			require_once COZY_ADDONS_PLUGIN_DIR . 'admin/admin-notice.php';
			require_once COZY_ADDONS_PLUGIN_DIR . 'admin/functions.php';
			require_once COZY_ADDONS_PLUGIN_DIR . 'admin/inc/ct-header-footer.php';
			require(COZY_ADDONS_PLUGIN_DIR . 'admin/ct-companions/ct-companions.php');
			require(COZY_ADDONS_PLUGIN_DIR . 'admin/ct-companions/ct-custom-scripts.php');
			require_once COZY_ADDONS_PLUGIN_DIR . 'admin/inc/ct-extensions.php';
			require_once COZY_ADDONS_PLUGIN_DIR . 'admin/ct-companions/ct-custom-fonts.php';
		}

		/**
		 * Load Textdomain
		 *
		 * Load plugin localization files.
		 *
		 * Fired by `init` action hook.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function i18n()
		{

			load_plugin_textdomain('cozy-addons');
		}

		/**
		 * Initialize the plugin
		 *
		 * Load the plugin only after Elementor (and other plugins) are loaded.
		 * Checks for basic plugin requirements, if one check fail don't continue,
		 * if all check have passed load the files required to run the plugin.
		 *
		 * Fired by `plugins_loaded` action hook.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function init()
		{

			// Check if Elementor installed and activated
			if (!did_action('elementor/loaded')) {
				add_action('admin_notices', [$this, 'admin_notice_missing_main_plugin']);
				return;
			}

			// Check for required Elementor version
			if (!version_compare(ELEMENTOR_VERSION, self::MINIMUM_ELEMENTOR_VERSION, '>=')) {
				add_action('admin_notices', [$this, 'admin_notice_minimum_elementor_version']);
				return;
			}

			// Check for required PHP version
			if (version_compare(PHP_VERSION, self::MINIMUM_PHP_VERSION, '<')) {
				add_action('admin_notices', [$this, 'admin_notice_minimum_php_version']);
				return;
			}

			// Add Plugin actions
			require_once('init.php');
		}

		/**
		 * Admin notice
		 *
		 * Warning when the site doesn't have Elementor installed or activated.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function admin_notice_missing_main_plugin()
		{

			if (isset($_GET['activate'])) unset($_GET['activate']);

			$message = sprintf(
				/* translators: 1: Plugin name 2: Elementor */
				esc_html__('"%1$s" requires "%2$s" must to be installed and activated for work elementor layout.', 'cozy-addons'),
				'<strong>' . esc_html__('Cozy Addons', 'cozy-addons') . '</strong>',
				'<strong><a href="' . get_admin_url() . 'plugin-install.php?tab=plugin-information&plugin=elementor&TB_iframe=true&width=600&height=550">' . esc_html__('Elementor', 'cozy-addons') . '</a></strong>'
			);

			printf('<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message);
		}

		/**
		 * Admin notice
		 *
		 * Warning when the site doesn't have a minimum required Elementor version.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function admin_notice_minimum_elementor_version()
		{

			if (isset($_GET['activate'])) unset($_GET['activate']);

			$message = sprintf(
				/* translators: 1: Plugin name 2: Elementor 3: Required Elementor version */
				esc_html__('"%1$s" requires "%2$s" version %3$s or greater.', 'cozy-addons'),
				'<strong>' . esc_html__('Elementor Layout', 'cozy-addons') . '</strong>',
				'<strong>' . esc_html__('Elementor', 'cozy-addons') . '</strong>',
				self::MINIMUM_ELEMENTOR_VERSION
			);

			printf('<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message);
		}

		/**
		 * Admin notice
		 *
		 * Warning when the site doesn't have a minimum required PHP version.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function admin_notice_minimum_php_version()
		{

			if (isset($_GET['activate'])) unset($_GET['activate']);

			$message = sprintf(
				/* translators: 1: Plugin name 2: PHP 3: Required PHP version */
				esc_html__('"%1$s" requires "%2$s" version %3$s or greater.', 'cozy-addons'),
				'<strong>' . esc_html__('Cozy Addons', 'cozy-addons') . '</strong>',
				'<strong>' . esc_html__('PHP', 'cozy-addons') . '</strong>',
				self::MINIMUM_PHP_VERSION
			);

			printf('<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message);
		}
		public function cozy_addons_dashboard_style()
		{
			wp_enqueue_style('cozy-addons-admin-style', plugin_dir_url(__FILE__) . '/admin/css/cozy-addons-admin.css', array(), '', 'all');
		}
	}

	// Instantiate Cozy Addons.
	Cozy_Addons::instance();

endif;
