let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
let cantidadElem = document.querySelector(".cantidad");
let totalElem = document.querySelector(".valor-total");


precioSpan.innerHTML = precio;

document.addEventListener("click", function (event) {
    if (event.target.id === "btn-incrementa" || event.target.id === "btn-decrementa") {
        let cantidad = Number(cantidadElem.innerHTML);
        totalElem.innerHTML = (cantidad * precio);
    }
});