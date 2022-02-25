

const arreglo = new Array;
suma = 0;
let n = 8;
console.log("El arreglo es el siguiente: ");
for(let i = 1; i <= n; i++){
    let number = Math.floor(Math.random() * 10);
    arreglo.push(number);
    suma += number;
}
console.log(arreglo);
let promedio = suma / n;
console.log("El promedio es: ");
console.log(promedio);

return;

