<?php
function cozy_addons_set_post_views($post_id)
{
    $count_key = 'cozy_post_views_count';
    $count = get_post_meta($post_id, $count_key, true);

    if ($count == '') {
        $count = 0;
        delete_post_meta($post_id, $count_key);
        add_post_meta($post_id, $count_key, '0');
    } else {
        $count++;
        update_post_meta($post_id, $count_key, $count);
    }
}

function cozy_addons_track_post_views($post_id)
{
    if (!is_single())
        return;

    if (empty($post_id)) {
        global $post;
        $post_id = $post->ID;
    }

    cozy_addons_set_post_views($post_id);
}

add_action('wp_head', 'cozy_addons_track_post_views');

remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

function cozy_addons_premium_access()
{
    $premium_status = false;
    if (cc_fs()->is__premium_only()) {
        if (cc_fs()->can_use_premium_code()) {
            $premium_status = true;
        }
    }
    return $premium_status;
}

function cozy_pagination_function($settings, $cozy_query, $pagenum_link)
{
    if ($settings['enable_pagination'] == 'yes') {
        $url_parts    = explode('?', $pagenum_link);
        $total_pages = $cozy_query->max_num_pages;
        if ($total_pages > 1) {
            $nav_prev_text = __('Prev', 'cozy-addons');
            $nav_next_text = __('Next', 'cozy-addons');
            echo '<div class="cozy-addons-pagination content-block">';
            $current_page = max(get_query_var('paged'), 1);
            echo paginate_links(array(
                'base' => '%_%' . trailingslashit($url_parts[0]),
                'current' => $current_page,
                'total' => $total_pages,
                'prev_text'    => $nav_prev_text,
                'next_text'    => $nav_next_text,
                'prev_next' => true,
            ));
            echo '</div>';
        }
    }
}
if (cozy_addons_premium_access()) {
    if (!function_exists('ct_theme_type_is_block')) {
        function ct_theme_type_is_block()
        {
            $theme = wp_get_theme();
            if (file_exists(get_theme_root() . '/' . $theme->get_template() . '/theme.json')) {
                return true;
            } else {
                return false;
            }
        }
    }

    if (!function_exists('ct_header_footer_enable_status')) {
        function ct_header_footer_enable_status()
        {

            $ct_header_footer_enable = false;
            $args = array(
                'post_type' => 'cozy_header_footer',
                'posts_per_page' => -1,
            );
            $ct_hf_templates = count(get_posts($args));
            if ($ct_hf_templates > 0) {
                $ct_header_footer_enable = true;
            }
            return $ct_header_footer_enable;
        }
    }


    if (!ct_theme_type_is_block() && ct_header_footer_enable_status()) {
        // Add inline CSS to hide default header and footer if hf templates enabled
        function add_custom_inline_css()
        {
            echo '<style>
            header.site-header {
                display: none;
            }
            footer.site-footer {
                display: none;
            }
        </style>';
        }
        add_action('wp_head', 'add_custom_inline_css');
    }
    if (!function_exists('ct_add_nav_menu_support')) {
        function ct_add_nav_menu_support()
        {
            if (!current_theme_supports('menus')) {
                add_theme_support('menus');
            }
            register_nav_menus(array('primary' => esc_html__('Primary Menu', 'cozy-addons')));
        }
        add_action('after_setup_theme', 'ct_add_nav_menu_support');
    }
    if (!function_exists('wp_head')) {
        function custom_hook_before_head()
        {
            do_action('wp_head');
        }
        add_action('wp_body_open', 'custom_hook_before_head');
    }

    if (!function_exists('wp_footer')) {
        function custom_hook_after_body()
        {
            do_action('wp_footer');
        }

        add_action('wp_footer', 'custom_hook_after_body', 999999);
    }
}

add_filter('woocommerce_add_to_cart_fragments', 'cozy_refresh_cart', 50, 1);
if (!function_exists('cozy_refresh_cart')) {
    function cozy_refresh_cart($fragments)
    {
        ob_start();
        $cart_total = WC()->cart->get_cart_total();

        $cart_count = WC()->cart->get_cart_contents_count();

        // Set the updated cart total as a fragment to be updated
        $fragments['.cozy-cart-subtotal'] = '<span class="cozy-cart-subtotal">' . $cart_total . '</span>';

        $fragments['.cozy-cart-items-count'] = '<span class="cozy-cart-items-count">' . $cart_count . '</span>';

        // $fragments['.cozy-minicart-wrapper'] = $cart_html;

        $fragments['div.cozy-minicart'] = ob_get_clean();

        return $fragments;
    }
}

