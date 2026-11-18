// 1. Elementos da tela
const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

// 2. Criamos o áudio da moeda do Mario
const somMoeda = new Audio("https://www.myinstants.com/media/sounds/mario-coin.mp3");

const somCano = new Audio("https://www.myinstants.com/media/sounds/mario-pipe.mp3");

function mostrarForm() {
    somMoeda.currentTime = 0;
    somMoeda.volume = 0.5;
    somMoeda.play();

    // Move para o centro horizontal E matem centralizado na vertical
    formulario.style.left = "50%";
    formulario.style.transform = "translate(-50%, -50%)";
    mascara.style.visibility = "visible";
}

function esconderForm() {
    somCano.currentTime = 0;
    somCano.volume = 0.5;
    somCano.play();

    // Joga de volta para fora da tela
    formulario.style.left = "-400px";
    formulario.style.transform = "translate(0, -50%)";
    mascara.style.visibility = "hidden";
}

// Fechar com a tecla Esc
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        esconderForm();
    }
});

