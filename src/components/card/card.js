function loadCards() {
    
    

    items.forEach(item => {
        const card = document.createElement("card-component");
        card.setAttribute("destino", item.destino),
        card.setAttribute("duracion", item.duracion)
        card.setAttribute("costo", item.costo)
        card.setAttribute("descripcion", item.descripcion)
        card.setAttribute("actividades", item.actividades)
        card.setAttribute("reservado", item.reservado)
        card.setAttribute("imagen", item.imagen)
        card.setAttribute("calificacion", item.calificacion)
        card.setAttribute("alojamiento", item.alojamiento)
        card.setAttribute("guia_incluido", item.guia_incluido)
    });
   console.log("hola")
}
console.log("hola")