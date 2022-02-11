
//const typeSelect = document.getElementById('type');

function showHideInput(sel,yearSelect){
    var value = sel.value;
    var yearSelect = document.getElementById('year');
    var inputs = document.querySelectorAll("input");
    //get the current year
    let year = new Date().getFullYear();

    if(value===""){
        //remove attr required to displayed-none inputs
        inputs[1].removeAttribute('required');
        inputs[2].removeAttribute('required');
        inputs[4].removeAttribute('required');
        inputs[5].removeAttribute('required');
        //hide details
        document.getElementById('exetatsOp').style.display = 'none';
        document.getElementById('universityOp').style.display = 'none';
        //delete all the content in year select
        while(yearSelect.firstChild){
            yearSelect.removeChild(yearSelect.firstChild);
        }
    }
    else if(value==="concours-9"){
        //remove attr required to displayed-none inputs
        inputs[1].removeAttribute('required');
        inputs[2].removeAttribute('required');
        inputs[4].removeAttribute('required');
        inputs[5].removeAttribute('required');
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
        //remove attr required to displayed-none inputs
        inputs[1].setAttribute('required','required');
        inputs[2].removeAttribute('required');
        inputs[4].removeAttribute('required');
        inputs[5].removeAttribute('required');        
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
        //remove attr required to displayed-none inputs
        inputs[1].removeAttribute('required');
        inputs[2].setAttribute('required','required');
        inputs[4].setAttribute('required','required');
        inputs[5].setAttribute('required','required');
        //show university and hide exetat inputs
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