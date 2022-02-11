$(document).ready(function(){

    var type = $('#type').val();
    var cours = $('#cours').val();
    var year = $('#year').val();
    var section = $('#section').val();
    var fac = $('#fac').val();
    var departement = $('#departement').val();
    var université = $('#université').val();
    var stage = $('#stage').val();

    var complete = true;
    if (type ==="" || cours ==="" || year === "" || section ==="" || fac==="" || departement==="" || université==="" || stage==="") {
        complete =false;
    }
    if (complete) {
        $('#submit').click(function(){
            formSubmit();
        });
    }


});

function formSubmit(){
    //recupération des valeurs
    var type = $('#type').val();
    var cours = $('#cours').val();
    var year = $('#year').val();
    var section = $('#section').val();
    var fac = $('#fac').val();
    var departement = $('#departement').val();
    var université = $('#université').val();
    var stage = $('#stage').val();
    
    //var document = $('#documentFile').val();

    //récupération du de la méthode
    var methode = "save";
    //récupération de données selon les types
    if(type==="concours-9"){
        var data = {methode: methode, type: type, cours: cours, year: year};
    }
    if(type==="exetat"){
        var data = {methode: methode, type: type, cours: cours, year: year, section: section};
    }
    if(type==="examen-uni"){
        var data = {methode: methode, type: type, cours: cours, year: year, fac: fac, departement: departement, université: université, stage: stage}; 
    }
    $.ajax({
        cache:false,
        url:"http://localhost/kwiga_kubwacu/src/php/DocumentApi.php",
        data: data,
        type: "post",
        dataType ="text",
        success: function(response){
            console.log(response);
        }
    });
}