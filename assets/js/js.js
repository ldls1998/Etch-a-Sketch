let numAncho = 16;

// Dibujar cuadrados
var grid = document.querySelector('.grid');
for (let i = 0; i < numAncho; i++) {
    fila = document.createElement('div');
    fila.classList.add('fila');
    grid.appendChild(fila);
    for (let j = 0; j < numAncho; j++) {
        var cuadrado = document.createElement("div");
        cuadrado.classList.add('cuadrado');
        fila.appendChild(cuadrado);
    }
}

// Seleccionar color
var color = document.querySelector(".color");
var colorPredeterminado = "#000000";

window.addEventListener("load", startup, false);

function startup() { // evento que se ejecuta cuando se carga la pagina
    color.addEventListener("change", watchColorPicker);
    color.value = colorPredeterminado;
}

var cuadrados = document.querySelectorAll('.cuadrado'); // seleccionar todos los cuadrados

function watchColorPicker(event) { // evento que se ejecuta cuando cambia el color
    console.log(event.target.value)
    cuadrados.forEach(cuadrado => {
        cuadrado.addEventListener('mouseover', cambiarColor)
    });
}

function cambiarColor(event) { 
    event.target.style.backgroundColor = color.value;
}

// Limpiar cuadrados
var btnLimpiar = document.querySelector("#limpiarBtn");
btnLimpiar.addEventListener("click", limpiar);

function limpiar(event) {
    cuadrados.forEach(cuadrado => {
        cuadrado.style.backgroundColor = "white";
    })
}

// Botón borrador
var btnBorrador = document.querySelector("#borradorBtn");
btnBorrador.addEventListener("click", (event) => {
    color.value = "#ffffff";
});

// Botón Arcoiris
var btnArcoiris = document.querySelector("#arcoirisBtn");

