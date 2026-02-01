export type TokenType = "NUMBER" | "IDENTIFIER" | "TRUE" | "FALSE" | "LET" | "PLUS" | "MINUS" | "DIVIDE" | "MULTIPLY" | "OPEN-BRACKET" | "CLOSE-BRACKET" | "EQUALS" | "EXCLAMATION" | "COLON" | "SEMI-COLON" | "COMMA" | "EOF";
export declare class Token {
    type: TokenType;
    value: string;
    constructor(type: TokenType, value: string);
}
//# sourceMappingURL=token.d.ts.map