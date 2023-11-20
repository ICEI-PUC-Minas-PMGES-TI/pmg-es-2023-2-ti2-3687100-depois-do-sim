document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:8080";

    const token = localStorage.getItem("Authorization");
    const weddingId = localStorage.getItem("weddingId");

    // const convidadosList = document.getElementById("table");

    // Função para buscar dados da API
    // async function getAPI(url) {
    //     try {
    //         const response = await fetch(url, { method: "GET" });

    //         if (!response.ok) {
    //             throw new Error("Erro ao buscar dados da API.");
    //         }

    //         const data = await response.json();
    //         // show(data);

    //     } catch (error) {
    //         console.error("Erro ao buscar dados da API:", error);
    //     }
    // }

    // getAPI(`${baseUrl}/guest/wedding/${weddingId}`);

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
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(guestData)
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar convidado.");
            } else {
                alert("Convidado adicionado com sucesso!");
                console.log(name)
                console.log(email)
                console.log(num_people)
            }

            // Limpar campos do formulário após o sucesso
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("qtdPessoas").value = "";
            document.getElementById("nomesPessoas").value = "";

        } catch (error) {
            console.error("Erro ao adicionar convidado:", error);
        }
    }

    document.getElementById("btn-create-guest").addEventListener("click", addGuest);

    document.getElementById("convidadoForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });
});

