import { Token } from "./token.js";
import type { Expr } from "./ast.js";
export declare class Parser {
    private tokens;
    constructor(tokens: Token[]);
    pos: number;
    private advance;
    private peek;
    private match;
    private expect;
    parse(): Expr;
    private expression;
    private term;
    private factor;
}
//# sourceMappingURL=parser.d.ts.map