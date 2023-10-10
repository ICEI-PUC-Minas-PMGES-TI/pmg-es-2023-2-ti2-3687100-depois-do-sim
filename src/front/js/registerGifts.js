document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";
    const weddingId = 1;

    const giftForm = document.getElementById("giftForm");
    const giftsTable = document.getElementById("gifts");

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
        let tableHTML = `<thead>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Preço</th>
                        </thead>
                        <tbody>`;

        for (let gift of gifts) {
            tableHTML += `<tr>
                            <td>${gift.id}</td>
                            <td>${gift.name}</td>
                            <td>${gift.description}</td>
                            <td>${gift.price}</td>
                        </tr>`;
        }

        tableHTML += `</tbody>`;
        giftsTable.innerHTML = tableHTML;
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

    getAPI(`${baseUrl}/gift/wedding/${weddingId}`);

    // Evento de envio do formulário
    document.getElementById("giftForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Evento de clique no botão de adicionar presente
    document.getElementById("btnCadastrar").addEventListener("click", addGift);
});


















// const url = "http://localhost:8080/wedding/{id";

// function show(gifts) {
//     let tab =   `<thead>
//                     <th scope="col">#</th>
//                     <th scope="col">Nome</th>
//                     <th scope="col">Descrição</th>
//                     <th scope="col">Preço</th>
//                 <thead/>`;

//     document.getElementById("gifts").innerHTML = tab;
//         tab =   `<tr>
//                     <td>${wedding.id}</td>
//                     <td>${wedding.name}</td>
//                 </tr>`;
//     }


// async function getAPI(url) {
//     const response = await fetch(url, {method: "GET"});

//     var data = await response.json();
//     if(response) {
//         show(data);
//     }
// }

// getAPI(url);






// const inputFile = document.querySelector("#picture__input");
// const pictureImage = document.querySelector(".picture__image");
// const pictureImageTxt = "Imagem do presente";
// pictureImage.innerHTML = pictureImageTxt;

// inputFile.addEventListener("change", function (e) {
//   const inputTarget = e.target;
//   const file = inputTarget.files[0];

//   if (file) {
//     const reader = new FileReader();

//     reader.addEventListener("load", function (e) {
//       const readerTarget = e.target;

//       const img = document.createElement("img");
//       img.src = readerTarget.result;
//       img.classList.add("picture__img");

//       pictureImage.innerHTML = "";
//       pictureImage.appendChild(img);
//     });

//     reader.readAsDataURL(file);
//   } else {
//     pictureImage.innerHTML = pictureImageTxt;
//   }
// });
