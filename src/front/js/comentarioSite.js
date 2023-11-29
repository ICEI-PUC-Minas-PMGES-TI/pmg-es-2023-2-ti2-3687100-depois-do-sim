document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";

    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("Authorization");

    // Função para buscar dados da API
    async function getAPI(url) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar dados da API.");
            }

            const data = await response.json();
            console.log(data);
            show(data);
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    getAPI(`${baseUrl}/comment/all`);

    // Função para criar elementos HTML
    async function show(comments) {
        let tab = `<thead>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Avaliação</th>
                    </thead>
                    <tbody>`;

        for (let comment of comments) {
            tab += `<tr>
                        <td>${comment.id}</td>
                        <td>${comment.user}</td>
                        <td>${comment.rating}</td>
                        <td>${comment.description}</td>
                    </tr>`;

            tab += `</tbody>`;
        }

        document.getElementById("comment-table").innerHTML = tab;

    }


    var ratingSelected = 0
    const rating = document.querySelectorAll(".rating");
    rating.forEach((star) => {
        star.addEventListener("click", (event) => {
            ratingSelected = event.target.getAttribute("value");
            console.log(ratingSelected);
        });
    });


    // Função para adicionar um feedback
    async function addFeedback() {
        const description = document.getElementById("description").value;


        const commentData = {
            "description": description,
            "rating": ratingSelected,
            "user": {
                "id": userId
            },
        }

        try {
            const response = await fetch(`${baseUrl}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify(commentData)
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar comentario.");
            }

            // Limpar campos do formulário após o sucesso
            // document.getElementById("rating").value = "";
            // document.getElementById("description").value = "";

        } catch (error) {
            console.error("Erro ao adicionar feedback:", error);
        }
    }

    document.getElementById("formComentario").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    document.getElementById("btn-send-feedback").addEventListener("click", function () {
        addFeedback()
        alert("Feedback enviado com sucesso!");
    });

});

