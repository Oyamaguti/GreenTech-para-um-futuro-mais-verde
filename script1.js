document.querySelectorAll('.poli-container').forEach((container, index) => {
    container.addEventListener('click', function () {
        const parent = this.parentElement;
        const containers = Array.from(parent.children);

        // Verifica se a div clicada já está expandida
        if (this.classList.contains('expanded')) {
            // Reverte tudo ao estado normal
            containers.forEach((item) => {
                item.classList.remove('expanded', 'above', 'below');
                const hiddenContent = item.querySelector('.container-iten');
                if (hiddenContent) {
                    hiddenContent.classList.add('hidden'); // Oculta todo o conteúdo
                }
            });
            return; // Sai da função, pois não há mais nada a fazer
        }

        // Caso contrário, expande a div clicada e ajusta as outras
        containers.forEach((item) => {
            item.classList.remove('expanded', 'above', 'below');
            const hiddenContent = item.querySelector('.container-iten');
            if (hiddenContent) {
                hiddenContent.classList.add('hidden'); // Oculta todo o conteúdo
            }
        });

        // Adiciona a classe 'expanded' à div clicada
        this.classList.add('expanded');

        // Remove a classe 'hidden' da div '.container-iten' dentro da clicada
        const content = this.querySelector('.container-iten');
        if (content) {
            content.classList.remove('hidden');
        }

        // Marca as divs antes e depois da clicada
        containers.forEach((item, i) => {
            if (i < index) {
                item.classList.add('above');
            } else if (i > index) {
                item.classList.add('below');
            }
        });
    });
});
