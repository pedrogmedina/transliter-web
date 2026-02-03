import { TranslationService } from './services/translation.js';
import { TranslatorComponent } from './components/translator.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            new TranslatorComponent(new TranslationService());
        });
    }
}

new App();