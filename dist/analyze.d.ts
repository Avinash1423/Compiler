import { Symbols } from './symbols.js';
import type { Program } from './ast.js';
export declare class Analyze {
    private symbol;
    constructor(symbol?: Symbols);
    analyzeProgram(program: Program): void;
    private analyzeStmt;
    private analyzeExpr;
}
//# sourceMappingURL=analyze.d.ts.map