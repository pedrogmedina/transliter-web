import { LANGUAGES } from '../config/languages.js';
import { NotificationComponent } from './notification.js';
import { Validator } from '../utils/validator.js';

export class TranslatorComponent {
    constructor(translationService) {
        this.service = translationService;
        this.notification = new NotificationComponent('notification');
        this.elements = {
            translateButton: document.getElementById('translate-button'),
            sourceLanguageSelect: document.getElementById('source-language-select'),
            targetLanguageSelect: document.getElementById('language-select'),
            sourceTextarea: document.getElementById('source-textarea'),
            translatedTextarea: document.getElementById('translated-textarea'),
        }

        this.init();
    }

    init() {
        this.getLanguagesList();
        this.eventListeners();
    }

    getLanguagesList() {
         const sourceObtionsLanguages = Object.values(LANGUAGES).map(lang => 
            `<option value="${lang.code}">${lang.name}</option>`
         ).join('');

         const targetOptionsLanguages = Object.values(LANGUAGES)
            .filter(lang => lang.code !== 'auto')
            .map(lang => 
                `<option value="${lang.code}">${lang.name}</option>`
            ).join('');

            this.elements.sourceLanguageSelect.innerHTML = sourceObtionsLanguages;
            this.elements.targetLanguageSelect.innerHTML = targetOptionsLanguages;

            this.elements.targetLanguageSelect.value = 'en';
    }
    
    eventListeners() {
        this.elements.translateButton.addEventListener('click', () => this.translateText());
        this.elements.sourceTextarea.addEventListener('input', () => this.onSourceTextChange());
    }

    onSourceTextChange() {
        const valueLength = this.elements.sourceTextarea.value.length;

        if(valueLength >= 4) {
            this.translateText();
        } else {
            this.elements.translatedTextarea.value = '';
        }
    }


    async translateText() {
        this.elements.translatedTextarea.value = 'Translating...';
        
        try {
            const text = this.elements.sourceTextarea.value;
            const source = this.elements.sourceLanguageSelect.value;
            const target = this.elements.targetLanguageSelect.value;

            Validator.validateText(text);

            this.notification.hide();

            const translation = await this.service.translate(text, source, target);

            this.elements.translatedTextarea.value = translation;
        }
        catch(error) {
            this.notification.show('Translation failed. Please try again later.', 'danger');
        }
    }
}