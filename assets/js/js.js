let numAncho = 16;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

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
        cuadrado.addEventListener('mousedown', cambiarColor)
        cuadrado.addEventListener('mouseover', cambiarColor)
    }
}

// Seleccionar color
var color = document.querySelector(".color");
var colorPredeterminado = "#000000";
color.value = colorPredeterminado;
var cuadrados = document.querySelectorAll('.cuadrado'); // seleccionar todos los cuadrados

function cambiarColor(event) {
    if (!mouseDown) return;
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
btnArcoiris.addEventListener("click", (event) => {
    color.value = getRandomColor();
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