if(!function_exists('cozy_get_minicart_item_template')){
    function cozy_get_minicart_item_template( &$cart_html ){
        $cart_items = WC()->cart->get_cart();
        foreach ($cart_items as $item => $values) {
            $cart_html .= '<div class="cozy-minicart-item">';
            $getProductDetail = wc_get_product($values['product_id']);
            $cart_html .= '<div class="item-image">' . $getProductDetail->get_image() . '</div>';
            $cart_html .= '<div class="item-details">';
            $cart_html .= '<p class="product-title">' . $getProductDetail->get_title() . '</p>';

            $price = get_post_meta($values['product_id'], '_price', true);
            $regular_price = get_post_meta($values['product_id'], '_regular_price', true);
            $sale_price = get_post_meta($values['product_id'], '_sale_price', true);
            if ($sale_price) {
                $cart_html .= "<div class='pricing'>";
                $cart_html .= "<span class='strikethrough'>" . wc_price($regular_price) . "</span>";
                $cart_html .= " <span>" . wc_price($sale_price) . "</span><br>";
                $cart_html .= "</div>";
                $cart_html .= "<span class='save-amount'>" . __('SAVE', 'cozy-addons') . wc_price($regular_price - $sale_price) . "</span>";
            } else {
                $cart_html .= "<span>" . wc_price($price) . "</span>";
            }
            $product_content = $getProductDetail->get_description();
            $total_words = preg_split("/[\n\r\t ]+/", $product_content, 50, PREG_SPLIT_NO_EMPTY);
            $final_content = implode(' ', array_slice($total_words, 0, 15));
            
            $cart_html .= "<div class='product-description'>" . wp_kses_post($final_content) . "</div>";
            $cart_html .= '<div class="item-quantity">';
            $cart_html .= '<span class="minus" data-cart_item_key="' . $item . '">&minus;</span><span class="quantity">' . $values['quantity'] . '</span><span class="plus" data-cart_item_key="' . $item . '">&plus;</span>';
            $cart_html .= '</div>';
            $cart_html .= '<a class="cozy-cart-remove-product" data-product_id=' . $values['product_id'] . ' data-cart_item_key=' . $item . '><u>Remove Item</u></a>';
            $cart_html .= '</div>';
            $cart_html .= '<div class="total-price">' . wc_price($price * $values['quantity']) . '</div>';
            $cart_html .= '</div>';
        }

    }
}

add_action('wp_ajax_add_to_cart', 'add_to_cart_ajax_handler');
add_action('wp_ajax_nopriv_add_to_cart', 'add_to_cart_ajax_handler');

function add_to_cart_ajax_handler()
{
    $product_id = isset($_POST['product_id']) ? intval($_POST['product_id']) : 0;

    if ($product_id <= 0) {
        wp_send_json_error('Invalid product ID.');
    }
    $initial_cart_count = WC()->cart->get_cart_contents_count();
    WC()->cart->add_to_cart($product_id);

    $cart_html = '';

    cozy_get_minicart_item_template($cart_html);

    // Send back the updated fragments in the AJAX response
    wp_send_json_success(array(
        'cart_html' => $cart_html,
        'initial_cart_count' => $initial_cart_count,
    ));
}


add_action('wp_ajax_remove_cart_item', 'remove_cart_item');
add_action('wp_ajax_nopriv_remove_cart_item', 'remove_cart_item');
if (!function_exists('remove_cart_item')) {
    function remove_cart_item()
    {
        if (isset($_POST['cart_item_key'])) {
            $cart_item_key = sanitize_text_field($_POST['cart_item_key']);

            WC()->cart->remove_cart_item($cart_item_key);

            $cart_html = '';

            cozy_get_minicart_item_template($cart_html);

            $cart_subtotal = WC()->cart->get_subtotal();

            $cart_count = WC()->cart->get_cart_contents_count();

            $empty_cart_html = '';
            if (0 == $cart_count) {
                $shop_page_url = get_permalink(wc_get_page_id('shop'));
                $empty_cart_html .= '<div class="empty-cart show-empty-cart">';
                $empty_cart_html .= $_POST['empty_cart_text'] ?? '';
                $empty_cart_html .= '<div class="cta-links">';
                $empty_cart_html .= '<a href="' . esc_url($shop_page_url) . '"><div class="shop-cta">Shop Now</div></a>';
                $empty_cart_html .= '</div>';
                $empty_cart_html .= '</div>';
            }

            wp_send_json_success(array(
                'cart_html' => $cart_html,
                'cart_subtotal' => wc_price($cart_subtotal),
                'cart_count' => $cart_count,
                'empty_cart_html' => $empty_cart_html,
            ));
        } else {
            wp_send_json_error('Invalid request.');
        }
        wp_die();
    }
}

add_action('wp_ajax_update_cart_item_quantity', 'update_cart_item_quantity_ajax_handler');
add_action('wp_ajax_nopriv_update_cart_item_quantity', 'update_cart_item_quantity_ajax_handler');

function update_cart_item_quantity_ajax_handler()
{
    $productKey = isset($_POST['product_key']) ? sanitize_text_field($_POST['product_key']) : '';
    $quantity = isset($_POST['quantity']) ? intval($_POST['quantity']) : 0;

    if (empty($productKey) || $quantity <= 0) {
        wp_send_json_error('Invalid product key or quantity.');
    }

    $product_price = '';
    foreach (WC()->cart->get_cart() as $cartItemKey => $cartItem) {
        if ($cartItem['key'] === $productKey) {
            WC()->cart->set_quantity($cartItemKey, $quantity);
            $price = get_post_meta($cartItem['product_id'], '_price', true);
            $product_price = $price * $quantity;
            break;
        }
    }

    $cart_count = WC()->cart->get_cart_contents_count();

    $cart_subtotal = WC()->cart->get_subtotal();

    wp_send_json_success(array(
        'cart_item_key' => $productKey,
        'item_quantity' => $quantity,
        'product_price' => wc_price(floatval($product_price)),
        'cart_count' => $cart_count,
        'cart_subtotal' => wc_price($cart_subtotal),
    ));
}
