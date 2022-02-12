$(document).ready(function(){

    var type = $.trim($('#type').val());
    var cours = $.trim($('#cours').val());
    var year = $.trim($('#year').val());
    var section = $.trim($('#section').val());
    var fac = $.trim($('#fac').val());
    var departement = $.trim($('#departement').val());
    var université = $.trim($('#université').val());
    var stage = $.trim($('#stage').val());

    var complete = true;
    if (type ==="" || cours ==="" || year === "" || section ==="" || fac==="" || departement==="" || université==="" || stage==="") {
        complete =false;
    }
    if (complete) {
        $('#submit').click(function(e){
            e.preventDefault();
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
        var data = "{'methode':'"+ methode+"', 'type ': '"+type+"', 'cours:'"+ cours+"',' year':'"+ year+"'}";
    }
    if(type==="exetat"){
        var data = "{'methode':'"+ methode+"', 'type ': '"+type+"', 'cours:'"+ cours+"',' year':'"+ year+"', 'section':'" +section+"'}";
    }
    if(type==="examen-uni"){
        var data = "{'methode':'"+ methode+"', 'type ': '"+type+"', 'cours:'"+ cours+"',' year':'"+ year+"',' fac':'"+ fac+"',' departement':'" +departement+"',' université': '"+université+"',' stage':'"+ stage+"'}"; 
    }
    $.ajax({
        cache:false,
        url:"src/php/DocumentApi.php",
        data: data,
        contentType: "application/json; charset=utf-8",
        type: $('#fom').attr('method'),
        dataType : "json",
        success: function(response){
            console.log(response)
            
        }
    });
}