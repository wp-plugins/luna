<?php
/*
Plugin Name: Luna
Plugin URI: http://birchware.se/wordpress/
Description: Show the phase of the moon.
Version: 1.00
Author: Mats Birch
Author URI: http://birchware.se/wordpress/
License: GNU General Public License
License URI: license.txt
*/
if (!defined('WP_PLUGIN_URL')) die('<html><head><title>Access denied!</title><body style="background:#f00;color:#FFF;font-size:3em;"><center><h1><br /><br />Access denied!</h1></center></body></html>');

define('LUNA_VERSION','1.00');
define('LUNA_TITLE'  ,'Luna');
define('LUNA_DIR'    ,dirname(__FILE__));
define('LUNA_HTTP'   ,WP_PLUGIN_URL . '/luna');

if (!is_admin()) {
  require_once(LUNA_DIR . '/user_init.php');
  require_once(LUNA_DIR . '/user.php');
}
require_once(LUNA_DIR . '/widget.php');

load_plugin_textdomain('luna',false,dirname(plugin_basename(__FILE__)) . '/languages/');

add_action('widgets_init','luna_load');

