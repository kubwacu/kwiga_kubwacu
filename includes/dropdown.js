
//const typeSelect = document.getElementById('type');

function showHideInput(sel,yearSelect){
    var value = sel.value;
    var yearSelect = document.getElementById('year');
    //get the current year
    let year = new Date().getFullYear();

    if(value===""){
        //hide details
        document.getElementById('exetatsOp').style.display = 'none';
        document.getElementById('universityOp').style.display = 'none';
        //delete all the content in year select
        while(yearSelect.firstChild){
            yearSelect.removeChild(yearSelect.firstChild);
        }
    }
    else if(value==="concours-9"){
        //hide details exetat and university inputs
        document.getElementById('exetatsOp').style.display = 'none';
        document.getElementById('universityOp').style.display = 'none';
        //delete all the content in year select
        while(yearSelect.firstChild){
            yearSelect.removeChild(yearSelect.firstChild);
        }
        //show the right year select options        
        for (let index = 0; index < 30; index++) {
            const option = document.createElement("option");
            option.textContent = year-index;
            yearSelect.appendChild(option);         
        }    
    }
    else if(value==="exetat"){
        //show exetat and hide university inputs
        document.getElementById('exetatsOp').style.display = 'block';
        document.getElementById('universityOp').style.display = 'none';
        //delete all the content in year select
        while(yearSelect.firstChild){
            yearSelect.removeChild(yearSelect.firstChild);
        }
        //show the right year select options         
        for (let index = 0; index < 30; index++) {
            const option = document.createElement("option");
            option.textContent = year-index;
            yearSelect.appendChild(option);        
        }    
    }
    else{
        document.getElementById('exetatsOp').style.display = 'none';
        document.getElementById('universityOp').style.display = 'block';
        //delete all the content in year select
        while(yearSelect.firstChild){
            yearSelect.removeChild(yearSelect.firstChild);
        }
        //show the right year select options         
        for (let index = 0; index < 11; index++) {
            const option = document.createElement("option");
            option.textContent = toString(year-index,year+1-index) ;
            yearSelect.appendChild(option);       
        }    
    }
}
function toString(a,b){
    return a+'-'+b;
}