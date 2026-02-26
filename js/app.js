import { TranslationService } from './services/translation.js';
import { TranslatorComponent } from './components/translator.js';
import '../components/card/card.js';
import '../components/dropdown/dropdown.js';
import '../components/header/header.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            new TranslatorComponent(new TranslationService());
            new Card();
        });
    }
}

new App();