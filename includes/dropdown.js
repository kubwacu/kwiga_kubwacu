function showHideInput(sel){
    var value = sel.value;
    if(value===""){
        document.getElementById('exetatsOp').style.display = 'none';
        document.getElementById('universityOp').style.display = 'none';
    }
    else if(value==="concours-9"){
        document.getElementById('exetatsOp').style.display = 'none';
        document.getElementById('universityOp').style.display = 'none';
    }
    else if(value==="exetat"){
        document.getElementById('exetatsOp').style.display = 'block';
        document.getElementById('universityOp').style.display = 'none';
    }
    else{
        document.getElementById('exetatsOp').style.display = 'none';
        document.getElementById('universityOp').style.display = 'block';
    }
}