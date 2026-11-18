// 1. Elementos da tela
const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

// 2. Criamos o áudio da moeda do Mario
const somMoeda = new Audio("https://www.myinstants.com/media/sounds/mario-coin.mp3");

const somCano = new Audio("https://www.myinstants.com/media/sounds/mario-pipe.mp3");

function mostrarForm() {
    // 3. Toca o som toda vez que abrir o formulário!
    somMoeda.currentTime = 0;
    somMoeda.volume = 0.5; // Volume a 50%
    somMoeda.play();

    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderForm() {
    somCano.currentTime = 0;
    somCano.volume = 0.5;
    somCano.play(); // Toca o som do cano ao fechar!

    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

// Fechar com a tecla Esc
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        esconderForm();
    }
});

