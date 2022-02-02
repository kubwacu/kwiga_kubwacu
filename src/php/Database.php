<?php


class Database
{
    /**
     * Retourne connexion à la base de donées
     * 
     * @return PDO
     */
    public static function getPdo(): PDO
    {
        $HOST= "localhost"; 
        $DATABASE ="kubwacu_twige"; 
        $USER = "root"; 
        $PASSWORD = "";
        $pdo = new PDO('mysql:host='.$HOST.';dbname='.$DATABASE.';charset=utf8', $USER, $PASSWORD, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);

        return $pdo;
    }
}
