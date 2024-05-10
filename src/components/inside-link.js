class InsideLink extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open" })
        this.anchor = document.createElement('a')
        this.anchor.setAttribute('href', '#');
        const slot = document.createElement('slot')
        this.anchor.appendChild(slot)
        this.anchor.style.all = 'unset'
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
            const customEvent = new CustomEvent('historyChange', {
                detail: {
                    newRoute
                }
            });
            window.dispatchEvent(customEvent)
        })
    }

    _handleActive(){
        const currentPath = window.location.pathname;
        const linkPath = new URL(this.anchor.href).pathname;
        if (currentPath === linkPath){
            this.classList.add('active');
        } else {
            this.classList.remove('active');
        }
    }

    connectedCallback() {
        this._handleProps()
        this._handleClick()
        this._handleActive()
        window.addEventListener('historyChange',()=> {
            this._handleActive()
        })
    }
}

window.customElements.define('inside-link', InsideLink)