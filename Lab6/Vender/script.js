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
var priceArticulo3 = parseInt(document.getElementById('price3').innerHTML);

var iva = document.getElementById('total-iva');
var totalCarrito = document.getElementById('cart-total');

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

function updateQuantity1(){
    var cantidad = document.getElementById('product-quantity1');
    var valueCantidad = cantidad.options[cantidad.selectedIndex];
    console.log(valueCantidad.value);

    return valueCantidad.value;
}

function updateQuantity2(){
    var cantidad = document.getElementById('product-quantity2');
    var valueCantidad = cantidad.options[cantidad.selectedIndex];
    console.log(valueCantidad.value);

    return valueCantidad.value;
}

function updateQuantity3(){
    var cantidad = document.getElementById('product-quantity3');
    var valueCantidad = cantidad.options[cantidad.selectedIndex];
    console.log(valueCantidad.value);

    return valueCantidad.value;
}

function agregaArticulo1(){
    articulosCarrito.push(nameArticulo1);
    console.log("Articulo Agregado");
    console.log(articulosCarrito);

    var cantidad = updateQuantity1();

    var table = document.getElementById('table-body');
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Picture";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = nameArticulo1;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = priceArticulo1;

    var cell4 = row.insertCell(3);
    cell4.innerHTML = cantidad;

    var precio = priceArticulo1 * cantidad;
    total += precio;
    console.log("total: " + total);

    cartTotal.innerHTML = total;

    let ivaCompra = total * 0.16;

    iva.innerHTML = ivaCompra;

    totalCarrito.innerHTML = total + ivaCompra;
}

function agregaArticulo2(){
    articulosCarrito.push(nameArticulo2);
    console.log("Articulo Agregado");
    console.log(articulosCarrito);

    var cantidad = updateQuantity2();

    var table = document.getElementById('table-body');
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Picture";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = nameArticulo2;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = priceArticulo2;

    var cell4 = row.insertCell(3);
    cell4.innerHTML = cantidad;

    var precio = priceArticulo2 * cantidad;
    total += precio;
    console.log("total: " + total);

    cartTotal.innerHTML = total;

    let ivaCompra = total * 0.16;

    iva.innerHTML = ivaCompra;

    totalCarrito.innerHTML = total + ivaCompra;
}

function agregaArticulo3(){
    articulosCarrito.push(nameArticulo3);
    console.log("Articulo Agregado");
    console.log(articulosCarrito);

    var cantidad= updateQuantity3();

    var table = document.getElementById('table-body');
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Picture";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = nameArticulo3;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = priceArticulo3;

    var cell4 = row.insertCell(3);
    cell4.innerHTML = cantidad;

    var precio = priceArticulo3 * cantidad;
    total += precio;
    console.log("total: " + total);

    cartTotal.innerHTML = total;

    let ivaCompra = total * 0.16;

    iva.innerHTML = ivaCompra;

    totalCarrito.innerHTML = total + ivaCompra;
}



//Open cart
function openCart(){
    cart.classList.add('activo')
}
//Close Cart
function closecart() {
    cart.classList.remove('activo')
}



var info = document.getElementById('questionIcon');
var appearInfo = document.getElementById('ivaPopUp');
info.addEventListener("mouseover", () => {
    appearInfo.classList.add("popUpInfo-active");
});
info.addEventListener("mouseout", () => {
    appearInfo.classList.remove("popUpInfo-active");
});
