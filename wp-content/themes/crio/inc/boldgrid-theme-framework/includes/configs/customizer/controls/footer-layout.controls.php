<?php
/**
 * Customizer Controls Configs.
 *
 * @package Boldgrid_Theme_Framework
 * @subpackage Boldgrid_Theme_Framework\Configs\Customizer\Controls
 *
 * @since 2.0.0
 *
 * @return array Controls to create in the WordPress Customizer.
 */

return array(
	'bgtfw_footer_layout' => array(
		'settings'        => 'bgtfw_footer_layout',
		'transport'       => 'auto',
		'label'           => __( 'Footer Layout', 'crio' ),
		'type'            => 'bgtfw-sortable-accordion',
		'default'         => array(
			array(
				'container' => 'container',
				'items'     => array(
					array(
						'type'  => 'boldgrid_display_attribution_links',
						'key'   => 'attribution',
						'align' => 'w',
					),
					array(
						'type'  => 'boldgrid_menu_social',
						'key'   => 'menu',
						'align' => 'e',
					),
				),
			),
		),
		'items'           => array(
			'menu'        => array(
				'icon'     => 'dashicons dashicons-menu',
				'title'    => __( 'Menu', 'crio' ),
				'controls' => array(
					'menu-select' => array(),
					'align'       => array(
						'default' => 'nw',
					),
				),
			),
			'branding'    => array(
				'icon'     => 'dashicons dashicons-store',
				'title'    => __( 'Branding', 'crio' ),
				'controls' => array(
					'align'   => array(
						'default' => 'nw',
					),
					'display' => array(
						'default' => array(
							array(
								'selector' => '.custom-logo-link',
								'display'  => 'show',
								'title'    => __( 'Logo', 'crio' ),
							),
							array(
								'selector' => '.site-title',
								'display'  => 'show',
								'title'    => __( 'Title', 'crio' ),
							),
							array(
								'selector' => '.site-description',
								'display'  => 'show',
								'title'    => __( 'Tagline', 'crio' ),
							),
						),
					),
				),
			),
			'sidebar'     => array(
				'icon'     => 'dashicons dashicons-layout',
				'title'    => __( 'Widget Area', 'crio' ),
				'controls' => array(
					'sidebar-edit' => array(),
				),
			),
			'attribution' => array(
				'icon'     => 'dashicons dashicons-admin-links',
				'title'    => __( 'Attribution Links', 'crio' ),
				'controls' => array(
					'attribution' => array(),
					'align'       => array(
						'default' => 'w',
					),
				),
			),
		),
		'location'        => 'footer',
		'section'         => 'boldgrid_footer_panel',
		'partial_refresh' => array(
			'bgtfw_footer_layout' => array(
				'selector'        => '.bgtfw-footer',
				'render_callback' => array( 'BoldGrid', 'dynamic_footer' ),
			),
		),
		'edit_vars'   => array(
			array(
				'selector'    => 'footer.site-footer',
				'label'       => __( 'Footer Layout', 'crio' ),
				'description' => __( 'Customize the layout of your site\'s footer', 'crio' ),
			),
		),
	),
	'bgtfw_footer_color'  => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_footer_color',
		'label'             => esc_attr__( 'Background Color', 'crio' ),
		'description'       => esc_attr__( 'Choose a color from your palette to use.', 'crio' ),
		'section'           => 'bgtfw_footer_colors',
		'priority'          => 10,
		'default'           => '',
		'choices'           => array(
			'colors' => $bgtfw_formatted_palette,
			'size'   => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'edit_vars'         => array(
			array(
				'selector'    => 'footer.site-footer',
				'label'       => esc_attr__( 'Footer Colors', 'crio' ),
				'description' => esc_attr__( 'Change the color of the footer background and footer links', 'crio' ),
			),
		),
	),
	'bgtfw_footer_link_color'  => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_footer_link_color',
		'label'             => esc_attr__( 'Attribution Link Colors', 'crio' ),
		'description'       => esc_attr__( 'Change the color of your attribution links if shown.', 'crio' ),
		'section'           => 'bgtfw_footer_colors',
		'priority'          => 30,
		'default'           => get_theme_mod( 'bgtfw_footer_links', '' ),
		'choices'           => array(
			'selectors' => Boldgrid_Framework_Links::$footer_link_selectors,
			'colors'    => $bgtfw_formatted_palette,
			'size'      => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
	),
);
