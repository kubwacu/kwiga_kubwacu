<?php
require_once 'Database.php';

    $methode = $_POST['methode'];
    $methode();

    /*if(type==="concours-9"){
        var data = "methode =" +methode+ "&type ="+type+"&cours =" +cours+ "&year =" +year;
    }
    if(type==="exetat"){
        var data = "methode =" +methode+ "&type ="+type+"&cours =" +cours+ "&year =" +year+ "&section ="+section; 
    }
    if(type==="examen-uni"){
        var data = "methode =" +methode+ "&type ="+type+"&cours =" +cours+ "&year =" +year+ "&fac ="+fac+ "&departement =" +departement+ "&université ="+université+ "&stage =" +stage;
    }*/

    function save()
    {
        $title = generate_doc_title();
        $type = $_POST['type'];
        $cours = $_POST['cours'];
        $year = $_POST['year'];
        $section = $_POST['section'];
        $fac = $_POST['fac'];
        $departement = $_POST['departement'];
        $université = $_POST['université'];
        $stage = $_POST['stage'];

        $db = new Database();
        $pdo = $db->getPdo();

        if($type==="concours-9"){
            $query = $pdo->prepare("INSERT INTO documents SET title = :title, type = :type, year = :year, cours = :cours, added_at = NOW(), path = :article_id");
            $query->execute(['title' => $title,'year'=>$year,'type' =>$type,'cours' => $cours]);    
            
            echo "Document $title ajouté à la BD";
        }
        else if($type==="exetat"){
            $query = $pdo->prepare("INSERT INTO documents SET title = :title, type = :type, year = :year, cours = :cours, section = :section, added_at = NOW(), path = :article_id");
            $query->execute(['title' => $title,'year'=>$year,'type' =>$type,'cours' => $cours,'section' => $section]);
            echo "Document $title ajouté à la BD";
        }
        else if($type==="examen-uni"){
            $query = $pdo->prepare("INSERT INTO documents SET title = :title, type = :type,cours = :cours, university = :université, departement = :departement, faculty = :fac, stage = :stage, academic_year = :year, added_at = NOW(), path = :article_id");
            $query->execute(['title' => $title,'type' =>$type,'cours' => $cours,'university' => $université,'departement'=>$departement, 'faculty'=>$fac,'stage'=>$stage,'academic_year'=>$year]);
            echo "Document $title ajouté à la BD";
        }
        else
        {
            echo "Erreur à la connexion ";
        }
    }

    function generate_doc_title(): string{
        /*
            examples of returns:
            - generate_doc_title("2016", "concours-9", "Kirundi") 
                => "Kirundi - Concours national de la 9ème année édition 2016"
            - generate_doc_title("2016", "exetat", "Mathématiques", "Info-telecom") 
                => "Mathématiques - Examen national de la section Info-telecom session 2016"
            - generate_doc_title("2020-2021", "examen-uni", "Java mobile", "Informatique", null, "Université du lac tanganyika", 2) 
                => "Java mobile - Examen pour faculté Info BAC2 à l'université du lac Tanganyika année academique 2020-2021"
            - generate_doc_title("2020-2021", "examen-uni", "PHP", "Info", "Genie logiciel", "Université du lac tanganyika", 3) 
                => "PHP - Examen pour faculté Info, département Génie logiciel BAC3 à l'université du lac Tanganyika année academique 2020-2021"
        */
        $type = $_POST['type'];
        $cours = $_POST['cours'];
        $year = $_POST['year'];
        $section = $_POST['section'];
        $fac = $_POST['fac'];
        $departement = $_POST['departement'];
        $université = $_POST['université'];
        $stage = $_POST['stage'];

        if($type==="concours-9"){
            return $cours." - Concours national de la 9ème année édition ".$year;
        }
        if($type==="exetat"){
            return $cours." - Examen d'Etat de la section $section session ".$year;
        }
        if($type==="examen-uni"){
            if($departement===null){
                return $cours." - Examen pour la faculté ".$fac." Bac".$stage." à ".$université.", année academmique ".$year;
            }else{
                return $cours." - Examen pour la faculté ".$fac.", département ".$departement."  Bac".$stage." à ".$université.", année academmique ".$year;
            }
        }
    }


    function findLastAddedDoc(int $number):array
    {
        $db = new Database();
        $pdo = $db->getPdo();
        $sql = "SELECT * FROM documents ORDER BY DESC LIMIT".$number;

        $resultats = $pdo->query($sql);
        $items = $resultats->fetchAll();

        return $items;
    }

    function findDoc(int $id)
    {
        $db = new Database();
        $pdo = $db->getPdo();
        $query = $pdo->prepare("SELECT * FROM documents WHERE id = :id");
        $query->execute(compact('id'));
        $item = $query->fetch();

        return $item;
    }

    /*public static function save($path, $year, $type, $cours, $section_fac, $departement, $university, $stage): void{
        
    } //question sur l'enregistrement
    public static function get_document($id): array{} //Done. It is in Model file and is called "find($id)"
    public static function get_last_added($nbr): array{} //Done It is in Model file and is called "findLastAdded($number)"
    public static function search($q): array{}
    public static function get_concours_9($edition=null): array{}
    public static function get_exetat($section=null, $session=null): array{}
    public static function get_examen_uni($university=null, $fac=null, $dep=null, $stage=null, $academic_year=null): array{}*/