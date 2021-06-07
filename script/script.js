
function suma() { 

    var a=parseInt(document.getElementById('myNumber1').value);
    var b=parseInt(document.getElementById('myNumber2').value);                 
    document.getElementById('resultado').innerHTML=a+b;
 
                 }
 
 
  function resta() {  
    
    var a=parseInt(document.getElementById('myNumber1').value);
    var b=parseInt(document.getElementById('myNumber2').value);
    document.getElementById('resultado').innerHTML=a-b;
 
                  }
 
 
  
 function multiplicacion() {  
    
    var a=parseInt(document.getElementById('myNumber1').value);
    var b=parseInt(document.getElementById('myNumber2').value);
    document.getElementById('resultado').innerHTML=a*b;
 
                           }

function toggleBloque() {
    var operacionesContenedor = document.getElementById("operacionesContenedor");
    if (operacionesContenedor.style.display === "none") {
        operacionesContenedor.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar Operaciones";
    } else {
        operacionesContenedor.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Mostrar Operaciones";
    }
}

