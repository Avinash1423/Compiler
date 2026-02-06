export type TokenType=
             "NUMBER"|
             "IDENTIFIER"|
             "LET"|
             "PLUS"|
             "MINUS"|
             "RETURN"|
             "DIVIDE"|
             "MULTIPLY"|
             "OPEN-BRACKET"|
             "CLOSE-BRACKET"|
             "EQUALS"|
             "COLON"|
             "SEMI-COLON"|
             "COMMA"|
             "MODULUS"|
             "EOF";

export class Token{

    constructor(public type:TokenType,public value:string){}
 
    }