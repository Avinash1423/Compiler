export type TokenType=
             "NUMBER"|
             "IDENTIFIER"|
             "TRUE"|
             "FALSE"|
             "LET"|
             "PLUS"|
             "MINUS"|
             "DIVIDE"|
             "MULTIPLY"|
             "OPEN-BRACKET"|
             "CLOSE-BRACKET"|
             "EQUALS"|
             "EXCLAMATION"|
             "COLON"|
             "SEMI-COLON"|
             "COMMA"|
             "UNDEFINED"|
             "EOF";

export class Token{

    constructor(public type:TokenType,public value:string){}
 
    }