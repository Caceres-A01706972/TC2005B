

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
    let suma = numero1 + numero2;

    document.getElementById("ecuacionSuma").innerHTML = (numero1 + "+" + numero2 + "=");

}

function answerSuma(){
    let timeStart = new Date();
    let resp = document.getElementById("answer").value;
    let timeEnd = new Date();
    console.log(resp);

    let tiempo = (timeStart - timeEnd);

    console.log("Te tardaste: " + tiempo);
}