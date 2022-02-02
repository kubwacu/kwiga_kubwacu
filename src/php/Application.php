<?php

class Application
{
    /**
     * fait une redirediction automatique 
     * des pages dans le controlleur à partir de l'accueil
     *
     * @return void
     */
    public static function Process()
    {

        $controllerName = ".....";
        $task= "....";

        if (!empty($_GET["controller"])) {
            $controllerName = ucfirst($_GET["controller"]);
        }
        if (!empty($_GET["task"])) {
            $task = $_GET["task"];
        }

        $controllerName = "\Controllers\\$controllerName";
        $controller = new $controllerName();
        $controller->$task();
    }
}