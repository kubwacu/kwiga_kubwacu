<?php


class Database
{
    
    /**
     * Retourne une seule connexion à la base de donées
     */
    
    private $instance = null;

    public function getPdo(): PDO
    {
        $HOST= "localhost"; 
        $DATABASE ="kubwacu_twige"; 
        $USER = "root"; 
        $PASSWORD = "";
        if (self::$instance === null) {
            self::$instance  = new PDO('mysql:host='.$HOST.';dbname='.$DATABASE.';charset=utf8', $USER, $PASSWORD, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]);
        }

        return self::$instance;
    }
}
