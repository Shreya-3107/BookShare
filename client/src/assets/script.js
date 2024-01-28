const container = document.getElementById("container");
const RegButton = document.getElementById("register");
const LogButton = document.getElementById("login");

RegButton.addEventListener("click" , ()=>{
    container.classList.add("active")
})

LogButton.addEventListener("click" , ()=>{
    container.classList.remove("active")
})