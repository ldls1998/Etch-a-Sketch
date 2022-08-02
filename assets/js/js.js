let gridSize = 16;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
arcoiris = false;

// Dibujar cuadrados
var grid = document.querySelector('.grid');
document.addEventListener("DOMContentLoaded", gridLoad);
function gridLoad() {
    for (let i = 0; i < gridSize; i++) {
        fila = document.createElement('div');
        fila.classList.add('fila');
        grid.appendChild(fila);
        for (let j = 0; j < gridSize; j++) {
            var cuadrado = document.createElement("div");
            cuadrado.classList.add('cuadrado');
            cuadrado.addEventListener('mousedown', cambiarColor)
            cuadrado.addEventListener('mouseover', cambiarColor)
            fila.appendChild(cuadrado);
        }
    }
}

function limpiarGrid() {
    var node = document.querySelector('.grid');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

// Seleccionar color
var color = document.querySelector(".color");
var colorPredeterminado = "#000000";
color.value = colorPredeterminado;
var cuadrados = document.querySelectorAll('.cuadrado'); // seleccionar todos los cuadrados

color.addEventListener('change', () => {
    colorPredeterminado = color.value;
    arcoiris = false;
})

function cambiarColor(event) {
    if (!mouseDown) return;
    if (arcoiris) {
        colorRandom = getRandomColor();
        event.target.style.backgroundColor = colorRandom;
    }
    else {
        arcoiris = false;
        event.target.style.backgroundColor = color.value;
    }
}

// Limpiar cuadrados
var btnLimpiar = document.querySelector("#limpiarBtn");
btnLimpiar.addEventListener("click", limpiar);

function limpiar(event) {
    var cuadrados = document.querySelectorAll('.cuadrado'); 
    cuadrados.forEach(cuadrado => {
        cuadrado.style.backgroundColor = "white";
    })
}

// Botón borrador
var btnBorrador = document.querySelector("#borradorBtn");
btnBorrador.addEventListener("click", (event) => {
    arcoiris = false;
    color.value = "#ffffff";
});

// Botón Arcoiris
var btnArcoiris = document.querySelector("#arcoirisBtn");
btnArcoiris.addEventListener("click", (event) => {
    arcoiris = true;
})

function getRandomColor() { // Generar color aleatorio
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var sliderGridSize = document.getElementById("myRange");
sliderGridSize.addEventListener("input", (event) => {
    gridSize = sliderGridSize.value;
    document.querySelector(".grid-size").textContent = gridSize + " x " + gridSize;
    limpiarGrid();
    gridLoad();
})