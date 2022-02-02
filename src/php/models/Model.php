<?php

namespace Models;


abstract class Model
{
    protected $pdo;
    protected $table;
    function __construct()
    {
        $this->pdo = \Database::getPdo();
    }

    /**
     * retourne un seul élément de la table par son id comme paramètre
     *
     * @param integer $id
     * @return void
     */
    public function find(int $id)
    {
        $query = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE id = :id");
        $query->execute(compact('id'));
        $item = $query->fetch();

        return $item;
    }
    /**
     * supprime un seul élement de la table par son id en param
     *
     * @param integer $id
     * @return void
     */
    public  function delete(int $id):void
    {
        $query = $this->pdo->prepare("DELETE FROM {$this->table} WHERE id = :id");
        $query->execute(compact('id'));

    }

    /**
     * retourne la liste de tous les éléments de la table
     *
     * @return array
     */
    public function findAll(?string $order = ""):array
    {
        $sql = "SELECT * FROM {$this->table}";
        /**
         * si l'order existe alors ajouter à sql
         * ORDER BY created Desc par exemple
         */
        if($order)
        {
            $sql .= " ORDER BY " .$order;
        }

        $resultats = $this->pdo->query($sql);
        $items = $resultats->fetchAll();

        return $items;

    }

    /**
     *  retourne la liste des derniers éléments ajoutés à la table
     *
     * @param integer $number
     * @return array
     */
    public function findLastAdded(int $number):array
    {
        $sql = "SELECT * FROM {$this->table} ORDER BY DESC LIMIT".$number;

        $resultats = $this->pdo->query($sql);
        $items = $resultats->fetchAll();

        return $items;

    }
}