<?php

class HTTP
{
    /**
     * Redirige le visiteur vers l'Url
     *
     * @param string $url
     * @return void
     */
    public static function redirect(string $url)
    {
        header("Location: $url");
        exit();   
    }
}