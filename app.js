const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteNumber(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        if(display.value === ""){
            return;
        }
        
        let expression = display.value.replace(/[^-()\d/*+.]/g, '');
        let result = Function('"use strict"; return (' + expression + ')')();

        if(!Number.isFinite(result)){
            throw new Error('Error');
        }

        display.value = Number(result.toPrecision(12));
    }catch(error){
        display.value = 'Error';
    }
}

    
    
