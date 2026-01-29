import { Token } from "./token.js";
export declare class Lexer {
    private input;
    private pos;
    private tokens;
    constructor(input: string);
    private peek;
    private advance;
    private isAlpha;
    private isDigit;
    tokenize(): Token[];
}
//# sourceMappingURL=lexer.d.ts.map