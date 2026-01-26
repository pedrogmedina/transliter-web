class BannerComponent extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('/components/banner/banner.html');
        const html = await response.text();

        this.innerHTML = html;

        const title = this.getAttribute('data-title') || 'Banner title';
        const subtitle = this.getAttribute('data-subtitle') || 'Subtitle text goes here.';

        this.querySelector('#banner-title').textContent = title;
        this.querySelector('#banner-subtitle').textContent = subtitle;
    }


}

customElements.define('banner-component', BannerComponent);