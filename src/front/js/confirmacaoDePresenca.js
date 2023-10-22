document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";
    const weddingId = 1;

    // const convidadosList = document.getElementById("table");

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
                </tr>`;

            tab += `</tbody>`;
            
            }

        document.getElementById("guest-table").innerHTML = tab;

    }

});
