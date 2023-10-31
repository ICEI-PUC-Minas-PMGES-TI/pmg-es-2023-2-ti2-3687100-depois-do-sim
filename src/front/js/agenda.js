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
                        <th scope="col">Título</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Data</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Fornecedor</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ação</th>
                    </thead>
                    <tbody>`;

        for (let task of tasks) {
            const date = new Date(task.date);
            const formattedDate = date.toLocaleDateString();

            const statusText = task.status ? "Feito" : "Pendente";

            tab += `<tr>
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.description}</td>
                    <td>${formattedDate}</td>
                    <td>${task.time.slice(0, 5)}</td>
                    <td>Davi Salgadinhos</td>
                    <td>${statusText}</td>
                    <td><button type="button" class="btn btn-danger btn-remove" data-taskid="${
                        task.id
                    }">Excluir</button></td>
                </tr>`;

            tab += `</tbody>`;
        }

        document.getElementById("task-list").innerHTML = tab;
    }

    // Função para adicionar um presente
    async function addTask() {
        const name = document.getElementById("nome").value;
        const description = document.getElementById("descricao").value;
        const price = parseFloat(document.getElementById("preco").value);
        const image = document.getElementById("image").value;

        const giftData = {
            name: name,
            description: description,
            price: price,
            image: image,
            wedding: {
                id: weddingId,
            },
        };

        try {
            const response = await fetch(`${baseUrl}/gift`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(giftData),
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
});
