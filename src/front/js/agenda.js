document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";
    const userId = 1;

    const sendInviteButton = document.getElementById("btn-send-invite");
    const convidadosList = document.getElementById("guest-table");

    // Função para buscar dados da API
    async function getAPI(url) {
        try {
            const response = await fetch(url, { method: "GET" });

            if (!response.ok) {
                throw new Error("Erro ao buscar dados da API.");
            }

            const data = await response.json();
            show(data);
            console.log(data);

        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    // async function postAPI(url) {
    //     try {
    //         const response = await fetch(url, {method: "POST"});

    //         if (!response.ok) {
    //             throw new Error("Erro ao enviar convites.");
    //         } else {
    //             alert("Convites enviados com sucesso!");
    //         }
    //     } catch (error) {
    //         alert(error);
    //     }
    // }

    getAPI(`${baseUrl}/task/user/${userId}`);

    // Função para criar elementos HTML
    async function show(tasks) {
        let tab = `<thead>
                        <th scope="col">#</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Data</th>
                        <th scope="col">Horário</th>
                        <th scope="col">Fornecedor</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ação</th>
                    </thead>
                    <tbody>`;

        for(let task of tasks) {
            const date = new Date(task.date);
            const formattedDate = date.toLocaleDateString();

            const statusText = task.status ? "Feito" : "Pendente";


            tab += `<tr>
                    <td>${task.id}</td>
                    <td>${task.description}</td>
                    <td>${formattedDate}</td>
                    <td>${task.time.slice(0, 5)}</td>
                    <td>Davi Salgadinhos</td>
                    <td>${statusText}</td>
                    <td><button type="button" class="btn btn-danger btn-remove" data-taskid="${task.id}">Excluir</button></td>
                </tr>`;

            tab += `</tbody>`;
            
            }

        document.getElementById("task-list").innerHTML = tab;

    }

    // sendInviteButton.addEventListener("click", (event) => {
    //     postAPI(`${baseUrl}/guest/wedding/${weddingId}/invite`);
    // })

    // Evento para remover convidado
    // convidadosList.addEventListener("click", (event) => {
    //     if (event.target.classList.contains("btn-remove")) {
    //         const guestId = event.target.getAttribute("data-guestid");
    //         if (confirm("Deseja realmente excluir este convidado?"))
    //             removeGuest(guestId);
    //     }
    // });

    // Função para remover convidado
    // async function removeGuest(guestId) {
    //     try {
    //         const response = await fetch(`${baseUrl}/guest/${guestId}`, {
    //             method: "DELETE"
    //         });
    
    //         if (!response.ok) {
    //             throw new Error("Erro ao remover o convidado.");
    //         }
    
    //         // Atualizar a tabela após remover o presente
    //         getAPI(`${baseUrl}/guest/wedding/${weddingId}`);
    //     } catch (error) {
    //         console.error("Erro ao remover o convidado:", error);
    //     }
    // }

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("task-form");
        const submitButton = document.getElementById("submit-button");

        form.addEventListener("input", function() {
            // Verifique se todos os campos obrigatórios estão preenchidos
            const date = document.getElementById("date");
            const time = document.getElementById("time");
            const info = document.getElementById("info");

            if (date.value.trim() !== "" && time.value.trim() !== "" && info.value.trim() !== "") {
                submitButton.removeAttribute("disabled");
            } else {
                submitButton.setAttribute("disabled", "disabled");
            }
        }
    )}
    );
    
});