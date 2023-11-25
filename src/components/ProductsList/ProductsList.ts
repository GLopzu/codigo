import { addObserver, appState } from "../../store";


class ProductList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = "";
        appState.products.forEach((p)=>{
            const pContainer = this.ownerDocument.createElement('article');
            const pTitle = this.ownerDocument.createElement('h3');
            pTitle.textContent = p.name;
            const prTitle = this.ownerDocument.createElement('h3');
            prTitle.textContent = p.price;

            pContainer?.appendChild(pTitle);
            pContainer?.appendChild(prTitle);
            this.shadowRoot?.appendChild(pContainer);

        });
    }
}

customElements.define('products-list', ProductList)


export default ProductList;