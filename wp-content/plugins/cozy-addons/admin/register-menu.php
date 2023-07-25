<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://cozythemes.com/
 * @since      1.0.0
 *
 * @package    Cozy_Addons
 * @subpackage Cozy_Addons/admin
 */

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

if (!class_exists('Cozy_Addons_Menu')) :
    class Cozy_Addons_Menu
    {
        public function __construct()
        {
            add_action('admin_menu', array($this, 'register_cozy_addons_menus'),    11);
        }

        public function register_cozy_addons_menus()
        {
            add_submenu_page(
                '_cozy_companions',
                'Cozy Addons',
                'Cozy Addons',
                'manage_options',
                '_ct_cozy_addons',
                'cozy_addons_info'
            );
            function cozy_addons_info()
            {
                include_once('partials/cozy-dashboard.php');
            }
        }
    }
    $Cozy_Addons_Custom_Menu = new Cozy_Addons_Menu;
endif;
