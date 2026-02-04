import { CURRENCY_API_CONFIG, CURRENCY_PATH } from "../config/api.js";

export class CurrencyService {
    static instance = null;
    constructor() {
        if (CurrencyService.instance) {
            return CurrencyService.instance;
        }
        CurrencyService.instance = this;
    }

    async getExchangeRates(baseCurrency) {
        try {
            const response = await fetch(this.buildApiUrl(baseCurrency));

            if (!response.ok) {
                throw new Error('Failed to fetch exchange rates');
            }

            const data = await response.json();
            return data.rates;

        } catch (error) {
            throw new Error('Currency API request failed');
        }
    }

    buildApiUrl(baseCurrency) {
        return `${CURRENCY_API_CONFIG.BASE_URL}${CURRENCY_PATH[baseCurrency]}`;
    }
    
    async convert(amount, fromCurrency, toCurrency) {
        if(fromCurrency === toCurrency) {
            return amount;
        }

        const data = await this.getExchangeRates(fromCurrency);
        const rate = data[toCurrency];

        if (!rate) {
            throw new Error(`Exchange rate not found for ${toCurrency}`);
        }

        return amount * rate;
    }
}