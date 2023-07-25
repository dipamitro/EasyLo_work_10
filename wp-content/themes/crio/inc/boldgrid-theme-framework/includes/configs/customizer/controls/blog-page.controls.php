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
	'bgtfw_pages_blog_blog_page_layout_columns'        => array(
		'label'             => __( 'Columns', 'crio' ),
		'tooltip'           => __( 'Select the number of columns you wish to display on your blog page.', 'crio' ),
		'type'              => 'number',
		'settings'          => 'bgtfw_pages_blog_blog_page_layout_columns',
		'priority'          => 1,
		'default'           => 1,
		'transport'         => 'postMessage',
		'choices'           => array(
			'min'  => 1,
			'max'  => 6,
			'step' => 1,
		),
		'section'           => 'bgtfw_pages_blog_blog_page_post_content',
		'sanitize_callback' => function( $value, $setting ) {
			return is_int( $value ) && 6 <= absint( $value ) ? absint( $value ) : $setting->default;
		},
	),
	'bgtfw_pages_blog_blog_page_layout_posts_per_page' => array(
		'label'       => __( 'Blog Posts Per Page', 'crio' ),
		'tooltip'     => __( 'Set how many posts display per page for your blog, categories, archives, and search pages.', 'crio' ),
		'type'        => 'number',
		'settings'    => 'posts_per_page',
		'option_type' => 'option',
		'default'     => 10,
		'transport'   => 'refresh',
		'choices'     => array(
			'min'  => 1,
			'max'  => 300,
			'step' => 1,
		),
		'section'     => 'bgtfw_pages_blog_blog_page_post_content',
	),
	'bgtfw_pages_blog_blog_page_layout_content'        => array(
		'type'              => 'radio-buttonset',
		'settings'          => 'bgtfw_pages_blog_blog_page_layout_content',
		'transport'         => 'refresh',
		'label'             => esc_html__( 'Post Content Display', 'crio' ),
		'tooltip'           => __( 'Choose between automatically generated post excerpts or displaying your posts\' full content.', 'crio' ),
		'default'           => 'excerpt',
		'choices'           => array(
			'excerpt' => esc_attr__( 'Post Excerpt', 'crio' ),
			'content' => esc_attr__( 'Full Content', 'crio' ),
		),
		'section'           => 'bgtfw_pages_blog_blog_page_post_content',
		'sanitize_callback' => function( $value, $settings ) {
			return 'excerpt' === $value || 'content' === $value ? $value : $settings->default;
		},
	),
	'bgtfw_pages_blog_blog_page_layout_excerpt_length' => array(
		'label'           => __( 'Excerpt Length', 'crio' ),
		'tooltip'         => __( 'Set the length of excerpts used for your blog, categories, archives, and search pages.', 'crio' ),
		'type'            => 'number',
		'settings'        => 'bgtfw_pages_blog_blog_page_layout_excerpt_length',
		'default'         => 55,
		'transport'       => 'refresh',
		'choices'         => array(
			'min'  => 0,
			'max'  => 300,
			'step' => 1,
		),
		'section'         => 'bgtfw_pages_blog_blog_page_post_content',
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_pages_blog_blog_page_layout_content',
				'operator' => '===',
				'value'    => 'excerpt',
			),
		),
	),
	'bgtfw_blog_blog_page_settings'                    => array(
		'settings'          => 'bgtfw_blog_blog_page_settings',
		'label'             => esc_html__( 'Homepage Sidebar Display', 'crio' ),
		'type'              => 'radio',
		'priority'          => 10,
		'default'           => 'no-sidebar',
		'choices'           => array(),
		'section'           => 'bgtfw_blog_blog_page_settings',
		'sanitize_callback' => 'sanitize_html_class',
	),
	'bgtfw_blog_blog_page_sidebar'                     => array(
		'settings'          => 'bgtfw_blog_blog_page_sidebar',
		'label'             => esc_html__( 'Homepage Sidebar Display', 'crio' ),
		'type'              => 'radio',
		'priority'          => 30,
		'default'           => '',
		'choices'           => array(),
		'section'           => 'static_front_page',
		'active_callback'   => function() {
			return get_option( 'show_on_front', 'posts' ) === 'posts' ? true : false;
		},
		'sanitize_callback' => 'sanitize_html_class',
	),
	'bgtfw_blog_blog_page_sidebar2'                    => array(
		'setting'           => 'bgtfw_blog_blog_page_sidebar2',
		'settings'          => 'bgtfw_blog_blog_page_sidebar',
		'label'             => esc_html__( 'Sidebar Options', 'crio' ),
		'type'              => 'radio',
		'priority'          => 10,
		'default'           => '',
		'choices'           => array(),
		'section'           => 'bgtfw_blog_blog_page_panel_sidebar',
		'sanitize_callback' => 'sanitize_html_class',
	),
	'bgtfw_blog_header_background_color'               => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_header_background_color',
		'label'             => esc_attr__( 'Post Header', 'crio' ),
		'description'       => esc_attr__( 'Choose a color from your palette to use.', 'crio' ),
		'section'           => 'bgtfw_blog_blog_page_colors',
		'priority'          => 1,
		'default'           => 'color-neutral',
		'choices'           => array(
			'colors' => $bgtfw_formatted_palette,
			'size'   => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'edit_vars'         => array(
			array(
				'selector'    => '.blog .entry-header',
				'label'       => __( 'Post Header Background', 'crio' ),
				'description' => __( 'Change the color of the Post Header Background', 'crio' ),
			),
		),
	),
	'bgtfw_blog_post_background_color'                 => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_background_color',
		'label'             => esc_attr__( 'Post Content', 'crio' ),
		'description'       => esc_attr__( 'Choose a color from your palette to use.', 'crio' ),
		'section'           => 'bgtfw_blog_blog_page_colors',
		'priority'          => 1,
		'default'           => 'color-neutral',
		'choices'           => array(
			'colors' => $bgtfw_formatted_palette,
			'size'   => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'edit_vars'         => array(
			array(
				'selector'    => '.blog .entry-content',
				'label'       => 'Post Content Background',
				'description' => 'Change the color of the Post Content Background',
			),
		),
	),
	'bgtfw_blog_post_header_title_display'             => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_title_display',
		'label'             => esc_attr__( 'Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_titles',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'    => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inherit', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-header .entry-title, .archive .post .entry-header .entry-title',
				'property' => 'display',
			),
		),
	),
	'bgtfw_blog_post_header_title_color'               => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_header_title_color',
		'label'             => esc_attr__( 'Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_titles',
		'default'           => 'color-1',
		'choices'           => array(
			'colors' => $bgtfw_formatted_palette,
			'size'   => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_title_display',
				'operator' => '===',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_title_size'                => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_header_title_size',
		'label'             => esc_attr__( 'Font Size', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_titles',
		'default'           => 'h2',
		'choices'           => array(
			'h1' => esc_attr__( 'H1', 'crio' ),
			'h2' => esc_attr__( 'H2', 'crio' ),
			'h3' => esc_attr__( 'H3', 'crio' ),
			'h4' => esc_attr__( 'H4', 'crio' ),
			'h5' => esc_attr__( 'H5', 'crio' ),
			'h6' => esc_attr__( 'H6', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ), true ) ? $value : $settings->default;
		},
		'js_vars'           => array(
			array(
				'element'       => '.blog .post .entry-header .entry-title, .archive .post .entry-header .entry-title',
				'function'      => 'html',
				'attr'          => 'class',
				'value_pattern' => 'entry-title $',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_title_display',
				'operator' => '===',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_title_position'            => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_title_position',
		'label'             => esc_attr__( 'Position', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_titles',
		'default'           => 'left',
		'choices'           => array(
			'left'   => '<span class="dashicons dashicons-editor-alignleft"></span>' . esc_attr__( 'Left', 'crio' ),
			'center' => '<span class="dashicons dashicons-editor-aligncenter"></span>' . esc_attr__( 'Center', 'crio' ),
			'right'  => '<span class="dashicons dashicons-editor-alignright"></span>' . esc_attr__( 'Right', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'left', 'center', 'right' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-header .entry-title, .archive .post .entry-header .entry-title',
				'property' => 'text-align',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_title_display',
				'operator' => '===',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_meta_display'              => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_meta_display',
		'label'             => esc_attr__( 'Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'inline-block',
		'choices'           => array(
			'inline-block' => '<span class="dashicons dashicons-minus"></span>' . __( 'Inline', 'crio' ),
			'block'        => '<span class="dashicons dashicons-menu"></span>' . __( 'New Lines', 'crio' ),
			'none'         => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inline-block', 'block', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-header .entry-meta, .archive .post .entry-header .entry-meta',
				'property' => 'display',
			),
		),
	),
	'bgtfw_blog_post_header_meta_position'             => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_meta_position',
		'label'             => esc_attr__( 'Position', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'left',
		'choices'           => array(
			'left'   => '<span class="dashicons dashicons-editor-alignleft"></span>' . esc_attr__( 'Left', 'crio' ),
			'center' => '<span class="dashicons dashicons-editor-aligncenter"></span>' . esc_attr__( 'Center', 'crio' ),
			'right'  => '<span class="dashicons dashicons-editor-alignright"></span>' . esc_attr__( 'Right', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'left', 'center', 'right' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-header .entry-meta, .archive .post .entry-header .entry-meta',
				'property' => 'text-align',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_header_date_display'              => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_date_display',
		'label'             => esc_attr__( 'Post Date Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'    => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inherit', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-header .entry-meta .posted-on, .archive .post .entry-header .entry-meta .posted-on',
				'property' => 'display',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_header_meta_format'               => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_meta_format',
		'label'             => esc_attr__( 'Date Format', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'date',
		'choices'           => array(
			'timeago' => '<i class="fa fa-cc" aria-hidden="true"></i>' . esc_attr__( 'Human Readable', 'crio' ),
			'date'    => '<i class="fa fa-calendar" aria-hidden="true"></i>' . esc_attr__( 'Date', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'timeago', 'date' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_header_updated_or_published'      => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_updated_or_published',
		'label'             => esc_attr__( 'Use Published or Modified Date', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'published',
		'choices'           => array(
			'published' => '<i class="fa fa-calendar" aria-hidden="true"></i>' . esc_attr__( 'Published', 'crio' ),
			'updated'   => '<i class="fa fa-calendar-plus-o" aria-hidden="true"></i>' . esc_attr__( 'Modified', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'published', 'updated' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_header_date_link_color_display'   => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_header_date_link_color_display',
		'label'             => esc_attr__( 'Date Link Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-admin-site"></span>' . __( 'Global Color', 'crio' ),
			'custom'  => '<span class="dashicons dashicons-admin-customizer"></span>' . __( 'Custom', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inherit', 'custom' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_header_date_link_color'           => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_header_date_link_color',
		'label'             => esc_attr__( 'Link Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'color-1',
		'choices'           => array(
			'selectors' => array( '.blog .post .entry-header .entry-meta .posted-on a', '.archive .post .entry-header .entry-meta .posted-on a' ),
			'colors'    => $bgtfw_formatted_palette,
			'size'      => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_date_link_decoration'      => array(
		'settings'          => 'bgtfw_blog_post_header_date_link_decoration',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'Normal', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_date_link_color_hover'     => array(
		'type'            => 'slider',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_header_date_link_color_hover',
		'label'           => esc_attr__( 'Hover Color Brightness', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'         => -25,
		'choices'         => array(
			'min'  => '-25',
			'max'  => '25',
			'step' => '1',
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_date_decoration_hover'     => array(
		'settings'          => 'bgtfw_blog_post_header_date_link_decoration_hover',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Hover Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'None', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_date_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),

	'bgtfw_blog_post_header_byline_display'            => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_byline_display',
		'label'             => esc_attr__( 'Author Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'    => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inherit', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-header .entry-meta .byline, .archive .post .entry-header .entry-meta .byline',
				'property' => 'display',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),

	// Start: Blog Page Author Link Color Controls.
	'bgtfw_blog_post_header_byline_link_color_display' => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_header_byline_link_color_display',
		'label'             => esc_attr__( 'Author Link Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-admin-site"></span>' . __( 'Global Color', 'crio' ),
			'custom'  => '<span class="dashicons dashicons-admin-customizer"></span>' . __( 'Custom', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inherit', 'custom' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_header_byline_link_color'         => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_header_byline_link_color',
		'label'             => esc_attr__( 'Link Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'color-1',
		'choices'           => array(
			'selectors' => array( '.blog .post .entry-header .entry-meta .byline a', '.archive .post .entry-header .entry-meta .byline a' ),
			'colors'    => $bgtfw_formatted_palette,
			'size'      => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_byline_link_decoration'    => array(
		'settings'          => 'bgtfw_blog_post_header_byline_link_decoration',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'Normal', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_byline_link_color_hover'   => array(
		'type'            => 'slider',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_header_byline_link_color_hover',
		'label'           => esc_attr__( 'Hover Color Brightness', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'         => -25,
		'choices'         => array(
			'min'  => '-25',
			'max'  => '25',
			'step' => '1',
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_header_byline_decoration_hover'   => array(
		'settings'          => 'bgtfw_blog_post_header_byline_link_decoration_hover',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Hover Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_post_meta',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'None', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_meta_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_byline_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),

	// Start: Blog Page Featured Image Controls.
	'bgtfw_blog_post_header_feat_image_display'        => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_feat_image_display',
		'label'             => esc_attr__( 'Display', 'crio' ),
		'tooltip'           => __( 'Hide or show your featured image on your blog roll and archive pages.', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_featured_images',
		'default'           => 'show',
		'choices'           => array(
			'show' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'hide' => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'show', 'hide' ), true ) ? $value : $settings->default;
		},
	),
	'bgtfw_blog_post_header_feat_image_position'       => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_header_feat_image_position',
		'label'             => esc_attr__( 'Position', 'crio' ),
		'tooltip'           => __( 'Change where your featured image appears on your blog roll or archive pages.', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_featured_images',
		'default'           => 'background',
		'choices'           => array(
			'background' => '<span class="dashicons dashicons-format-image"></span>' . __( 'Header Background', 'crio' ),
			'above'      => '<span class="dashicons dashicons-arrow-up-alt"></span>' . __( 'Above Header', 'crio' ),
			'below'      => '<span class="dashicons dashicons-arrow-down-alt"></span>' . __( 'Below Header', 'crio' ),
			'content'    => '<span class="dashicons dashicons-format-aside"></span>' . __( 'In Post Content', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'background', 'above', 'below', 'content' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_feat_image_display',
				'operator' => '!==',
				'value'    => 'hide',
			),
		),
	),
	'bgtfw_blog_post_header_feat_image_height'         => array(
		'type'            => 'slider',
		'transport'       => 'auto',
		'settings'        => 'bgtfw_blog_post_header_feat_image_height',
		'label'           => esc_attr__( 'Height', 'crio' ),
		'tooltip'         => __( 'Change the height of the featured image container on your blog page and archive pages.', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_featured_images',
		'type'            => 'slider',
		'default'         => 9,
		'choices'         => array(
			'min'  => '0',
			'max'  => '30',
			'step' => '.1',
		),
		'output'          => array(
			array(
				'units'    => 'em',
				'element'  => '.blog .post.has-post-thumbnail .entry-header.above .featured-imgage-header, .archive .post.has-post-thumbnail .entry-header.above .featured-imgage-header, .blog .post.has-post-thumbnail .entry-header.below .featured-imgage-header, .archive .post.has-post-thumbnail .entry-header.below .featured-imgage-header',
				'property' => 'height',
			),
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_feat_image_display',
				'operator' => '!==',
				'value'    => 'hide',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_feat_image_position',
				'operator' => '!==',
				'value'    => 'background',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_feat_image_position',
				'operator' => '!==',
				'value'    => 'content',
			),
		),
	),
	'bgtfw_blog_post_header_feat_image_width'          => array(
		'type'            => 'slider',
		'transport'       => 'auto',
		'settings'        => 'bgtfw_blog_post_header_feat_image_width',
		'label'           => esc_attr__( 'Width', 'crio' ),
		'tooltip'         => __( 'Change the width of the featured image container on your blog page and archive pages.', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_featured_images',
		'type'            => 'slider',
		'default'         => 100,
		'choices'         => array(
			'min'  => '0',
			'max'  => '100',
			'step' => '1',
		),
		'output'          => array(
			array(
				'units'    => '%',
				'element'  => '.blog .post.has-post-thumbnail .entry-header.above .featured-imgage-header, .archive .post.has-post-thumbnail .entry-header.above .featured-imgage-header, .blog .post.has-post-thumbnail .entry-header.below .featured-imgage-header, .archive .post.has-post-thumbnail .entry-header.below .featured-imgage-header',
				'property' => 'width',
			),
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_header_feat_image_display',
				'operator' => '!==',
				'value'    => 'hide',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_feat_image_position',
				'operator' => '!==',
				'value'    => 'background',
			),
			array(
				'setting'  => 'bgtfw_blog_post_header_feat_image_position',
				'operator' => '!==',
				'value'    => 'content',
			),
		),
	),
	'bgtfw_blog_post_tags_display'                     => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_tags_display',
		'label'             => esc_attr__( 'Display', 'crio' ),
		'tooltip'           => __( 'Toggle the display of your tags on the blog roll and archive pages.', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'           => 'block',
		'choices'           => array(
			'block' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'  => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'block', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .tags-links, .archive .post .entry-footer .tags-links',
				'property' => 'display',
			),
		),
	),
	'bgtfw_blog_post_tags_alignment'                   => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_tags_alignment',
		'label'             => esc_attr__( 'Alignment', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'           => 'left',
		'choices'           => array(
			'left'   => '<span class="dashicons dashicons-editor-alignleft"></span>' . esc_attr__( 'Left', 'crio' ),
			'center' => '<span class="dashicons dashicons-editor-aligncenter"></span>' . esc_attr__( 'Center', 'crio' ),
			'right'  => '<span class="dashicons dashicons-editor-alignright"></span>' . esc_attr__( 'Right', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'left', 'center', 'right' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .tags-links, .archive .post .entry-footer .tags-links',
				'property' => 'text-align',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_readmore_text'                    => array(
		'type'      => 'text',
		'transport' => 'postMessage',
		'settings'  => 'bgtfw_blog_post_readmore_text',
		'section'   => 'bgtfw_pages_blog_blog_page_read_more',
		'label'     => esc_attr__( 'Text', 'crio' ),
		'default'   => 'Continue Reading &raquo;',
		'js_vars'   => array(
			array(
				'element'  => '.read-more a',
				'function' => 'html',
			),
		),
	),
	'bgtfw_blog_post_readmore_type'                    => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'refresh',
		'settings'          => 'bgtfw_blog_post_readmore_type',
		'label'             => esc_attr__( 'Type', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_read_more',
		'default'           => 'btn button-secondary',
		'choices'           => array(
			'btn button-primary'   => '<i class="fa fa-square" aria-hidden="true"></i>' . esc_attr__( 'Primary Button', 'crio' ),
			'btn button-secondary' => '<i class="fa fa-square-o" aria-hidden="true"></i>' . esc_attr__( 'Secondary Button', 'crio' ),
			'link'                 => '<span class="dashicons dashicons-admin-links"></span>' . esc_attr__( 'Link', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, [ 'btn button-primary', 'btn button-secondary', 'link' ], true ) ? $value : $settings->default;
		},
		'js_vars'           => array(
			array(
				'element'       => '.read-more a',
				'function'      => 'html',
				'attr'          => 'class',
				'value_pattern' => '$',
			),
		),
	),
	'bgtfw_blog_post_readmore_link_color_display'      => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_readmore_link_color_display',
		'label'             => esc_attr__( 'Colors', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_read_more',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-admin-site"></span>' . __( 'Global Color', 'crio' ),
			'custom'  => '<span class="dashicons dashicons-admin-customizer"></span>' . __( 'Custom', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, [ 'inherit', 'custom' ], true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_readmore_type',
				'operator' => '===',
				'value'    => 'link',
			),
		),
	),
	'bgtfw_blog_post_readmore_link_color'              => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_readmore_link_color',
		'label'             => esc_attr__( 'Link Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_read_more',
		'default'           => 'color-1',
		'choices'           => array(
			'selectors' => array( '.read-more a.link:not(.btn)' ),
			'colors'    => $bgtfw_formatted_palette,
			'size'      => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_readmore_type',
				'operator' => '===',
				'value'    => 'link',
			),
			array(
				'setting'  => 'bgtfw_blog_post_readmore_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_readmore_link_decoration'         => array(
		'settings'          => 'bgtfw_blog_post_readmore_link_decoration',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_read_more',
		'default'           => 'underline',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'None', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, [ 'none', 'underline' ], true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_readmore_type',
				'operator' => '===',
				'value'    => 'link',
			),
			array(
				'setting'  => 'bgtfw_blog_post_readmore_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_readmore_link_color_hover'        => array(
		'type'            => 'slider',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_readmore_link_color_hover',
		'label'           => esc_attr__( 'Hover Color Brightness', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_read_more',
		'default'         => 0,
		'choices'         => array(
			'min'  => '-25',
			'max'  => '25',
			'step' => '1',
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_readmore_type',
				'operator' => '===',
				'value'    => 'link',
			),
			array(
				'setting'  => 'bgtfw_blog_post_readmore_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_readmore_link_decoration_hover'   => array(
		'settings'          => 'bgtfw_blog_post_readmore_link_decoration_hover',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Hover Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_read_more',
		'default'           => 'underline',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'None', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, [ 'none', 'underline' ], true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_readmore_type',
				'operator' => '===',
				'value'    => 'link',
			),
			array(
				'setting'  => 'bgtfw_blog_post_readmore_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_readmore_position'                => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_readmore_position',
		'label'             => esc_attr__( 'Position', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_read_more',
		'default'           => 'right',
		'choices'           => array(
			'left'   => '<span class="dashicons dashicons-editor-alignleft"></span>' . esc_attr__( 'Left', 'crio' ),
			'center' => '<span class="dashicons dashicons-editor-aligncenter"></span>' . esc_attr__( 'Center', 'crio' ),
			'right'  => '<span class="dashicons dashicons-editor-alignright"></span>' . esc_attr__( 'Right', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'left', 'center', 'right' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.read-more',
				'property' => 'text-align',
			),
		),
	),
	'bgtfw_blog_post_tags_link_color_display'          => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_tags_link_color_display',
		'label'             => esc_attr__( 'Colors', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-admin-site"></span>' . __( 'Global Color', 'crio' ),
			'custom'  => '<span class="dashicons dashicons-admin-customizer"></span>' . __( 'Custom', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inherit', 'custom' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_tags_link_color'                  => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_tags_link_color',
		'label'             => esc_attr__( 'Link Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'           => 'color-1',
		'choices'           => array(
			'selectors' => array( '.blog .post .entry-footer .tags-links a', '.archive .post .entry-footer .tags-links a' ),
			'colors'    => $bgtfw_formatted_palette,
			'size'      => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_tags_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_tags_link_decoration'             => array(
		'settings'          => 'bgtfw_blog_post_tags_link_decoration',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'Normal', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_tags_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_tags_link_color_hover'            => array(
		'type'            => 'slider',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_tags_link_color_hover',
		'label'           => esc_attr__( 'Hover Color Brightness', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'         => -25,
		'choices'         => array(
			'min'  => '-25',
			'max'  => '25',
			'step' => '1',
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_tags_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_tags_decoration_hover'            => array(
		'settings'          => 'bgtfw_blog_post_tags_link_decoration_hover',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Hover Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'None', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_tags_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),

	'bgtfw_blog_post_tags_icon_display'                => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_tags_icon_display',
		'label'             => esc_attr__( 'Icon Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'           => 'inline-block',
		'choices'           => array(
			'inline-block' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'         => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inline-block', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .tags-links .fa, .archive .post .entry-footer .tags-links .fa',
				'property' => 'display',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_tag_icon'                         => array(
		'type'            => 'fontawesome',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_tag_icon',
		'label'           => esc_attr__( 'Single Tag Icon', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'         => 'tag',
		'js_vars'         => array(
			array(
				'element'       => '.blog .post .tags-links.singular .fa, .archive .post .tags-links.singular .fa',
				'function'      => 'html',
				'attr'          => 'class',
				'value_pattern' => 'fa fa-fw fa-$',
			),
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_tags_icon_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_tags_icon'                        => array(
		'type'            => 'fontawesome',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_tags_icon',
		'label'           => esc_attr__( 'Multiple Tags Icon', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_tags_links',
		'default'         => 'tags',
		'js_vars'         => array(
			array(
				'element'       => '.blog .post .tags-links.multiple .fa, .archive .post .tags-links.multiple .fa',
				'function'      => 'html',
				'attr'          => 'class',
				'value_pattern' => 'fa fa-fw fa-$',
			),
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_tags_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_tags_icon_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_cats_display'                     => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_cats_display',
		'label'             => esc_attr__( 'Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'           => 'block',
		'choices'           => array(
			'block' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'  => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'block', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .cat-links, .archive .post .entry-footer .cat-links',
				'property' => 'display',
			),
		),
	),

	'bgtfw_blog_post_cats_alignment'                   => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_cats_alignment',
		'label'             => esc_attr__( 'Alignment', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'           => 'left',
		'choices'           => array(
			'left'   => '<span class="dashicons dashicons-editor-alignleft"></span>' . esc_attr__( 'Left', 'crio' ),
			'center' => '<span class="dashicons dashicons-editor-aligncenter"></span>' . esc_attr__( 'Center', 'crio' ),
			'right'  => '<span class="dashicons dashicons-editor-alignright"></span>' . esc_attr__( 'Right', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'left', 'center', 'right' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .cat-links, .archive .post .entry-footer .cat-links',
				'property' => 'text-align',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),

	// Start: Blog Page Category Links Color Controls.
	'bgtfw_blog_post_cats_link_color_display'          => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_cats_link_color_display',
		'label'             => esc_attr__( 'Colors', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-admin-site"></span>' . __( 'Global Color', 'crio' ),
			'custom'  => '<span class="dashicons dashicons-admin-customizer"></span>' . __( 'Custom', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inherit', 'custom' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_cats_link_color'                  => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_cats_link_color',
		'label'             => esc_attr__( 'Link Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'           => 'color-1',
		'choices'           => array(
			'selectors' => array( '.blog .post .entry-footer .cat-links a', '.archive .post .entry-footer .cat-links a' ),
			'colors'    => $bgtfw_formatted_palette,
			'size'      => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_cats_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_cats_link_decoration'             => array(
		'settings'          => 'bgtfw_blog_post_cats_link_decoration',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'Normal', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_cats_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_cats_link_color_hover'            => array(
		'type'            => 'slider',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_cats_link_color_hover',
		'label'           => esc_attr__( 'Hover Color Brightness', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'         => -25,
		'choices'         => array(
			'min'  => '-25',
			'max'  => '25',
			'step' => '1',
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_cats_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_cats_decoration_hover'            => array(
		'settings'          => 'bgtfw_blog_post_cats_link_decoration_hover',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Hover Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'None', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_cats_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),

	// Start: Blog Page Category Icons.
	'bgtfw_blog_post_cats_icon_display'                => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_cats_icon_display',
		'label'             => esc_attr__( 'Icon Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'           => 'inline-block',
		'choices'           => array(
			'inline-block' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'         => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inline-block', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .cat-links .fa, .archive .post .entry-footer .cat-links .fa',
				'property' => 'display',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_cat_icon'                         => array(
		'type'            => 'fontawesome',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_cat_icon',
		'label'           => esc_attr__( 'Single Category Icon', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'         => 'folder',
		'js_vars'         => array(
			array(
				'element'       => '.blog .post .cat-links.singular .fa, .archive .post .cat-links.singular .fa',
				'function'      => 'html',
				'attr'          => 'class',
				'value_pattern' => 'fa fa-fw fa-$',
			),
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_cats_icon_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_cats_icon'                        => array(
		'type'            => 'fontawesome',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_cats_icon',
		'label'           => esc_attr__( 'Multiple Categories Icon', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_cat_links',
		'default'         => 'folder-open',
		'js_vars'         => array(
			array(
				'element'       => '.blog .post .cat-links.multiple .fa, .archive .post .cat-links.multiple .fa',
				'function'      => 'html',
				'attr'          => 'class',
				'value_pattern' => 'fa fa-fw fa-$',
			),
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_cats_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_cats_icon_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_comments_display'                 => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_comments_display',
		'label'             => esc_attr__( 'Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'           => 'block',
		'choices'           => array(
			'block' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'  => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'block', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .comments-link, .archive .post .entry-footer .comments-link',
				'property' => 'display',
			),
		),
	),

	'bgtfw_blog_post_comments_alignment'                   => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_comments_alignment',
		'label'             => esc_attr__( 'Alignment', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'           => 'left',
		'choices'           => array(
			'left'   => '<span class="dashicons dashicons-editor-alignleft"></span>' . esc_attr__( 'Left', 'crio' ),
			'center' => '<span class="dashicons dashicons-editor-aligncenter"></span>' . esc_attr__( 'Center', 'crio' ),
			'right'  => '<span class="dashicons dashicons-editor-alignright"></span>' . esc_attr__( 'Right', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'left', 'center', 'right' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .comments-link, .archive .post .entry-footer .comments-link',
				'property' => 'text-align',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),

	// Start: Comment Link Color Controls.
	'bgtfw_blog_post_comments_link_color_display'      => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_comments_link_color_display',
		'label'             => esc_attr__( 'Colors', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'           => 'inherit',
		'choices'           => array(
			'inherit' => '<span class="dashicons dashicons-admin-site"></span>' . __( 'Global Color', 'crio' ),
			'custom'  => '<span class="dashicons dashicons-admin-customizer"></span>' . __( 'Custom', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inherit', 'custom' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_comments_link_color'              => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_post_comments_link_color',
		'label'             => esc_attr__( 'Link Color', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'           => 'color-1',
		'choices'           => array(
			'selectors' => array( '.blog .post .entry-footer .comments-link a', '.archive .post .entry-footer .comments-link a' ),
			'colors'    => $bgtfw_formatted_palette,
			'size'      => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_comments_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_comments_link_decoration'         => array(
		'settings'          => 'bgtfw_blog_post_comments_link_decoration',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'Normal', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_comments_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_comments_link_color_hover'        => array(
		'type'            => 'slider',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_comments_link_color_hover',
		'label'           => esc_attr__( 'Hover Color Brightness', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'         => -25,
		'choices'         => array(
			'min'  => '-25',
			'max'  => '25',
			'step' => '1',
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_comments_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_comments_decoration_hover'        => array(
		'settings'          => 'bgtfw_blog_post_comments_link_decoration_hover',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Hover Text Style', 'crio' ),
		'type'              => 'radio-buttonset',
		'section'           => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'           => 'none',
		'choices'           => array(
			'none'      => '<span class="dashicons dashicons-editor-textcolor"></span>' . __( 'None', 'crio' ),
			'underline' => '<span class="dashicons dashicons-editor-underline"></span>' . __( 'Underline', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'none', 'underline' ), true ) ? $value : $settings->default;
		},
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_comments_link_color_display',
				'operator' => '!==',
				'value'    => 'inherit',
			),
		),
	),
	'bgtfw_blog_post_comments_icon_display'            => array(
		'type'              => 'radio-buttonset',
		'transport'         => 'auto',
		'settings'          => 'bgtfw_blog_post_comments_icon_display',
		'label'             => esc_attr__( 'Icon Display', 'crio' ),
		'section'           => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'           => 'inline-block',
		'choices'           => array(
			'inline-block' => '<span class="dashicons dashicons-visibility"></span>' . __( 'Show', 'crio' ),
			'none'         => '<span class="dashicons dashicons-hidden"></span>' . __( 'Hide', 'crio' ),
		),
		'sanitize_callback' => function( $value, $settings ) {
			return in_array( $value, array( 'inline-block', 'none' ), true ) ? $value : $settings->default;
		},
		'output'            => array(
			array(
				'element'  => '.blog .post .entry-footer .comments-link .fa, .archive .post .entry-footer .comments-link .fa',
				'property' => 'display',
			),
		),
		'active_callback'   => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_comment_icon'                     => array(
		'type'            => 'fontawesome',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_comment_icon',
		'label'           => esc_attr__( 'Single Comment Icon', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'         => 'comment',
		'js_vars'         => array(
			array(
				'element'       => '.blog .post .comments-link.singular .fa, .archive .post .comments-link.singular .fa',
				'function'      => 'html',
				'attr'          => 'class',
				'value_pattern' => 'fa fa-fw fa-$',
			),
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_comments_icon_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_blog_post_comments_icon'                    => array(
		'type'            => 'fontawesome',
		'transport'       => 'postMessage',
		'settings'        => 'bgtfw_blog_post_comments_icon',
		'label'           => esc_attr__( 'Multiple Comments Icon', 'crio' ),
		'section'         => 'bgtfw_pages_blog_blog_page_comment_links',
		'default'         => 'comments',
		'js_vars'         => array(
			array(
				'element'       => '.blog .post .comments-link.multiple .fa, .archive .post .comments-link.multiple .fa',
				'function'      => 'html',
				'attr'          => 'class',
				'value_pattern' => 'fa fa-fw fa-$',
			),
		),
		'active_callback' => array(
			array(
				'setting'  => 'bgtfw_blog_post_comments_display',
				'operator' => '!==',
				'value'    => 'none',
			),
			array(
				'setting'  => 'bgtfw_blog_post_comments_icon_display',
				'operator' => '!==',
				'value'    => 'none',
			),
		),
	),
	'bgtfw_layout_blog_layout'                         => array(
		'settings'          => 'bgtfw_layout_blog_layout',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Homepage Blog Layout', 'crio' ),
		'type'              => 'radio',
		'priority'          => 40,
		'default'           => 'layout-1',
		'choices'           => array(
			'layout-1' => esc_attr__( 'Layout 1', 'crio' ),
			'layout-2' => esc_attr__( 'Layout 2', 'crio' ),
			'layout-3' => esc_attr__( 'Layout 3', 'crio' ),
			'layout-4' => esc_attr__( 'Layout 4', 'crio' ),
			'layout-5' => esc_attr__( 'Layout 5', 'crio' ),
			'layout-6' => esc_attr__( 'Layout 6', 'crio' ),
		),
		'section'           => 'static_front_page',
		'active_callback'   => function() {
			return get_option( 'show_on_front', 'posts' ) === 'posts' ? true : false;
		},
		'sanitize_callback' => 'sanitize_html_class',
	),
	'bgtfw_layout_blog_layout'                         => array(
		'settings'          => 'bgtfw_layout_blog_layout',
		'transport'         => 'postMessage',
		'label'             => esc_html__( 'Layout', 'crio' ),
		'type'              => 'radio',
		'priority'          => 40,
		'default'           => 'layout-1',
		'choices'           => array(
			'layout-1' => esc_attr__( 'Layout 1', 'crio' ),
			'layout-2' => esc_attr__( 'Layout 2', 'crio' ),
			'layout-3' => esc_attr__( 'Layout 3', 'crio' ),
			'layout-4' => esc_attr__( 'Layout 4', 'crio' ),
			'layout-5' => esc_attr__( 'Layout 5', 'crio' ),
			'layout-6' => esc_attr__( 'Layout 6', 'crio' ),
		),
		'section'           => 'bgtfw_layout_blog',
		'sanitize_callback' => 'sanitize_html_class',
	),
	'bgtfw_blog_page_margin'                                => array(
		'type'              => 'kirki-generic',
		'transport'         => 'postMessage',
		'section'           => 'bgtfw_blog_margin_section',
		'settings'          => 'bgtfw_blog_page_margin',
		'label'             => '',
		'default'           => array(
			array(
				'media'    => array( 'base' ),
				'unit'     => 'em',
				'isLinked' => true,
				'values'   => array(
					'top' => 0,
				),
			),
		),
		'sanitize_callback' => array( 'Boldgrid_Framework_Customizer_Generic', 'sanitize' ),
		'choices'           => array(
			'name'     => 'boldgrid_controls',
			'type'     => 'Padding',
			'settings' => array(
				'responsive' => Boldgrid_Framework_Customizer_Generic::$device_sizes,
				'control'    => array(
					'title'     => __( 'Margin Above Posts Container', 'crio' ),
					'selectors' => array( '.archive .article-wrapper, .blog .article-wrapper' ),
					'sliders'   => array(
						array(
							'name'        => 'top',
							'label'       => '',
							'cssProperty' => 'padding-top',
						),
					),
				),
			),
		),
	),
	'bgtfw_blog_margin'                                => array(
		'type'              => 'kirki-generic',
		'transport'         => 'postMessage',
		'section'           => 'bgtfw_blog_margin_section',
		'settings'          => 'bgtfw_blog_margin',
		'label'             => '',
		'default'           => array(
			array(
				'media'    => array( 'base' ),
				'unit'     => 'em',
				'isLinked' => true,
				'values'   => array(
					'bottom' => 0.5,
					'top'    => 0.5,
				),
			),
		),
		'sanitize_callback' => array( 'Boldgrid_Framework_Customizer_Generic', 'sanitize' ),
		'choices'           => array(
			'name'     => 'boldgrid_controls',
			'type'     => 'Margin',
			'settings' => array(
				'responsive' => Boldgrid_Framework_Customizer_Generic::$device_sizes,
				'control'    => array(
					'selectors' => array( '.palette-primary.archive .post, .palette-primary.blog .post' ),
					'title'     => __( 'Margin Below Posts', 'crio' ),
					'sliders'   => array(
						array(
							'name'        => 'bottom',
							'label'       => '',
							'cssProperty' => 'margin-bottom',
						),
					),
				),
			),
		),
	),
	'bgtfw_blog_padding'                               => array(
		'type'              => 'kirki-generic',
		'transport'         => 'postMessage',
		'section'           => 'bgtfw_blog_padding_section',
		'settings'          => 'bgtfw_blog_padding',
		'label'             => '',
		'default'           => '',
		'sanitize_callback' => array( 'Boldgrid_Framework_Customizer_Generic', 'sanitize' ),
		'choices'           => array(
			'name'     => 'boldgrid_controls',
			'type'     => 'Padding',
			'settings' => array(
				'responsive' => Boldgrid_Framework_Customizer_Generic::$device_sizes,
				'control'    => array(
					'selectors' => array( '.palette-primary.archive .post, .palette-primary.blog .post' ),
				),
			),
		),
	),
	'bgtfw_blog_border'                                => array(
		'type'              => 'kirki-generic',
		'transport'         => 'postMessage',
		'section'           => 'bgtfw_blog_border_section',
		'settings'          => 'bgtfw_blog_border',
		'label'             => '',
		'default'           => '',
		'sanitize_callback' => array( 'Boldgrid_Framework_Customizer_Generic', 'sanitize' ),
		'choices'           => array(
			'name'     => 'boldgrid_controls',
			'type'     => 'Border',
			'settings' => array(
				'responsive' => Boldgrid_Framework_Customizer_Generic::$device_sizes,
				'control'    => array(
					'selectors' => array( '.palette-primary.archive .post, .palette-primary.blog .post' ),
				),
			),
		),
	),
	'bgtfw_blog_border_color'                          => array(
		'type'              => 'bgtfw-palette-selector',
		'transport'         => 'postMessage',
		'settings'          => 'bgtfw_blog_border_color',
		'label'             => esc_attr__( 'Border Color', 'crio' ),
		'section'           => 'bgtfw_blog_border_section',
		'priority'          => 20,
		'default'           => 'color-1',
		'choices'           => array(
			'colors' => $bgtfw_formatted_palette,
			'size'   => $bgtfw_palette->get_palette_size( $bgtfw_formatted_palette ),
		),
		'sanitize_callback' => array( $bgtfw_color_sanitize, 'sanitize_palette_selector' ),
	),
	'bgtfw_blog_border_radius'       => array(
		'type'              => 'kirki-generic',
		'transport'         => 'postMessage',
		'section'           => 'bgtfw_blog_border_radius_section',
		'settings'          => 'bgtfw_blog_border_radius',
		'label'             => '',
		'default'           => '',
		'sanitize_callback' => array( 'Boldgrid_Framework_Customizer_Generic', 'sanitize' ),
		'choices'           => array(
			'name'     => 'boldgrid_controls',
			'type'     => 'BorderRadius',
			'settings' => array(
				'responsive' => Boldgrid_Framework_Customizer_Generic::$device_sizes,
				'control'    => array(
					'selectors' => array( '.palette-primary.archive .post, .palette-primary.blog .post' ),
				),
			),
		),
	),
	'bgtfw_blog_shadow'                                => array(
		'type'              => 'kirki-generic',
		'transport'         => 'postMessage',
		'section'           => 'bgtfw_blog_shadow_section',
		'settings'          => 'bgtfw_blog_shadow',
		'label'             => '',
		'default'           => '',
		'sanitize_callback' => array( 'Boldgrid_Framework_Customizer_Generic', 'sanitize' ),
		'choices'           => array(
			'name'     => 'boldgrid_controls',
			'type'     => 'BoxShadow',
			'settings' => array(
				'responsive' => Boldgrid_Framework_Customizer_Generic::$device_sizes,
				'control'    => array(
					'selectors' => array( '.palette-primary.archive .post, .palette-primary.blog .post' ),
				),
			),
		),
	),
);
