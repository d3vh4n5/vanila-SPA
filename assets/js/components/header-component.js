class HeaderComponent extends HTMLElement{
    constructor(){
        super()
        fetch('assets/js/components/templates/header.html')
        .then(resp => resp.text())
        .then(html => {
            this.innerHTML = html
        })
    }
}

customElements.define('header-component', HeaderComponent);