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

async function addGuest() {
    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const num_people = parseInt(document.getElementById("qtdPessoas").value); 
    const name_people = document.getElementById("nomesPessoas").value;  
    

    const guestData = {

        "name": name,
        "email": email,
        "num_people": num_people,
        "name_people": name_people,
        "wedding": {
            "id": weddingId,
        }
    };

    try {
        const response = await fetch(`${baseUrl}/guest`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(guestData)
        });

        if (!response.ok) {
            throw new Error("Erro ao adicionar convidado.");
        }

        // Limpar campos do formulário após o sucesso
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("qtdPessoas").value = "";
        document.getElementById("nomesPessoas").value = "";

        // Atualizar a tabela após adicionar o presente
        getAPI(`${baseUrl}/guest/wedding/${weddingId}`);
    } catch (error) {
        console.error("Erro ao adicionar convidado:", error);
    }
}