document.addEventListener("DOMContentLoaded", () => {
    const url = "http://localhost:8080/gift/wedding/1";

    const giftForm = document.getElementById("giftForm");
    const giftsList = document.getElementById("giftsList");

    // Função para adicionar um presente
    async function addGift() {
        const name = document.getElementById("nome").value;
        console.log(name)
        const description = document.getElementById("descricao").value;
        const price = parseFloat(document.getElementById("preco").value);

        const giftData = {
            "name": name,
            "description": description,
            "price": price,
            "wedding": {
                "id": 1
            }
        };

        try {
            const response = await fetch("http://localhost:8080/gift", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(giftData)
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar presente.");
            }

            // Limpar o formulário após adicionar com sucesso
            // giftForm.reset();

            // // Atualizar a lista de presentes
            // updateGiftsList();
        } catch (error) {
            console.error("Erro ao adicionar presente:", error);
        }
    }

    // Função para atualizar a lista de presentes
    async function updateGiftsList() {
        const response = await fetch("http://localhost:8080/gift", { method: "GET" });

        if (!response.ok) {
            console.error("Erro ao buscar presentes.");
            return;
        }

        const gifts = await response.json();
        displayGifts(gifts);
    }

    async function show(gifts) {
        let tab = `<thead>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                    </thead>
                    <tbody>`;

        for (let gift of gifts) {
            tab += `<tr>
                        <td>${gift.id}</td>
                        <td>${gift.name}</td>
                        <td>${gift.description}</td>
                        <td>${gift.price}</td>
                    </tr>`;
        }

        tab += `</tbody>`;
        document.getElementById("gifts").innerHTML = tab;
    }

    async function getAPI(url) {
        try {
            const response = await fetch(url, { method: "GET" });

            if (!response.ok) {
                throw new Error("Erro ao buscar dados da API.");
            }

            const data = await response.json();
            show(data);
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    getAPI(url);

    // Evento de envio do formulário
    document.getElementById("giftForm").addEventListener("submit", function (event) {
        event.preventDefault();

        addGift();
    });
});