class InsideLink extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open" })
        this.anchor = document.createElement('a')
        this.anchor.setAttribute('href', '#');
        const slot = document.createElement('slot')
        this.anchor.appendChild(slot)
        shadow.appendChild(this.anchor)
    }

    _handleProps(){
        const href = this.getAttribute('href');

        if (href !== null) {
            this.anchor.setAttribute('href', href);
        }
    }

    _handleClick(){
        this.anchor.addEventListener('click', event=>{
            event.preventDefault()
            const newRoute = this.anchor.getAttribute('href');
            history.pushState(null, '', newRoute);
            const customEvent = new CustomEvent('historialCambiado', {
                detail: {
                    newRoute
                }
            });
            window.dispatchEvent(customEvent)
        })
    }

    connectedCallback() {
        this._handleProps()
        this._handleClick()
    }
}

window.customElements.define('inside-link', InsideLink)