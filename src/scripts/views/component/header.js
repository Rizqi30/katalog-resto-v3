class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header class="app-bar">
            <div class="app-bar__menu">
                <button id="hamburgerButton">☰</button>
            </div>
            <div class="app-bar__brand">
                <h1>Resto Finder</h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li>
                        <a
                        href="https://www.linkedin.com/in/rizqi-akbar-159994262/"
                        target="_blank"
                        >About Us</a
                        >
                    </li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('header-section', Header);