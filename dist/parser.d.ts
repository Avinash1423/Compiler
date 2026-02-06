import { Token } from "./token.js";
import type { Stmt } from "./ast.js";
export declare class Parser {
    private tokens;
    constructor(tokens: Token[]);
    pos: number;
    private advance;
    private peek;
    private match;
    private expect;
    parse(): Stmt[];
    private statment;
    private expression;
    private term;
    private factor;
}
//# sourceMappingURL=parser.d.ts.map