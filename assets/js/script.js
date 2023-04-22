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

imagemMenu.addEventListener("click", () => {
  imagemMenuClose.style.display = 'block';
  imagemMenu.style.display = 'none'
});

imagemMenuClose.addEventListener('click', () => {
  imagemMenu.style.display = 'block'
  imagemMenuClose.style.display = 'none';
})
