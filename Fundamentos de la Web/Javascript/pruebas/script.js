function over(element) {
    element.style.backgroundColor = "lime";    
}
    
function out(element) {
    element.style.backgroundColor = "silver";   
}
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "dog.jpg";  
}
function setActive(element) {
    if (element.classList.contains("dark-mode")) {
        element.innerText = "Cambiar al modo oscuro";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Cambiar al modo claro";
        element.classList.add("dark-mode");
    }
}
function message() {
    console.log("Mensaje con retraso");    
}
    
console.log("Inicio");
setTimeout(message, 3000);
console.log("Final");

function escogeralmuerzo(element){
    alert("Elegiste " + element.value);
}

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}
