<?php
require_once 'Database.php';

class DocumentAPI{
    public static function generate_doc_title($year, $type, $cours, $section_fac=null, $departement=null, $university=null, $stage=null): string{
        /*
            examples of returns:
            - generate_doc_title("2016", "concours-9", "Kirundi") 
                => "Kirundi - Concours national de la 9ème année édition 2016"
            - generate_doc_title("2016", "exetat", "Mathématiques", "Info-telecom") 
                => "Mathématiques - Examen national de la section Info-telecom session 2016"
            - generate_doc_title("2020-2021", "examen-uni", "Java mobile", "Informatique", null, "Université du lac tanganyika", 2) 
                => "Java mobile - Examen pour faculté Info BAC2 à l'université du lac Tanganyika année academique 2020-2021"
            - generate_doc_title("2020-2021", "examen-uni", "PHP", "Info", "Genie logiciel", "Université du lac tanganyika", 3) 
                => "PHP - Examen pour faculté Info-département Génie logiciel BAC3 à l'université du lac Tanganyika année academique 2020-2021"
        */
    }
    public static function save_document($path, $year, $type, $cours, $section_fac, $departement, $university, $stage): void{} //question sur l'enregistrement
    public static function get_document($id): array{} //Done. It is in Model file and is called "find($id)"
    public static function get_last_added($nbr): array{} //Done It is in Model file and is called "findLastAdded($number)"
    public static function search($q): array{}
    public static function get_concours_9($edition=null): array{}
    public static function get_exetat($section=null, $session=null): array{}
    public static function get_examen_uni($university=null, $fac=null, $dep=null, $stage=null, $academic_year=null): array{}

}
