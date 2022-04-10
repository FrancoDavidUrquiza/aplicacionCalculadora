function sumar(){
   const forma = document.getElementById('forma');
   let operandoA = forma['operandoA'] //regresa los valores del input
   let operandoB = forma['operandoB'];
   let resultado = parseInt(operandoA.value) +parseInt( operandoB.value);
   if(isNaN(resultado)){
       resultado = 'verifique sus valores'
   }
   document.getElementById('resultado').innerHTML = `Resultado Suma: ${resultado}`;
}

function restar(){
    const formaResta = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resutadoResta = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resutadoResta)){
        resutadoResta = 'Verifique sus datos'
    }
    document.getElementById('resultadoResta').innerHTML = `Resultado Resta :${resutadoResta}`
}

