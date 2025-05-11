document.getElementById("submit-btn").addEventListener("click", () => {
    const selectedLine = document.querySelector("select").value;

    const formData = {
        linha: selectedLine,
        frequencia: document.querySelector("input[name='frequencia']:checked")?.value || null,
        pontualidade: document.querySelector("input[name='pontualidade']:checked")?.value || null,
        lotacao: document.querySelector("input[name='lotacao']:checked")?.value || null,
        conservacao: document.querySelector("input[name='conservacao']:checked")?.value || null,
        educacao: document.querySelector("input[name='educacao']:checked")?.value || null,
        rampa: document.querySelector("input[name='rampa']:checked")?.value || null,
        sinalizacao: document.querySelector("input[name='sinalizacao']:checked")?.value || null,
        preparo: document.querySelector("input[name='preparo']:checked")?.value || null,
        ambiente: document.querySelector("input[name='ambiente']:checked")?.value || null,
        comentario: document.getElementById("comments").value
    };

    console.log(formData);
})