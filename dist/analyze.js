import { Symbols } from './symbols.js';
export class Analyze {
    constructor(symbol = new Symbols()) {
        this.symbol = symbol;
    }
    analyzeProgram(program) {
        for (const item of program.value) {
            this.analyzeStmt(item);
        }
    }
    analyzeStmt(stmt) {
        if (stmt.kind == "LET") {
            this.symbol.declareNewVariable(stmt.name);
            this.analyzeExpr(stmt.initializer);
        }
        if (stmt.kind == "RETURN") {
            this.analyzeExpr(stmt.value);
        }
    }
    analyzeExpr(expr) {
        if (expr.kind == "NUMBER")
            return;
        if (expr.kind == "IDENTIFIER") {
            this.symbol.checkIfVariableleExists(expr.value);
        }
        if (expr.kind == "BINARYEXPR") {
            this.analyzeExpr(expr.left);
            this.analyzeExpr(expr.right);
        }
    }
}
//# sourceMappingURL=analyze.js.map