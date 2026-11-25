console.log ("salut") ; 
const bouton = document.getElementById("boutonSombre");

bouton.addEventListener("click", function() {
    document.body.classList.toggle("sombre");
});

const boutonTheme = document.querySelector("#bouton-theme");
