

function cuadradosCubos() {
    let numero = prompt("Digita un número");
    const arreglo_cuadrados = [];
    const arreglo_cubos = [];
    if(numero < 1 || numero > 50){
        alert("El numero debe de estar en el rango de 1 a 50")
    } else {
        
        for (var i = 1; i <= numero; i++) {
            let res = Math.pow(i,2);
            let res_cubos = Math.pow(i,3);
            arreglo_cuadrados.push(res);
            arreglo_cubos.push(res_cubos);
            console.log(res);
            console.log(res_cubos);
            
        }
        document.getElementById("cuadrados").append(arreglo_cuadrados) 
        document.getElementById("cubos").append(arreglo_cubos);
    }
}



function suma2numeros(){
    let numero1 = Math.floor(Math.random() * 100);
    let numero2 = Math.floor(Math.random() * 100);
    document.getElementById("ecuacionSuma").innerHTML = (numero1 + "+" + numero2 + "=");
    let suma = numero1 + numero2;
    answerSuma(numero1, numero2, suma);
}

function answerSuma(numero1, numero2, suma){
    let timeStart = performance.now();
    let resp = prompt(numero1 + "+" + numero2 );
    if(resp == suma){
        document.getElementById("typed").innerHTML = ("Tu respuesta: " + resp);
        document.getElementById("grade").innerHTML = ("Correcto!");
    } else {
        document.getElementById("typed").innerHTML = ("Tu respuesta: " + resp);
        document.getElementById("grade").innerHTML = ("Incorrecto!");
    }
    let timeEnd = performance.now();
    let tiempo = Math.floor(timeEnd - timeStart) / 1000;
    document.getElementById("timeTaken").innerHTML = ("Tiempo tardado: " + tiempo + " segundos");

}