//first dropdown
let myDrop = document.getElementById("myDrop");
let buttonDrop = document.getElementById("buttonDrop");
buttonDrop.textContent = "Features ▼";
buttonDrop.addEventListener("mouseover", () => {
  if (myDrop.style.visibility === "visible") {
    myDrop.style.visibility = "hidden";
    buttonDrop.textContent = "Features ▼";
  } else {
    myDrop.style.visibility = "visible";
    buttonDrop.textContent = "Features ▲";
  }
});

//second dropdown
let dropButton = document.getElementById("dropButton");
let dropMy = document.getElementById("dropMy");
dropButton.textContent = "Company ▼";
dropButton.addEventListener("mouseover", () => {
  if (dropMy.style.visibility === "visible") {
    dropMy.style.visibility = "hidden";
    dropButton.textContent = "Company ▼";
  } else {
    dropMy.style.visibility = "visible";
    dropButton.textContent = "Company ▲";
  }
});

//mobile
let imagem = document.getElementById("imagem");
console.log(imagem.src)
imagem.addEventListener("click", () => {
  if (imagem.src === "http://127.0.0.1:5500/assets/images/icon-menu.svg") {
    imagem.src = "../assets/images/icon-close-menu.svg";
  } else {
    imagem.src = "../assets/images/icon-menu.svg";
  }
  });
