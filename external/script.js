function crearGrid(){
    const container=document.querySelector(".container");
    let topFila,fila;
    for (let i = 0; i < 16; i++) {
        topFila=document.createElement("div");
        topFila.classList.add("topFila");
        for (let j = 0; j < 16; j++) {
            fila=document.createElement("div");
            fila.classList.add("fila");
            topFila.appendChild(fila);
        }
        container.appendChild(topFila);
    }
}
crearGrid();