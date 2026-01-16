import { LANGUAGES } from '../config/languages.js';

export class TranslatorComponent {
    constructor(translationService) {
        this.service = new translationService();

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
        console.log('Translator component initialized');
        this.getLanguagesList();
        this.eventListeners();
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

    async translateText() {
        console.log('Translating text...');

        this.elements.translatedTextarea.value = 'Translating...';

        
        try {
            const text = this.elements.sourceTextarea.value;
            const source = this.elements.sourceLanguageSelect.value;
            const target = this.elements.targetLanguageSelect.value;

            const translation = await this.service.translate(text, source, target);

            this.elements.translatedTextarea.value = translation;
        }
        catch(error) {
            alert('Error during translation: ' + error.message);
        }
    }
}