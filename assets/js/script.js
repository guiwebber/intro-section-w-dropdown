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
let imagemMenu = document.getElementById("imagemMenu");
let imagemMenuClose = document.getElementById("imagemMenuClose");
let menuOpen = document.getElementById("menuOpen");
let main = document.getElementById("main");

imagemMenu.addEventListener("click", () => {
  imagemMenuClose.style.display = "block";
  imagemMenu.style.display = "none";
  menuOpen.style.display = "block";
  let backdrop = document.getElementById("backdrop");
  backdrop.style.display = "block";
});

imagemMenuClose.addEventListener("click", () => {
  imagemMenu.style.display = "block";
  imagemMenuClose.style.display = "none";
  menuOpen.style.display = "none";
  backdrop.style.display = "none";
});

//first drop mobile
let firstDropMobile = document.getElementById("firstDropMobile");
firstDropMobile.textContent = "Features ▼";
let myDropMobile = document.getElementById("myDropMobile");
myDropMobile.style.display = "none";
firstDropMobile.addEventListener("click", () => {
  if (myDropMobile.style.display === "block") {
    myDropMobile.style.display = "none";
    firstDropMobile.textContent = "Features ▼";
  } else {
    firstDropMobile.textContent = "Features ▲";
    myDropMobile.style.display = "block";
  }
});

let secondDropMobile = document.getElementById("secondDropMobile");
secondDropMobile.textContent = "Company ▼";
let menuDropMobile = document.getElementById("menuDropMobile");
menuDropMobile.style.display = "none";

secondDropMobile.addEventListener("click", () => {
  if (menuDropMobile.style.display === 'block') {
    menuDropMobile.style.display = 'none';
    secondDropMobile.textContent = "Company ▼";
  } else {
    menuDropMobile.style.display = "block";
    secondDropMobile.textContent = "Company ▲";
  }
});
