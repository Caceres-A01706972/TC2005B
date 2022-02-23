//Menu right
const bag =  document.querySelector('header .bag');
const cart =  document.querySelector('.cart');
const closecartBtn = document.querySelector('.closecart');
var cartTotal = document.getElementById('total');

const contenedorCarrito =  document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#minicart');
const goCheckoutBtn =  document.querySelector('#go-checkout');

const nameArticulo1 = document.getElementById('title1').innerHTML;
const priceArticulo1 = parseInt(document.getElementById('price1').innerHTML);

const nameArticulo2 = document.getElementById('title2').innerHTML;
const priceArticulo2 = parseInt(document.getElementById('price2').innerHTML);

const nameArticulo3 = document.getElementById('title3').innerHTML;
const priceArticulo3 = parseInt(document.getElementById('price3').innerHTML);

//Body
const courseList = document.querySelector('.cards');
let articulosCarrito = [];
let total = 0;

//Abrir y cerrar carrito
bag.addEventListener('click', openCart);
closecartBtn.addEventListener('click', closecart);

//Boton Add To Cart de Articulo 1
const addToCartBtn1 = document.getElementById('1');
addToCartBtn1.addEventListener('click', agregaArticulo1);

//Boton Add To Cart de Articulo 2
const addToCartBtn2 = document.getElementById('2');
addToCartBtn2.addEventListener('click', agregaArticulo2);

//Boton Add To Cart de Articulo 3
const addToCartBtn3 = document.getElementById('3');
addToCartBtn3.addEventListener('click', agregaArticulo3);


function agregaArticulo1(){
    articulosCarrito.push(nameArticulo1);
    console.log("Articulo Agregado");
    console.log(articulosCarrito);
    total += priceArticulo1;
    console.log(total);

    // var newRowContent = "<tr> </tr>";
    // const table = document.getElementById('table-body');
    // var tableRow = document.createElement("tr");
    // var newRow = table.appendChild(tableRow);
    // var newRowColumn = newRow.appendChild("td");

    var table = document.getElementById('table-body');
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Picture";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = nameArticulo1;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = priceArticulo1;

    var cell4 = row.insertCell(3);
    cell4.innerHTML = "Quantity";

    cartTotal.innerHTML = total;
}

function agregaArticulo2(){
    articulosCarrito.push(nameArticulo2);
    console.log("Articulo Agregado");
    console.log(articulosCarrito);
    total += priceArticulo2;
    console.log(total);

    var table = document.getElementById('table-body');
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Picture";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = nameArticulo2;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = priceArticulo2;

    var cell4 = row.insertCell(3);
    cell4.innerHTML = "Quantity";

    cartTotal.innerHTML = total;
}

function agregaArticulo3(){
    articulosCarrito.push(nameArticulo3);
    console.log("Articulo Agregado");
    console.log(articulosCarrito);
    total += priceArticulo3;
    console.log(total);

    var table = document.getElementById('table-body');
    var row = table.insertRow(2);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Picture";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = nameArticulo3;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = priceArticulo3;

    var cell4 = row.insertCell(3);
    cell4.innerHTML = "Quantity";

    cartTotal.innerHTML = total;
}



//Open cart
function openCart(){
    cart.classList.add('activo')
}
//Close Cart
function closecart() {
    cart.classList.remove('activo')
}

