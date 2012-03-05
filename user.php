<?php

class luna
{
  private $title;
  function k_luna($title) {
    $this->title = $title;
  }
  function run() {
    return '<div id="luna"><script type="text/javascript">LunaRun("' . LUNA_HTTP . '");</script></div>';
  }
}

