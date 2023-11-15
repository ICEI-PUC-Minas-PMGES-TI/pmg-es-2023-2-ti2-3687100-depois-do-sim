async function createWedding() {

    const token = localStorage.getItem('Authorization');

    const weddingData = {
        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        local: document.getElementById("local").value,
    };

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    await fetch("http://localhost:8080/wedding", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            name: weddingData.name,
            date: weddingData.date,
            time: weddingData.time,
            local: weddingData.local,
        }),
    }).then((response) => {
        if (response.ok) {
            alert("Wedding created");
            window.location = 'wedding.html';
        } else {
            alert("Wedding not created");
        }
    });
}

document.getElementById("createWeddingButton").addEventListener("click", function (event) {
    event.preventDefault();
    createWedding();
});