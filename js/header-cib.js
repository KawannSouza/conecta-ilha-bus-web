class HeaderCib extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const label = this.getAttribute("label");

        shadow.innerHTML = `
            <link 
                rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
                integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
                crossorigin="anonymous" referrerpolicy="no-referrer" 
            />
            <style>
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                }
                
                i {
                    font-size: 2rem;
                }
            </style>
            <header>
                <i class="fa-solid fa-bus"></i>
                <button id="header-action-btn">${label}</button>
            </header>
        `
    }
}

customElements.define("header-cib", HeaderCib);