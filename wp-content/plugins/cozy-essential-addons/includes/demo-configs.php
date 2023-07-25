<?php
function cozythemes_demo_importer_get_templates_lists($theme_slug)
{
    switch ($theme_slug):
        case "fotawp":
            $demo_templates_lists = array(
                'fotawp' => array(
                    'title' => esc_html__('FotaWP', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => false,  /*Premium*/
                    'type' => 'free',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'categories' => array('free'), /*Categories*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/1/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/1/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/1/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/1/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/default/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-free-2' => array(
                    'title' => esc_html__('Grid News', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => false,  /*Premium*/
                    'type' => 'free',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/2/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/2/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/2/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/2/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/grid-news/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-free-3' => array(
                    'title' => esc_html__('Headline News', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => false,  /*Premium*/
                    'type' => 'free',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/3/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/3/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/3/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/3/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/headline-news/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-free-4' => array(
                    'title' => esc_html__('Blogger Life', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => false,  /*Premium*/
                    'type' => 'free',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/4/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/4/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/4/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/4/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/blogger-life',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-free-5' => array(
                    'title' => esc_html__('Fota Tech', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => false,  /*Premium*/
                    'type' => 'free',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/5/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/5/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/5/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/5/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-tech/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-free-6' => array(
                    'title' => esc_html__('Fota Newspaper', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => false,  /*Premium*/
                    'type' => 'free',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/6/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/6/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/6/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/free/6/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-newspaper/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-1' => array(
                    'title' => esc_html__('Heading News Pro', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/1/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/1/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/1/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/1/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/headline-news-pro/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-2' => array(
                    'title' => esc_html__('HVAC Services', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/2/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/2/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/2/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/2/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/hvac-services/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-3' => array(
                    'title' => esc_html__('Digital Agency', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/3/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/3/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/3/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/3/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/digital-agency/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-4' => array(
                    'title' => esc_html__('Fota Insurance', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/4/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/4/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/4/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/4/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-insurance/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-5' => array(
                    'title' => esc_html__('Fota Health', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/5/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/5/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/5/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/5/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-health/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-6' => array(
                    'title' => esc_html__('Fota Homes', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/6/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/6/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/6/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/6/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-homes/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-7' => array(
                    'title' => esc_html__('Sport News', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/7/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/7/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/7/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/7/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/magazine-demo-2/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-8' => array(
                    'title' => esc_html__('Fota Store', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/8/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/8/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/8/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/8/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-store/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-9' => array(
                    'title' => esc_html__('Pet Care', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/9/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/9/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/9/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/9/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/pet-care/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-10' => array(
                    'title' => esc_html__('Fota Learning', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/10/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/10/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/10/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/10/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-learning/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-11' => array(
                    'title' => esc_html__('Tech Blogger', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/11/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/11/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/11/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/11/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/tech-bloggers/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-12' => array(
                    'title' => esc_html__('Buisness Coach', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/12/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/12/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/12/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/12/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/business-coach/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-13' => array(
                    'title' => esc_html__('Fota Fitness', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/13/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/13/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/13/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/13/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-fitness/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-14' => array(
                    'title' => esc_html__('Photography Service', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/14/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/14/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/14/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/14/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/photography-services/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-15' => array(
                    'title' => esc_html__('Travel Agency', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/15/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/15/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/15/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/15/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/travel-agency/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-16' => array(
                    'title' => esc_html__('App Landing Page', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/16/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/16/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/16/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/16/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/app-landing-page/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-17' => array(
                    'title' => esc_html__('Fota Magazine', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/17/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/17/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/17/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/17/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-magazine/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-18' => array(
                    'title' => esc_html__('Fota Tech Pro', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/18/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/18/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/18/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/18/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/fota-tech-pro/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                ),
                'fotawp-pro-19' => array(
                    'title' => esc_html__('Fota Newspaper Pro', 'cozythemes-demo-importer'),/*Title*/
                    'is_pro' => true,  /*Premium*/
                    'type' => 'premium',
                    'author' => esc_html__('CozyThemes', 'cozythemes-demo-importer'),    /*Author Name*/
                    'keywords' => array('fotawp', 'multipurpose'),  /*Search keyword*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/19/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/19/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/19/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotawp/pro/19/screenshot.png',
                    'demo_url' => 'https://fotademo.cozythemes.com/newspaper-pro/',
                    'plugins' => array(
                        array(
                            'name'      => __('Elementor', 'cozy-addons'),
                            'slug'      => 'elementor',
                        ),
                        array(
                            'name'      => __('Contact Form 7', 'text-domain'),
                            'slug'      => 'contact-form-7',
                            'main_file' => 'wp-contact-form-7.php',
                        ),
                        array(
                            'name'      => __('Cozy Addons for Elementor', 'text-domain'),
                            'slug'      => 'cozy-addons',
                        ),
                    )
                )
            );
            break;
        case "fotablog":
            $demo_templates_lists = array(
                'fotablog' => array(
                    'title' => esc_html__('Fotablog', 'cozy-essential-addons'),/*Title*/
                    'is_pro' => false,  /*Premium*/
                    'type' => 'free',
                    'author' => esc_html__('CozyThemes', 'cozy-essential-addons'),    /*Author Name*/
                    'keywords' => array('Fotablog', 'cozy-essential-addons'),  /*Search keyword*/
                    'categories' => array('free'), /*Categories*/
                    'template_url' => array(
                        'content' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotablog/free/1/content.json',
                        'options' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotablog/free/1/options.json',
                        'widgets' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotablog/free/1/widgets.json'
                    ),
                    'screenshot_url' => COZYTHEMES_DEMO_IMPORTER_SETUP_TEMPLATE_URL . '/fotablog/free/1/screenshot.png',
                    'demo_url' => 'http://fotademo.cozythemes.com/fotablog/',
                    'plugins' => ''
                ),
            );
            break;
        default:
            $demo_templates_lists = array();
    endswitch;

    return $demo_templates_lists;
}
