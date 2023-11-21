document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";

    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("Authorization");

    const suppliersList = document.getElementById("supplier-list"); // Referência à tabela de fornecedores

    // Função para buscar dados da API
    async function getAPI(url) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar dados da API.");
            }

            const data = await response.json();
            console.log(data);
            // show(data);
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    getAPI(`${baseUrl}/user/supplier/all`);

    // Função para criar elementos HTML
    async function show(suppliers) {
        let tab = `<thead>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Ação</th>
                    </thead>
                    <tbody>`;

        for (let supplier of suppliers) {
            tab += `<tr>
                        <td>${supplier.id}</td>
                        <td>${supplier.username}</td>
                        <td>${supplier.email}</td>
                        <td>
                            <button type="button" class="btn btn-primary btn-escolher" data-supplier-email="${supplier.email}">Escolher</button>    
                        </td>
                    </tr>`;

            tab += `</tbody>`;
        }

        document.getElementById("supplier-list").innerHTML = tab;

    //      document.getElementsByClassName('btn-escolher').addEventListener('click', function() {
    //         // Abre a nova página
    //         window.open('agenda.html', '_blank');
    //         // Preenche o campo específico no formulário
    // setTimeout(function() {
    //     // Supondo que o campo a ser preenchido tenha o ID 'campoExemplo'
    //     var campoExemplo = window.open().document.getElementById('email_fornecedor');
        
    //     // Preencha o campo com o valor desejado
    //     campoExemplo.value = 'supplierEmail';
    // }, 1000);});


    suppliersList.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-escolher")) {
            const supplierEmail = event.target.getAttribute("data-supplier-email");
            console.log(supplierEmail);
            
            window.location = "agenda.html?supplierEmail=" + supplierEmail;
            
    }

}
    )};
});


    async function addExpense() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;

        const expenseData = {
            "title": title,
            "description": description,
            "price": price,
            "user": {
                "id": userId
            }
        };

        try {
            const response = await fetch(`${baseUrl}/task`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(expenseData)
            });
    
            if (!response.ok) {
                alert("Erro ao adicionar despesa.");
                throw new Error("Erro ao adicionar despesa.");
            } else {
                alert("Despesa adicionada com sucesso!");
    
                // Limpar campos do formulário após o sucesso
                document.getElementById("title").value = "";
                document.getElementById("description").value = "";
                document.getElementById("price").value = "";
 
                // Atualizar a tabela após adicionar a tarefa
                getAPI(`${baseUrl}/task/user/${userId}`);
            }
        } catch (error) {
            console.error("Erro ao adicionar tarefa:", error);
        }
    }
    

//     // Evento para remover convidado
//     // tasksList.addEventListener("click", (event) => {
//     //     if (event.target.classList.contains("btn-remove")) {
//     //         const taskId = event.target.getAttribute("data-task-id");
//     //         if (confirm("Deseja realmente excluir esta task?"))
//     //             removeTask(taskId);
//     //     }
//     // });

//     // Função para remover convidado
//     // async function removeTask(taskId) {
//     //     try {
//     //         const response = await fetch(`${baseUrl}/task/${taskId}`, {
//     //             method: "DELETE",
//     //             "Authorization": `Bearer ${token}`
//     //         });
    
//     //         if (!response.ok) {
//     //             throw new Error("Erro ao remover a task.");
//     //         }
    
//     //         // Atualizar a tabela após remover o presente
//     //         getAPI(`${baseUrl}/task/user/${userId}`);
//     //     } catch (error) {
//     //         console.error("Erro ao remover a task:", error);
//     //     }
//     // }

//     document.getElementById("task-form").addEventListener("submit", function (event) {
//         event.preventDefault();
//     });

//     document.getElementById("btn-create-task").addEventListener("click", addTask);

// });
