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
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dateStr = parseFloat(document.getElementById("date").value);
        const dateDate = new Date(dateStr);
        const timeStr = document.getElementById("time").value; 
        const timeTime = new Date(timeStr);

        const taskData = {
            "title": title,
            "description": description,
            "date": dateDate,
            "time": timeTime,
            "user": {
                "id": userId
            }
        };

        try {
            const response = await fetch(`${baseUrl}/task`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskData)
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar task.");
            }

            // Limpar campos do formulário após o sucesso
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
            document.getElementById("date").value = "";
            document.getElementById("time").value = "";

            // Atualizar a tabela após adicionar o presente
            getAPI(`${baseUrl}/task/user/${userId}`);
        } catch (error) {
            console.error("Erro ao adicionar Task:", error);
        }
    }

    document.getElementById("btn-create-task").addEventListener("click", addTask);

});
