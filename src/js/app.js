// TODO: write your code here
export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    translate(code) {
        return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
    } 
}