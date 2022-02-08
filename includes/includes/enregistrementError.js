const cours = document.getElementById('cours');
const year = document.getElementById('year');
const section = document.getElementById('section');
const fac = document.getElementById('fac');
const departement = document.getElementById('departement');
const université = document.getElementById('université');
const stage = document.getElementById('stage');

const documentFile = document.getElementById('documentFile');

function displayErrors(){
    // get values from the inputs
    const coursValue = cours.value.trim();
    const yearValue = year.value.trim();
    const sectionValue = section.value.trim();
    const facValue = fac.value.trim();
    const departementValue = departement.value.trim();
    const universitéValue = université.value.trim();
    const stageValue = stage.value.trim();

    if (coursValue==='') {
        setErrorFor(cours,'Cours cannot be blank');
    } else {
        //add success class
        setSuccessFor(cours);
    }

    documentFile.value;
}

function setErrorFor(input, message){
    const p = input.parentElement;
    const small = p.querySeletor('small');

    //add error message
    small.innerText = message;
    //add error class
    p.className = 'error';
}
function setSuccessFor(input){
    const p = input.parentElement;
    //add error class
    p.className = 'success';
}