const template = `
<header>
    <h1>Logo</h1>
    <nav>
        <ul>
            <li>
                <inside-link href="/" class="link">
                    Home
                </inside-link>
            </li>
            <li>
                <inside-link href="/about" class="link">
                    About
                </inside-link>
            </li>
            <li>
                <inside-link href="/contact" class="link">
                    Contact
                </inside-link>
            </li>
        </ul>
    </nav>
</header>
`

class HeaderComponent extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = template
    }
}

customElements.define('header-component', HeaderComponent);