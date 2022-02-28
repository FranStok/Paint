let colorActual="black";
function designarColor(color){
    const divs=document.querySelectorAll(".cuadrado");
    divs.forEach(element => {
        element.addEventListener("mouseover",function(e){
            element.style.backgroundColor=color;
            e.stopPropagation();
        });
    });
}
function crearGrid(color,N=16){
    const container=document.querySelector(".container");
    let topFila,fila;
    for (let i = 0; i < N; i++) {
        topFila=document.createElement("div");
        topFila.classList.add("topFila");
        for (let j = 0; j < N; j++) {
            fila=document.createElement("div");
            fila.classList.add("cuadrado", "fila");
            topFila.appendChild(fila);
        }
        container.appendChild(topFila);
    }
    designarColor(color);
}
crearGrid(colorActual);

const boton=document.querySelector(".dimension");
boton.addEventListener("input",function(e){
    let input=boton.value;
    if(input>64 || input<1){
        input=boton.value;
        alert("No se permiten numeros negativos ,0 ni mayores a 64. Ingrese nuevamente.");
    }else{
        let filas=document.querySelectorAll(".topFila");
        filas.forEach(element => {
            element.remove();
        });
        crearGrid(colorActual,input);
    }
})
const colorInput=document.querySelector(".color");
colorInput.addEventListener("input",function(e){
    colorActual=colorInput.value
    designarColor(colorActual);
})