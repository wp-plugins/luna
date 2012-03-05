<?php

add_action('wp_print_styles' ,'luna_init_css');
add_action('wp_print_scripts','luna_init_js' );

function luna_init_css()
{
  $css_handle = 'luna_user_css';
  $css_url    = WP_PLUGIN_URL . '/luna/user.css';
  wp_register_style($css_handle,$css_url);
  wp_enqueue_style ($css_handle);
}

function luna_init_js()
{
  //error_log(var_export($GLOBALS['wp_scripts']->registered,true));
  wp_enqueue_script('jquery');
  $js_handle = 'luna_script_js';
  $js_url    = WP_PLUGIN_URL . '/luna/user.js';
  wp_register_script($js_handle,$js_url);
  wp_enqueue_script ($js_handle,$js_url,array('jquery'));
  wp_localize_script($js_handle,'luna_php'
    ,array('option_name'        => 'widget_luna'
          ,'new_moon'           => __('New Moon'          ,'luna')
          ,'waxing_crescent'    => __('Waxing Crescent'   ,'luna')
          ,'first_quarter_moon' => __('First Quarter Moon','luna')
          ,'waxing_gibbous'     => __('Waxing Gibbous'    ,'luna')
          ,'full_moon'          => __('Full Moon'         ,'luna')
          ,'waning_gibbous'     => __('Waning Gibbous'    ,'luna')
          ,'third_quarter_moon' => __('Third Quarter Moon','luna')
          ,'waning_crescent'    => __('Waning Crescent'   ,'luna')
          )
  );
}

