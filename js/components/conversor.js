import { CurrencyService } from '../services/currency.js';

export class ConversorComponent {
    constructor() {
        this.init();
        this.service = new CurrencyService();
    }

    init() {
        console.log('Conversor Component initialized');
        this.convertCurrency();
    }

    async convertCurrency() {
        try {
            const amount = 100;
            const fromCurrency = 'USD';
            const toCurrency = 'EUR';

            const convert = await this.service.convertCurrency(amount, fromCurrency, toCurrency);
            console.log(`Converted Amount: ${convert}`);
        }
        catch (error) {
            console.error('Error converting currency:', error);
        }
    }
}

new ConversorComponent();