document.addEventListener("DOMContentLoaded", async () => {
    const baseUrl = "http://localhost:8080";
    const token = localStorage.getItem("Authorization");

    try {
        const response = await fetch(`${baseUrl}/wedding/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar os casamentos da API.");
        }

        const data = await response.json();
        const currentDate = new Date();

        let exceededCount = 0;
        let notExceededCount = 0;

        for (let wedding of data) {


            const weddingDate = wedding.weddingDate;
            console.log(weddingDate);

            const budgetExceeded = wedding.budgetExceeded;

            if (budgetExceeded === true) {
                exceededCount++;
            } else {
                notExceededCount++;
            }
        }

        // Atualiza os valores nos elementos HTML
        document.getElementById("exceededCount").innerText = exceededCount;
        document.getElementById("notExceededCount").innerText = notExceededCount;

    } catch (error) {
        console.error("Erro ao buscar os casamentos da API:", error);
    }

    const currentDate = new Date();

    async function getWeddings() {
        try {
            const response = await fetch(`${baseUrl}/wedding/all`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar os casamentos da API.");
            }

            const data = await response.json();
            const totalWaitTimes = [];
            
            for (let wedding of data) {
                const weddingDate = new Date(wedding.date[0], wedding.date[1] - 1, wedding.date[2]);

                if (currentDate < weddingDate) {
                    const difference = weddingDate.getTime() - currentDate.getTime();
                    const waitTime = new Date(difference).getTime();
                    totalWaitTimes.push(waitTime);
                }
            }

            const totalWaitMilliseconds = totalWaitTimes.reduce((acc, cur) => acc + cur, 0);
            const averageWaitMilliseconds = totalWaitMilliseconds / totalWaitTimes.length;
            const averageWaitTime = new Date(averageWaitMilliseconds);

            const days = Math.floor(averageWaitTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((averageWaitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((averageWaitTime % (1000 * 60 * 60)) / (1000 * 60));
            const years = Math.floor(days / 365);
            const days2 = days % 365;
            
            
            console.log(`Tempo médio de espera até o casamento: ${days} dias, ${hours} horas e ${minutes} minutos.`);

            const averageWaitingTime = document.getElementById("averageWaitingTime");
            averageWaitingTime.textContent = `${years} anos, ${days2} dias`;

        } catch (error) {
            console.error("Erro ao buscar os casamentos da API:", error);
        }
    }

    getWeddings();


});
