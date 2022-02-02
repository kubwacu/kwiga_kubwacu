<?php
require_once "env.php";

    function getDbCon(): PDO{
        $pdo = new PDO("mysql:host=".HOST.";dbname=".DATABASE.";charset=utf8", LOGIN, PASSWORD, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);

        return $pdo;
    }