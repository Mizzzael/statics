class ModalsObject {
    constructor() {
        if (ModalsObject.instance) {
            return ModalsObject.instance;
        }
        this.$modals = new Map();
        ModalsObject.instance = this;
    }

    addModal(Modal) {
        this.$modals.set(Modal.name, Modal);
        return this;
    }

    getModal(name) {
        return this.$modals.get(name);
    }

    deleteModal(name) {
        return this.$modals.delete(name);
    }
}

export default ModalsObject;
