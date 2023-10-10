const url = "http://localhost:8080/wedding/1"; // Substitua pelo URL real do casamento desejado

async function show(wedding) {
let tab =   `<thead>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Preço</th>
            </thead>`;

document.getElementById("gifts").innerHTML = tab;
tab =   `<tr>
            <td>${wedding.id}</td>
            <td>${wedding.name}</td>
            <td>${wedding.description}</td>
            <td>${wedding.price}</td>
        </tr>`;

document.getElementById("gifts").innerHTML += tab;
}

async function getAPI(url) {
try {
    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
        throw new Error(`Erro de rede: ${response.status}`);
    }

    const data = await response.json();
    show(data);
} catch (error) {
    console.error(`Ocorreu um erro ao acessar a API: ${error}`);
}
}

getAPI(url);

  



















// const url = "http://localhost:8080/wedding/{id";

// function show(gifts) {
//     let tab =   `<thead>
//                     <th scope="col">#</th>
//                     <th scope="col">Nome</th>
//                     <th scope="col">Descrição</th>
//                     <th scope="col">Preço</th>
//                 <thead/>`;

//     document.getElementById("gifts").innerHTML = tab;
//         tab =   `<tr>
//                     <td>${wedding.id}</td>
//                     <td>${wedding.name}</td>
//                 </tr>`;
//     }


// async function getAPI(url) {
//     const response = await fetch(url, {method: "GET"});

//     var data = await response.json();
//     if(response) {
//         show(data);
//     }
// }

// getAPI(url);






// const inputFile = document.querySelector("#picture__input");
// const pictureImage = document.querySelector(".picture__image");
// const pictureImageTxt = "Imagem do presente";
// pictureImage.innerHTML = pictureImageTxt;

// inputFile.addEventListener("change", function (e) {
//   const inputTarget = e.target;
//   const file = inputTarget.files[0];

//   if (file) {
//     const reader = new FileReader();

//     reader.addEventListener("load", function (e) {
//       const readerTarget = e.target;

//       const img = document.createElement("img");
//       img.src = readerTarget.result;
//       img.classList.add("picture__img");

//       pictureImage.innerHTML = "";
//       pictureImage.appendChild(img);
//     });

//     reader.readAsDataURL(file);
//   } else {
//     pictureImage.innerHTML = pictureImageTxt;
//   }
// });
