// Para garantir que o vídeo toque na área visível da página
const video = document.getElementById('meuVideo');

// Checa a visibilizadade do vídeo
function checagemdavisibilidadedovideo() {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        video.play();
    }
}

// Carrossel customizado
let idx = 0;
const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('.item');

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`; // Ajuste a largura para corresponder às imagens
}

// Muda as imagens a cada 20 segundos
setInterval(carrossel, 20000);

// Controles
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const maxItems = img.length;

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        const isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        img.forEach((item) => item.classList.remove("current-item"));

        img[currentItem].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });

        img[currentItem].classList.add("current-item");
    });
});

function saibamais() {
  window.location.href='outrapagina.html'
}