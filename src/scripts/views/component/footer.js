class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <p>copyright &#169; 2022 - RESTO FINDER</p>
        </footer>
        `;
    }
}

customElements.define('footer-section', Footer);