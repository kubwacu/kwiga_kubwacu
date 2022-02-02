<?php

spl_autoload_register(function($className){
    //Controllers\DocumentAPI
    //require = libraries/controllers/DocumentAPI.php
    $className = str_replace("\\","/",$className);
    require_once("src/php/$className.php");
});