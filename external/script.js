function crearGrid(N=16){
    const container=document.querySelector(".container");
    let topFila,fila;
    for (let i = 0; i < N; i++) {
        topFila=document.createElement("div");
        topFila.classList.add("cuadrado", "topFila");
        for (let j = 0; j < N; j++) {
            fila=document.createElement("div");
            fila.classList.add("cuadrado", "fila");
            topFila.appendChild(fila);
        }
        container.appendChild(topFila);
    }
    const divs=document.querySelectorAll(".cuadrado");
    divs.forEach(element => {
    element.addEventListener("mouseover",function(e){
        element.style.backgroundColor="blue";
        e.stopPropagation();
    });
});
}
crearGrid();

const boton=document.querySelector(".boton");
boton.addEventListener("click",function(e){
    let input=document.querySelector(".dimension").value;
    if(input>64 || input<1){
        input=document.querySelector(".dimension").value;
        alert("No se permiten numeros negativos ,0 ni mayores a 64. Ingrese nuevamente.");
    }else{
        let filas=document.querySelectorAll(".topFila");
        filas.forEach(element => {
            element.remove();
        });
        crearGrid(input);
    }
})