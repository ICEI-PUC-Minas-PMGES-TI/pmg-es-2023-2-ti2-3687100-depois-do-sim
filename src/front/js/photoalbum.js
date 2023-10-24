document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";
    const weddingId = 1;

    const imagesContainer = document.getElementById("imagesContainer");

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
    function show(images) {
        imagesContainer.innerHTML = '';

        for (let image of images) {
            const card = document.createElement("div");
            card.classList.add("card-wrapper", "col-3");

            card.innerHTML = `
                <div class="image-card">
                    <div class="btn-delete-wrapper"><button type="button" class="btn-deletar card-delete-button" data-imageId="${image.id}">&times;</button></div>
                    <img src="${image.image}" class="card-img-top">
                </div>
            `;

            imagesContainer.appendChild(card);
        }
    }

    // Função para adicionar um presente
    async function addImage() { 
        const image = document.getElementById("image").value; 

        const imageData = {
            "image": image,
            "wedding": {
                "id": weddingId
            }
        };

        try {
            const response = await fetch(`${baseUrl}/image`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(imageData)
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar imagem.");
            }

            // Limpar campos do formulário após o sucesso
            document.getElementById("image").value = "";

            // Atualizar a tabela após adicionar o presente
            getAPI(`${baseUrl}/image/wedding/${weddingId}`);
        } catch (error) {
            console.error("Erro ao adicionar imagem:", error);
        }
    }

    // Evento de clique no botão de remover imagem
    imagesContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-deletar")) {
            const imageId = event.target.getAttribute("data-imageId");
            if (imageId) {
                if (confirm("Tem certeza de que deseja remover esta imagem?")) {
                    removeImage(imageId);
                }
            }
        }
    });

    // Função para remover um presente
    async function removeImage(imageId) {
        try {//conferir o caminho do fetch
            const response = await fetch(`${baseUrl}/image/${imageId}`, {
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


    getAPI(`${baseUrl}/image/wedding/${weddingId}`);


    document.getElementById("imageForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Evento de clique no botão de adicionar presente
    document.getElementById("btn-create").addEventListener("click", addGift);

});
