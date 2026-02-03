import { CURRENCY_API_CONFIG, CURRENCY_PATH } from "../config/api.js";

export class CurrencyService {
    constructor() {}

    buildApiUrl(baseCurrency) {
        const validCurrencies = Object.values(CURRENCY_PATH);
        if (!validCurrencies.includes(baseCurrency)) {
            throw new Error('Currency not supported');
        }

        return `${CURRENCY_API_CONFIG.BASE_URL}${baseCurrency.toString()}`;
    }
    
    async convertCurrency(amount, fromCurrency, toCurrency) {
        const url = this.buildApiUrl(fromCurrency);

        try {
            const response = await fetch(url);
            const data = await response.json();
            const valueConverted = data.rates[toCurrency] * amount;

            return valueConverted;
        }
        catch (error) {
            throw new Error('Currency API request failed');
        }
    }
}