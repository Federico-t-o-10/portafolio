var operandoa;
var operandob;
var operacion;
function init(){

    //variables
    var Ac = document.getElementById('Ac');
    var Resultado = document.getElementById('Resultado');
    var igual = document.getElementById('igual');
    var Suma = document.getElementById('Suma');
    var Resta = document.getElementById('Resta');
    var Division = document.getElementById('Division');
    var Multiplicacion = document.getElementById('Multiplicacion');
    var Pors = document.getElementById("Pors");
    var Coma = document.getElementById('Coma');
    var Uno = document.getElementById('Uno');
    var Dos = document.getElementById('Dos');
    var Tres = document.getElementById('Tres');
    var Cuatro = document.getElementById('Cuatro');
    var Cinco = document.getElementById('Cinco');
    var Seis = document.getElementById('Seis');
    var Siete = document.getElementById('Siete');
    var ocho = document.getElementById('ocho');
    var Nueve = document.getElementById('Nueve');
    var Cero = document.getElementById('Cero');
    
    //eventos
    Uno.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "1";
    }
    Dos.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "2";
    }
    Tres.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "3";
    }
    Cuatro.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "4";
    }
    Cinco.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "5";
    }
    Seis.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "6";
    }
    Siete.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "8";
    }
    Nueve.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "9";
    }
    Cero.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "0";
    } 
    Coma.onclick = function(e){
        Resultado.textContent = Resultado.textContent + ",";
    }

    Ac.onclick = function(e){
        resetear();
    }
    Resta.onclick = function(e){
        operandoa = Resultado.textContent;
        operacion = "-";
        limpiar();
    }
    Suma.onclick = function(e){
        operandoa = Resultado.textContent;
        operacion = "+";
        limpiar();
    }
    Multiplicacion.onclick = function(e){
        operandoa = Resultado.textContent;
        operacion = "*";
        limpiar();
    }
    Division.onclick = function(e){
        operandoa = Resultado.textContent;
        operacion = "/";
        limpiar();
    }
    Pors.onclick = function(e){
        operandoa = Resultado.textContent;
        operacion = "%";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = Resultado.textContent;
        resolver();
    }
}
function limpiar(){
    Resultado.textContent = "";
}

function resetear(){
    Resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;

      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;

      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
        
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    Resultado.textContent = res;
  }
