
export class NotificationComponent {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    show(message, type = 'warning') {
        this.element.textContent = message;
        this.element.className = `alert alert-${type} mt-3 d-block`;
    }

    hide() {
        this.element.className = 'd-none';
    }
}