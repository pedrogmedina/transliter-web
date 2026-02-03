
export class Validator {

    static validateText(text) {
        if(!text || text.trim().length === 0) {
            throw new Error('Input text cannot be empty');
        }
        
        return true;
    }
}