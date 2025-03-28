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
        <div class="cardComponent">
            
        
        </div>
        `

export default CardComponent;