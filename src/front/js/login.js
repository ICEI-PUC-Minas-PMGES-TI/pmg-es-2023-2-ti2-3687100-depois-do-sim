async function login() {
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;

    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });

    if (response.ok) {
        console.log("Login successful");
        const data = await response.json();
        const token = data.token;

        // Armazenar o token no Local Storage
        window.localStorage.setItem("Authorization", token);
        window.localStorage.setItem("username", username);

        // Atualize o elemento HTML com o nome do usuário
        document.getElementById("username").textContent = username;
    } else {
        console.log("Login failed");
    }
}

// Vincular a função de login ao evento de clique do botão de login
document.getElementById("loginButton").addEventListener("click", function (event) {
    event.preventDefault();
    login();
});

document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('username');
    window.location = 'login.html'; // Redirecionar para a página de login
});
