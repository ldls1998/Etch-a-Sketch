let numAncho = 16;

var grid = document.querySelector('.grid');
for (let i = 0; i < numAncho; i++) {
    for (let j = 0; j < numAncho; j++) {
        var cuadrado = document.createElement("div");
        cuadrado.classList.add('cuadrado');
        grid.appendChild(cuadrado);
    }    
}
