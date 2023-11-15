document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";
    const userId = 1;

    const tasksList = document.getElementById("task-list");

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

    getAPI(`${baseUrl}/task/user/${userId}`);

    // Função para buscar dados da API por email do fornecedor
    async function getAPIByEmail(url) {
        try {
            const response = await fetch(url, { method: "GET" });
    
            if (!response.ok) {
                throw new Error("Erro ao buscar dados da API.");
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
            return null;
        }
    }

    
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

            getAPIByEmail(`${baseUrl}/supplier/${task.supplier.id}`)

            tab += `<tr>
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.description}</td>
                    <td>${formattedDate}</td>
                    <td>${task.time.slice(0, 5)}</td>
                    <td>${task.supplier.username}</td>
                    <td>${task.status}</td>
                    <td><button type="button" class="btn btn-danger btn-remove" data-task-id="${task.id}">Excluir</button></td>
                </tr>`;

            tab += `</tbody>`;
        }

        document.getElementById("task-list").innerHTML = tab;
    }

    // Função para adicionar uma tarefa
    async function addTask() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const email_fornecedor = document.getElementById("email_fornecedor").value;

        const supplierData = await getAPIByEmail(`${baseUrl}/supplier/email/${email_fornecedor}`);
        const supplierId = supplierData.id;
        const supplierName = supplierData.username;

        console.log(supplierData)
        console.log(supplierId)
        console.log(supplierName)

        const taskData = {
            "title": title,
            "description": description,
            "date": date,
            "time": time,
            "user": {
                "id": userId
            },
            "supplier": {
                "id": supplierId
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
                throw new Error("Erro ao adicionar tarefa.");
            }

            // Limpar campos do formulário após o sucesso
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
            document.getElementById("date").value = "";
            document.getElementById("time").value = "";
            document.getElementById("email_fornecedor").value = "";

            // Atualizar a tabela após adicionar a tarefa
            getAPI(`${baseUrl}/task/user/${userId}`);
        } catch (error) {
            console.error("Erro ao adicionar tarefa:", error);
        }
    }

    // Evento para remover convidado
    tasksList.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-remove")) {
            const taskId = event.target.getAttribute("data-task-id");
            if (confirm("Deseja realmente excluir esta task?"))
                removeTask(taskId);
        }
    });

    // Função para remover convidado
    async function removeTask(taskId) {
        try {
            const response = await fetch(`${baseUrl}/task/${taskId}`, {
                method: "DELETE"
            });
    
            if (!response.ok) {
                throw new Error("Erro ao remover a task.");
            }
    
            // Atualizar a tabela após remover o presente
            getAPI(`${baseUrl}/task/user/${userId}`);
        } catch (error) {
            console.error("Erro ao remover a task:", error);
        }
    }

    document.getElementById("task-form").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    document.getElementById("btn-create-task").addEventListener("click", addTask);

});
