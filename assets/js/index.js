/* IMPLEMENTACION */

let precio = 400000;
let cantidad = 0;

// Botones
const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const valorTotal = document.querySelector('.valor-total');
const cantidadSpan = document.querySelector('.cantidad');

// Elementos
const precioSpan = document.querySelector('.precio-inicial');
precioSpan.innerHTML = precio;

// Eventos

btnPlus.addEventListener('click', (e) => {
  calcularCantidad( ++cantidad );
});

btnMinus.addEventListener('click', (e) => {
  if (cantidad == 0) return;
  calcularCantidad( --cantidad );
});

// Calculos
function calcularCantidad(cantidad) {
  cantidadSpan.innerHTML = cantidad;
  valorTotal.innerText = precio * cantidad;
}