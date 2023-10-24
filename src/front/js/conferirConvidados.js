document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";
    const weddingId = 1;

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

    getAPI(`${baseUrl}/guest/wedding/${weddingId}`);

    // Função para criar elementos HTML
    async function show(guests) {
        let tab = `<thead>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Nº de Pessoas</th>
                        <th scope="col">Ação</th>
                    </thead>
                    <tbody>`;

        for(let guest of guests) {
            tab += `<tr>
                    <td>${guest.id}</td>
                    <td>${guest.name}</td>
                    <td>${guest.email}</td>
                    <td>${guest.num_people}</td>
                    <td><button type="button" class="btn btn-danger btn-remove" data-guestid="${guest.id}">Excluir</button></td>
                </tr>`;

            tab += `</tbody>`;
            
            }

        document.getElementById("guest-table").innerHTML = tab;

    }

    // Evento para remover convidado
    convidadosList.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-remove")) {
            const guestId = event.target.getAttribute("data-guestid");
            if (confirm("Deseja realmente excluir este convidado?"))
                removeGuest(guestId);
        }
    });

    // Função para remover convidado
    async function removeGuest(guestId) {
        try {
            const response = await fetch(`${baseUrl}/guest/${guestId}`, {
                method: "DELETE"
            });
    
            if (!response.ok) {
                throw new Error("Erro ao remover o convidado.");
            }
    
            // Atualizar a tabela após remover o presente
            getAPI(`${baseUrl}/guest/wedding/${weddingId}`);
        } catch (error) {
            console.error("Erro ao remover o convidado:", error);
        }
    }
});
