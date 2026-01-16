import { TranslationService } from './services/translation.js';
import { TranslatorComponent } from './components/translator.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize translator component
            /* const translator = new Translator();
            translator.init(); */

            /* const translationService = new TranslationService(); */
            new TranslatorComponent(TranslationService);

            console.log('App initialized');
        });
    }
}

new App();