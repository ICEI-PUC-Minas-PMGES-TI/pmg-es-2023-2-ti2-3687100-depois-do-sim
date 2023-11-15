async function createWedding() {

    const token = localStorage.getItem('Authorization');
    const userId = localStorage.getItem('id');

    const weddingData = {
        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        local: document.getElementById("local").value,
        user: {
            id: userId
        }
    };

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    await fetch("http://localhost:8080/wedding", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(weddingData),
    }).then((response) => {
        if (response.ok) {
            alert("Wedding created");
            window.location = 'main.html';
        } else {
            alert("Wedding not created");
        }
    });
}

document.getElementById("createWeddingButton").addEventListener("click", function (event) {
    event.preventDefault();
    createWedding();
});