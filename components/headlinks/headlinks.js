class HeadLinks extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('./components/headlinks/headlinks.html');
        const html = await response.text();
        this.innerHTML = html;

    }
}

customElements.define('head-links', HeadLinks);