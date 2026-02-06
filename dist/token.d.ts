export type TokenType = "NUMBER" | "IDENTIFIER" | "LET" | "PLUS" | "MINUS" | "RETURN" | "DIVIDE" | "MULTIPLY" | "OPEN-BRACKET" | "CLOSE-BRACKET" | "EQUALS" | "COLON" | "SEMI-COLON" | "COMMA" | "MODULUS" | "EOF";
export declare class Token {
    type: TokenType;
    value: string;
    constructor(type: TokenType, value: string);
}
//# sourceMappingURL=token.d.ts.map