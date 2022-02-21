function pregunta1(){
    alert("Que diferencias y semejanzas hay entre Java y JavaScript?             ");
    alert("Java es un lenguaje utilizado para el paradigma de Orientado a Objetos, mientras que JavaScript es un lenguaje en el cual su propostio es la interaccion web. De la misma manera Java es un lenguaje compilado, mientras que JavaScript es uno interpretado. Sin embargo, ambos utlizan casi la misma sintxis para la mayoria de las situaciones.");
}

function pregunta2(){
    alert("¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)" );
    alert("getDate(): Retorna los dias del mes.     getDay(): retorna los dias de la semana.        getFullYear(): Retorna el año.        getHours(): Retorna la hora.          getMinutes(): Retorna los minutos.")
}

function pregunta3(){
    alert("¿Qué métodos tienen los arreglos? (Menciona al menos 5*)             ");
    alert("pop(): Elimina el ultimo elemento agregado.         push(): Agrega un elemento al final del arreglo.       toString(): Convierte un arreglo en un string.         concat(): Da un nuevo arreglo concatenado con otro arreglo.        splice(): Inserta y elimina elementos en una posicion especifica del arreglo");
}


function pregunta4(){
    alert("¿Cómo se declara una variable con alcance local dentro de una función?             ");
    alert("Se usa la palabra reservada let.");
}


function pregunta5(){
    alert("¿Qué implicaciones tiene utilizar variables globales dentro de funciones?             ");
    alert("Se corre el riesgo de que esa variable global haga cambios dentro de otras funciones en el codigo.")
}


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
        let numero = Math.floor(Math.random() * 10);
        arreglo.push(numero);
    }

    document.getElementById("arreglo").innerHTML = ("El arreglo es el siguiente: " + arreglo);

    for(let i = 0; i < arreglo.length; i++){
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


function ver_libreria(flag, modFlag){
    const libro1 = {
        author: 'Stephen King',
        title: 'It',
        releasedate: '1990',
        status: 'Finished'
    }

    const libro2 = {
        author: 'Kobe Bryant',
        title: 'The Mamba Mentality',
        releasedate: '2018',
        status: 'Currently-Reading'
    }

    const libro3 = {
        author: 'Mitch Albom',
        title: 'The Stranger in the Lifeboat',
        releasedate: '2021',
        status: 'Not Started'
    }

    document.getElementById("author1").innerHTML = ("Author: " + libro1.author);
    document.getElementById("title1").innerHTML = ("Title: " + libro1.title);
    document.getElementById("releasedate1").innerHTML = ("Release Date: " + libro1.releasedate);
    document.getElementById("status1").innerHTML = ("Stutus: " + libro1.status);


    document.getElementById("author2").innerHTML = ("Author: " + libro2.author);
    document.getElementById("title2").innerHTML = ("Title: " + libro2.title);
    document.getElementById("releasedate2").innerHTML = ("Release Date: " + libro2.releasedate);
    document.getElementById("status2").innerHTML = ("Stutus: " + libro2.status);

    document.getElementById("author3").innerHTML = ("Author: " + libro3.author);
    document.getElementById("title3").innerHTML = ("Title: " + libro3.title);
    document.getElementById("releasedate3").innerHTML = ("Release Date: " + libro3.releasedate);
    document.getElementById("status3").innerHTML = ("Stutus: " + libro3.status);
    document.getElementById("libros").style = ("display: grid; grid-template-columns: repeat(auto-fill, 250px);")
    
    const newLibro = new Object();
    if(flag==true){
        newLibro.author = prompt("Ingresa el nombre del autor: ");
        newLibro.title = prompt("Ingresa el nombre del libro");
        newLibro.releasedate = prompt("Ingresa el Release Date");
        newLibro.status = "Not Started";
        place = document.getElementById("libros");
        let newBook = document.createElement("div");
        newBook.className = "libro";
        newBook.id = "libroN";
        place.appendChild(newBook)

        let newp = document.createElement("p");
        newp.id = "authorN"
        newBook.appendChild(newp);
        document.getElementById("authorN").innerHTML = ("Author: " + newLibro.author);
        
        let newt = document.createElement("p");
        newt.id = "titleN"
        newBook.appendChild(newt);
        document.getElementById("titleN").innerHTML = ("Title: " + newLibro.title);

        let newr = document.createElement("p");
        newr.id = "releaseN"
        newBook.appendChild(newr);
        document.getElementById("releaseN").innerHTML = ("Release Date: " + newLibro.releasedate);

        let news = document.createElement("p");
        news.id = "statusN"
        newBook.appendChild(news);
        document.getElementById("statusN").innerHTML = ("Status: " + newLibro.status);

        let btn = document.createElement("button");
        document.getElementById("libros").appendChild(btn);
        btn.id = "btnMod";
        document.getElementById("btnMod").innerHTML = ("Modificar");
        
        //btn.onclick= (modStatus(newLibro));
    }
    

}

function modStatus(newLibro){
    newLibro.status = prompt("Cual es el Status del Libro?");
}

