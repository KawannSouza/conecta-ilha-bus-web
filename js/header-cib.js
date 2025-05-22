class HeaderCib extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const label = this.getAttribute("label");
        const href = this.getAttribute("href");

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
                
                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                
                i {
                    font-size: 2rem;
                    color: #212529;
                }

                div {
                    width: 30%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                }

                a {
                    color: #212529;
                    text-decoration: none;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                a:hover {
                    padding-right: 1rem;
                    color: #94ff00;
                }

                #logout {
                    font-weight: 700;
                    cursor: pointer;
                    font-size: 12pt;
                    background: #94ff00;
                    padding: 1rem 2rem;
                    border-radius: 0.6rem;
                    transition: all 0.3s ease;
                }

                #logout:hover {
                    padding: 1rem 3rem;
                    background: #212529;
                    color: #94ff00;
                }
            </style>
            <header>
                <button onclick="window.location.href='/index.html'"><i class="fa-solid fa-bus"></i></button>
                <div>
                    <a href="/pages/inicial.html">Inicial</a>
                    <a href="/pages/lines.html">Linhas</a>
                    <a href="/pages/feedback.html">Avaliar</a>
                    <button id="logout" onclick="logout()">${label}</button>
                </div>
            </header>
        `
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "/index.html";
}

customElements.define("header-cib", HeaderCib);