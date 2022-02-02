<?php

namespace Controllers;

class Controller
{
    protected $model;
    protected $modelName;
    //protected $modelName = "\Models\Article";
    public function __construct()
    {
        $this->model = new $this->modelName();
        
    }
}