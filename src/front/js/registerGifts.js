const url = "http://localhost:8080/wedding/1";

function show(gifts) {
    let tab =   `<thead>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Preço</th>
                <thead/>`;

    document.getElementById("gifts").innerHTML = tab;
    for(let gift of gifts) {
        tab += `<tr>
                    <td>${gift.id}</td>
                    <td>${gift.name}</td>
                    <td>${gift.description}</td>
                    <td>${gift.price}</td>
                </tr>`;
    }
}

async function getAPI(url) {
    const response = await fetch(url, {method: "GET"});

    var data = await response.json();
    if(response) {
        show(data);
    }
}

getAPI(url);






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
