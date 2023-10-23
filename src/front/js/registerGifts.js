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
        giftsContainer.innerHTML = '';

        for (let gift of gifts) {
            const card = document.createElement("div");
            card.classList.add("card-wrapper", "col-3");

            card.innerHTML = `
                <div class="gift-card">
                    <div class="btn-delete-wrapper"><button type="button" class="btn-deletar card-delete-button" data-giftid="${gift.id}">&times;</button></div>
                    ${!gift.available ? '<div class="already-gifted">Já presenteado</div>' : ''}
                    <img src="${gift.image}" class="card-img-top">
                </div>
                <div class="card-body">
                    <h2 class="card-title" id="gift-title">${gift.name}</h2>
                    <p class="card-text" id="gift-description">${gift.description}</p>
                    <p class="card-price">R$${gift.price}</p>
                    <button type="submit" class="btn-presentear" data-bs-toggle="modal" data-bs-target="#giftMessageModal" data-giftid="${gift.id}" id="btnPresentear"><i class="bi bi-bag"></i>Presentear</button>
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
        const image = document.getElementById("image").value; 

        const giftData = {
            "name": name,
            "description": description,
            "price": price,
            "image": image,
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
            document.getElementById("image").value = "";

            // Atualizar a tabela após adicionar o presente
            getAPI(`${baseUrl}/gift/wedding/${weddingId}`);
        } catch (error) {
            console.error("Erro ao adicionar presente:", error);
        }
    }

    // Evento de clique no botão de remover presente
    giftsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-deletar")) {
            const giftId = event.target.getAttribute("data-giftid");
            if (giftId) {
                if (confirm("Tem certeza de que deseja remover este item?")) {
                    removeGift(giftId);
                }
            }
        }
    });

    // Função para remover um presente
    async function removeGift(giftId) {
        try {//conferir o caminho do fetch
            const response = await fetch(`${baseUrl}/gift/${giftId}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                throw new Error("Erro ao remover o presente.");
            }

            // Atualizar a tabela após remover o presente
            getAPI(`${baseUrl}/giftt/wedding/${weddingId}`);
        } catch (error) {
            console.error("Erro ao remover o presente:", error);
        }
    }

    // Evento de clique no botão de presentear
    giftsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-presentear")) {
            const giftId = event.target.getAttribute("data-giftid");
            const testt = document.getElementById("btn-save-gift-message");
            testt.addEventListener("click", function (event) {
                presentGift(giftId);
        });
        }
    });

    // Função para presentear
    async function presentGift(giftId) {
        try {
            // Crie um objeto com os dados que você deseja atualizar
            const updateData = {
                "available": false
            };
    
            const response = await fetch(`${baseUrl}/gift/${giftId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateData) // Envie os dados de atualização
            });
    
            if (!response.ok) {
                throw new Error("Erro ao presentear o presente.");
            }
    
            // Atualize a tabela após presentear o presente
            getAPI(`${baseUrl}/gift/wedding/${weddingId}`);
        } catch (error) {
            console.error("Erro ao presentear o presente:", error);
        }
    }

    getAPI(`${baseUrl}/gift/wedding/${weddingId}`);


    document.getElementById("giftForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Evento de clique no botão de adicionar presente
    document.getElementById("btn-create").addEventListener("click", addGift);


});
