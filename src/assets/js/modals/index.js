import ModalsObjects from './ModalsObjects';
import Modal from './Modal';

const Modals = new ModalsObjects();

export default {
    init() {
        const modals = document.querySelectorAll('[modal-name]');
        const triggerModals = document.querySelectorAll('[modal-target]');
        modals.forEach((v) => {
            const name = v.getAttribute('modal-name').replace(/[ ]/g, '_');
            const modal = new Modal(name, v);
            Modals.addModal(modal);
        });

        triggerModals.forEach((v) => {
            v.addEventListener('click', () => {
                const name = v.getAttribute('modal-target').replace(/[ ]/g, '_');
                Modals.getModal(name).showModal();
            }, false);
        });
    },
};
