const video = document.getElementById('meuVideo');

// Checa a visibilizadade do vídeo
function checagemdavisibilidadedovideo() {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        video.play();
    }
}