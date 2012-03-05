<?php

function luna_load()
{
  register_widget('luna_widget');
}

class luna_widget extends WP_Widget
{
  function luna_widget() {
    $widget_id = 'luna';
    $widget_ops = array('classname' => 'luna','description' => __('Show the phase of the moon.','luna'));
    $control_ops = array('id_base' => $widget_id);
    $this->WP_Widget($widget_id,LUNA_TITLE,$widget_ops,$control_ops);
  }
  function widget($args,$instance) {
    extract($args);
    $title = apply_filters('widget_title',$instance['title']);
    echo $before_widget;
    //echo $before_title . $title . $after_title;
    $obj = new luna($title);
    echo $obj->run();
    echo $after_widget;
  }
}

