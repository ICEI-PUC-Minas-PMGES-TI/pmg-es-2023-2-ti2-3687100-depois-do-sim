async function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "application/json",
        }),
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });

    if(response.ok) {
        console.log("Register successful");
        window.setTimeout(function() {
            window.location = '/src/front/login.html';
        }, 2000);
    } else 
        console.log("Register failed");
}

// Vincular a função de registrar ao evento de clique do botão de login
document.getElementById("registerButton").addEventListener("click", function (event) {
    event.preventDefault();
    register();
});

// document.getElementById("logoutButton").addEventListener("click", function() {
//     localStorage.removeItem('Authorization');
//     window.location = '/src/front/login.html';
// });