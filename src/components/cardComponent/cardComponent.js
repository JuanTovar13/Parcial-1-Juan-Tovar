class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        

        this.shadowRoot.innerHTML = `
        <div class="cardcomponent">
            <p class"destino">${destino} </p>
            <p class"duracion">${duracion} </p>
            <p class"costo">${costo} </p>
            <p class"descripcion">${descripcion} </p>
            <p class"activiades">${actividades} </p>
            <p class"reservado">${reservado} </p>
            <p class"imagen">${imagen} </p>
            <p class"alojamiento">${alojamiento} </p>
            <p class"disponibilidad">${disponibilidad} </p>
        
        </div>
        `
    }
}
export default CardComponent;