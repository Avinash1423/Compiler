export class Symbols {
    constructor() {
        this.tableOfSymbols = new Map();
    }
    declareNewVariable(symbol) {
        if (this.tableOfSymbols.has(symbol)) {
            throw new Error(symbol + " is previously declared");
        }
        else {
            this.tableOfSymbols.set(symbol, true);
        }
    }
    checkIfVariableleExists(symbol) {
        if (!this.tableOfSymbols.has(symbol)) {
            throw new Error(symbol + " is not declared");
        }
    }
}
//# sourceMappingURL=symbols.js.map