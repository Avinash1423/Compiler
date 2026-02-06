import { Token } from "./token.js";
import type { Program } from "./ast.js";
export declare class Parser {
    private tokens;
    constructor(tokens: Token[]);
    pos: number;
    private advance;
    private peek;
    private match;
    private expect;
    parse(): Program;
    private statment;
    private expression;
    private term;
    private factor;
}
//# sourceMappingURL=parser.d.ts.map