import { CurrencyService } from '../services/currency.js';

export class ConversorComponent {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.service = new CurrencyService();
            this.convertCurrency();
        });
    }

    async convertCurrency() {
        try {
            const amount = 100;
            const fromCurrency = 'USD';
            const toCurrency = 'EUR';

            const convert = await this.service.convert(amount, fromCurrency, toCurrency);
            console.log(`Converted Amount: ${convert}`);
        }
        catch (error) {
            console.error('Error converting currency:', error);

        }
    }
}

new ConversorComponent();