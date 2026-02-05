class HeadLinks extends HTMLElement {
    async connectedCallback() {
        try {
            const response = await fetch('./components/headlinks/headlinks.html');
            const html = await response.text();

            const template = document.createElement('template');
            template.innerHTML = html;

            const content = template.content;
            const headEl = content.querySelector('head');

            if (headEl) {
                while (headEl.firstChild) {
                    document.head.appendChild(headEl.firstChild);
                }
            } else {
                while (content.firstChild) {
                    document.head.appendChild(content.firstChild);
                }
            }

            this.remove();
        } catch (err) {
            console.error('Error loading headlinks:', err);
        }
    }
}

customElements.define('head-links', HeadLinks);