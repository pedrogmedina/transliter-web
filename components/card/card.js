
class CardComponent extends HTMLElement {
    async connectedCallback() {
        const userContent = this.innerHTML;
        
        const response = await fetch('./components/card/card.html');
        const html = await response.text();

        const templateWrapper = document.createElement('div');
        templateWrapper.innerHTML = html;

        const template = templateWrapper.querySelector('#card-template');

        const content = template.content.cloneNode(true);

        this.innerHTML = '';

        this.appendChild(content);

        const slotContainer = this.querySelector('.card-slot');
        if (slotContainer) {
            slotContainer.innerHTML = userContent;
        }
    }
}

customElements.define('card-component', CardComponent);