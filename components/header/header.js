
class HeaderComponent extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('./components/header/header.html');
        const html = await response.text();

        this.innerHTML = html;

        this.setActiveLink();
    }

    setActiveLink() {
        const links = this.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

}

customElements.define('header-component', HeaderComponent);
