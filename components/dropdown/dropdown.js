class DropdownComponent extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('./components/dropdown/dropdown.html');
        const html = await response.text();

        this.innerHTML = html;
    }
}

customElements.define('dropdown-component', DropdownComponent);