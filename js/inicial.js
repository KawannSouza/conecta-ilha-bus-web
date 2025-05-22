const url = "https://conecta-ilha-bus-api.onrender.com";

const feedbackCard = document.getElementById("feedbacks-cards");

try {
    axios.get(`${url}/linhas/feedbacks`)
        .then(response => {
            const feedbacks = response.data;
            console.log(feedbacks);

            html = "";

            feedbacks.forEach(feedback => {
            html += `
                <style>
                    #feedback {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background: #94ff00;
                        margin: 2rem;
                        padding: 2rem;
                        border-radius: 0.8rem;
                        width: 80%;
                        box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.005),
                                        0 0 50px rgba(0, 0, 0, 0.2);
                    }

                    #avaliacoes {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #avaliacoes > section {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 2rem;
                    }

                    #avaliacoes > section > p {
                        background: #212529;
                        padding: 1rem;
                        border-radius: 0.4rem;
                        color: #fff;
                        width: 150px;
                        font-size: 10pt;
                        font-weight: 600;
                    }

                    #comment {
                        background: #fff;
                        width: 70%;
                        padding: 1rem;
                        border-radius: 0.4rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                </style>
                <div id="feedback">
                    <div id="avaliacoes">
                        <p>${feedback.username}</p>
                        <p>Linha: ${feedback.lineName}</p>
                        <section>
                            <p>Frequência: ${feedback.frequencia}</p>
                            <p>Pontualidade: ${feedback.pontualidade}</p>
                            <p>Lotação: ${feedback.lotacao}</p>
                        </section>
                        <section>
                            <p>Conservação: ${feedback.conservacao}</p>
                            <p>Educação: ${feedback.educacao}</p>
                            <p>Acessibilidade: ${feedback.acessibilidade}</p>
                        </section>
                        <section>
                            <p>Sinalização: ${feedback.sinalizacao}</p>
                            <p>Preparo: ${feedback.preparo}</p>
                            <p>Ambiente: ${feedback.ambiente}</p>
                        </section>
                    </div>
                    <p id="comment">" ${feedback.comentario}</p> 
                </div>  
                `;
            })

            feedbackCard.innerHTML = html;
        })    
} catch (error) {
    console.log(error)
}