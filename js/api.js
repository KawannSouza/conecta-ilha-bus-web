const url = "https://conecta-ilha-bus-api.onrender.com";
let map;

const lines = document.getElementById("lines");

axios.get(`${url}/linhas/`)
    .then(response => {
        const linhas = response.data;

        let html = "";

        linhas.forEach(line => {
            html += `
                <div id="line-card">
                    <strong>${line.name}</strong>
                    <button id="see-map-btn" onclick="verMapa('${line.code}')">Ver no mapa</button>
                    <div class="mapa" id="map-${line.code}"></div>
                </div>
            `;
        });

        lines.innerHTML = html;
    })
    .catch(error => {
        console.error("Erro ao buscar as linhas:", error);
    });

function verMapa(code) {
    const mapElement = document.getElementById(`map-${code}`);
    mapElement.style.display = "flex";

    axios.get(`${url}/linhas/${code}`)
        .then(response => {
            const line = response.data;

            console.log(line.route)

            const rotas = line.route.map(route => {
                const [lat, lng] = route.split(",").map(Number);
                return [lat, lng]
            });

            console.log(rotas)

            setTimeout(() => {
                const mapInstance = L.map(mapElement).setView([-2.53073, -44.3068], 50);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(mapInstance);

                L.polyline(rotas, { color: 'blue' }).addTo(mapInstance);

                L.marker(rotas[0])
                    .addTo(mapInstance)
                    .bindPopup("Início")
                    .openPopup();

                mapInstance.fitBounds(rotas);
                mapInstance.invalidateSize();
            }, 100)
        })
}

let lineName = "";

let lineList = [];

    let select = document.getElementById("select-line");
    axios.get(`${url}/linhas/`)
        .then(response => {
            const lines = response.data;
            lineList = response.data;

            console.log(lines)

            let html = ""

            lines.forEach(line => {
            html += `
                <option value="${line.id}">${line.name}</option>
            `;
        });
        select.innerHTML = html;

        if (lineList.length > 0) {
            lineName = lineList[0].name;
        }
    });

async function submitFeedback() {
    const selectedLine = document.querySelector("select").value;

    console.log(lineName)

    const formData = {
        username: localStorage.getItem("name"),
        lineName: lineName,
        frequencia: parseInt(document.querySelector("input[name='frequencia']:checked")?.value) || null,
        pontualidade: parseInt(document.querySelector("input[name='pontualidade']:checked")?.value) || null,
        lotacao: parseInt(document.querySelector("input[name='lotacao']:checked")?.value) || null,
        conservacao: parseInt(document.querySelector("input[name='conservacao']:checked")?.value) || null,
        educacao: parseInt(document.querySelector("input[name='educacao']:checked")?.value) || null,
        acessibilidade: parseInt(document.querySelector("input[name='rampa']:checked")?.value) || null,
        sinalizacao: parseInt(document.querySelector("input[name='sinalizacao']:checked")?.value) || null,
        preparo: parseInt(document.querySelector("input[name='preparo']:checked")?.value) || null,
        ambiente: parseInt(document.querySelector("input[name='ambiente']:checked")?.value) || null,
        comentario: document.getElementById("comments").value
    };

    console.log("Enviando:", formData);

    try {
        const response = await axios.post(`${url}/linhas/feedback/${selectedLine}`, formData);
        console.log("Resposta da API:", response.data);
        alert("Feedback enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar feedback:", error);
        alert("Erro ao enviar feedback. Tente novamente.");
    }
}

select.addEventListener("change", (e) => {
    const selectedId = e.target.value;
    const selectedLine = lineList.find(line => line.id == selectedId);
    if (selectedLine) {
        lineName = selectedLine.name;
    }
});
