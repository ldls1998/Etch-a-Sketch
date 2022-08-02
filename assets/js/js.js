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