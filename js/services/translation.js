import { API_CONFIG } from "../config/api.js";

export class TranslationService {
    static instanceof = null;

    constructor() {
        if (TranslationService.instanceof) {
            return TranslationService.instanceof;
        }
        TranslationService.instanceof = this;

        console.log('TranslationService initialized');
    }

    async translate(text, sourceLang, targetLang) {
        const url = this.buildApiUrl(text, sourceLang, targetLang);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error en la traducción');
            }

            const data = await response.json();

            return data[0].map(item => item[0]).join('');
        }
        catch (error) {
            throw new Error('Translation API request failed');
        }
    }

    buildApiUrl(text, sourceLang, targetLang) {
        const params = new URLSearchParams({
            client: API_CONFIG.CLIENT,
            sl: sourceLang, // source language
            tl: targetLang, // target language
            dt: API_CONFIG.DATA_TYPE,
            q: text,
        });

        return `${API_CONFIG.BASE_URL}?${params.toString()}`;
    }

}