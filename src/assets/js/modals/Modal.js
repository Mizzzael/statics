import anime from 'animejs';

class Modal {
    constructor(name, modal) {
        this.name = name;
        this.modal = modal;
        this.id = `${this.name.replace(/[+$_()]/g, '')}-${new Date().getTime()}`;
        this.idContent = `modal-content-${this.name.replace(/[+$_()]/g, '')}-${new Date().getTime()}`;
        this.show = false;
        this.modal.setAttribute('id', this.id);
        this.content = document.querySelector(`#${this.id} .modal-content`);
        this.close = document.querySelector(`#${this.id} .modal-close`);
        this.content.setAttribute('id', this.idContent);

        this.close.addEventListener('click', () => {
            this.closeModal();
        }, false);
    }

    showModal() {
        if (this.show) return;
        this.modal.classList.remove('hidden');
        this.show = true;
        setTimeout(() => {
            anime({
                targets: `#${this.id}`,
                opacity: [0, 1],
                duration: 1200,
            });

            anime({
                targets: `#${this.idContent}`,
                translateY: [-145, 0],
                opacity: [0, 1],
                duration: 1200,
            });

            document.querySelector('body').classList.add('overflow-hidden');
        }, 200);
    }

    closeModal() {
        if (!this.show) return;
        this.show = false;
        anime({
            targets: `#${this.idContent}`,
            translateY: [0, -145],
            opacity: [1, 0],
            easing: 'linear',
            duration: 800,
        });

        anime({
            targets: `#${this.id}`,
            opacity: [1, 0],
            delay: 800,
            duration: 1200,
            easing: 'linear',
            loopComplete: () => {
                this.modal.classList.add('hidden');
                document.querySelector('body').classList.remove('overflow-hidden');
            },
        });
    }
}

export default Modal;
