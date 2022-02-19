

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

function contador(){
    console.log("function success");
    let n = prompt("Ingresa la cantidad de elementos que quieres en el arreglo.");
    let arreglo = new Array;
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    for(let i = 0; i<n; i++){
        let numero = Math.floor(Math.random() * 100);
        arreglo.push(numero);
    }

    document.getElementById("arreglo").innerHTML = ("El arreglo es el siguiente: " + arreglo);
    for(let i = 0; i<arreglo.length; i++){
        if(arreglo[i] < 0){
            negativos++;
        } else if(arreglo[i] == 0) {
            ceros++;
        } else {
            positivos++;
        }
    }

    document.getElementById("cuenta").innerHTML = ("Positivos: " + positivos + ", Ceros: " + ceros + ", Negativos: " + negativos);

}

function promedios(){
    let grupos = Math.floor(Math.random() * 10) + 1;
    let grades = [];
    for(let i = 0; i<grupos; i++){
        grades[i] = [];
        for(let j=0; j<grupos; j++){
            let grade = Math.floor(Math.random()*10);
            grades[i][j] = grade;
        }
    }

    let promedios = [];
    promedios = calcula_promedios(grades, grupos);
    document.getElementById("averages").innerHTML = ("Arreglo con promedios: " + promedios);

    console.log(grades);
    console.log(promedios);
}

function calcula_promedios(grades, grupos){
    let promedios = [];
    for(let i = 0; i<grupos; i++){
        let suma = 0;
        for(let j = 0; j<grupos; j++){
            suma += grades[i][j];
        }
        let average = Number(Math.round(suma/grupos + 'e2')+ 'e-2');
        promedios.push(average);
    }
    return promedios;
}


function inverso(){
    let numero = prompt("Ingresa un numero de mas de 1 digito: ");
    let num_inverso = parseFloat(numero.toString().split('').reverse().join('')) * Math.sign(numero);
    document.getElementById("numero").innerHTML = ("Numero original: " + numero);
    document.getElementById("inverso").innerHTML = ("Numero Inverso: " + num_inverso);
}

