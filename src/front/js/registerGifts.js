document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";
    const weddingId = 1;

    const giftsContainer = document.getElementById("giftsContainer");


    // Função para buscar dados da API
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

    // Função para exibir os dados na tabela
    function show(gifts) {

        for (let gift of gifts) {
            const card = document.createElement("div");
            card.classList.add("gift-card", "col-3");

            card.innerHTML = `
                <img src="https://source.unsplash.com/random/?gifts" class="card-img-top">
                <div class="testeeee"
                    <h2 class="card-title" id="gift-title">${gift.name}</h2>
                    <p class="card-text" id="gift-description">${gift.description}</p>
                    <p class="card-text">Preço: R$${gift.price}</p>
                    <button type="submit" class="btn-presentear" id="btnPresentear">Presentear</button>
                </div>
            `;

            giftsContainer.appendChild(card);
        }
    }

    // Função para adicionar um presente
    async function addGift() {
        const name = document.getElementById("nome").value;
        const description = document.getElementById("descricao").value;
        const price = parseFloat(document.getElementById("preco").value);

        const giftData = {
            "name": name,
            "description": description,
            "price": price,
            "wedding": {
                "id": weddingId
            }
        };

        try {
            const response = await fetch(`${baseUrl}/gift`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(giftData)
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar presente.");
            }

            // Limpar campos do formulário após o sucesso
            document.getElementById("nome").value = "";
            document.getElementById("descricao").value = "";
            document.getElementById("preco").value = "";

            // Atualizar a tabela após adicionar o presente
            getAPI(`${baseUrl}/gift/wedding/${weddingId}`);
        } catch (error) {
            console.error("Erro ao adicionar presente:", error);
        }
    }

    async function deleteGift(giftId) {
        try {
            const response = await fetch(`${baseUrl}/gift/${giftId}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                throw new Error("Erro ao excluir presente.");
            }

            // Atualizar a tabela após a exclusão bem-sucedida
            getAPI(`${baseUrl}/gift/wedding/${weddingId}`);
        } catch (error) {
            console.error("Erro ao excluir presente:", error);
        }
    }

    getAPI(`${baseUrl}/gift/wedding/${weddingId}`);

    // Evento de envio do formulário
    document.getElementById("giftForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Evento de clique no botão de adicionar presente
    document.getElementById("btnCreate").addEventListener("click", addGift);
    // document.getElementById("btnDelete").addEventListener("click", deleteGift());

});
