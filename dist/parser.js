import { Token } from "./token.js";
export class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.pos = 0;
    }
    advance() {
        return this.tokens[this.pos++];
    }
    peek() {
        return this.tokens[this.pos];
    }
    match(...matcher) {
        if (matcher.includes(this.peek().type)) {
            this.advance();
            return true;
        }
        else
            return false;
    }
    expect(someToken) {
        if (this.peek().type == someToken) {
            return this.advance();
        }
        throw new Error('Undentified Token ' + this.peek().value);
    }
    parse() {
        let arrayOfStatments = [];
        while (this.peek().type !== "EOF") {
            arrayOfStatments.push(this.statment());
        }
        return arrayOfStatments;
        // return this.expression();
    }
    statment() {
        if (this.match("LET")) {
            const nameVal = this.expect("IDENTIFIER").value;
            this.expect("EQUALS");
            const initializerVal = this.expression();
            this.expect("SEMI-COLON");
            return {
                kind: "LET",
                name: nameVal,
                initializer: initializerVal
            };
        }
        if (this.match("RETURN")) {
            const returnVal = this.expression();
            this.expect("SEMI-COLON");
            return {
                kind: "RETURN",
                value: returnVal
            };
        }
        //dont return the expression just do it
        const expressionExpr = this.expression();
        this.expect("SEMI-COLON");
        throw new Error("Error in statment ");
    }
    expression() {
        let left = this.term();
        while (this.match("PLUS", "MINUS")) {
            let operator = this.tokens[this.pos - 1]?.value;
            let right = this.term();
            left = {
                kind: "BINARYEXPR",
                value: operator,
                left: left,
                right: right
            };
        }
        return left;
    }
    term() {
        let left = this.factor();
        while (this.match("DIVIDE", "MULTIPLY", "MODULUS")) {
            let operator = this.tokens[this.pos - 1]?.value;
            let right = this.factor();
            left = {
                kind: "BINARYEXPR",
                value: operator,
                left: left,
                right: right
            };
        }
        return left;
    }
    factor() {
        const token = this.peek();
        if (this.match("NUMBER"))
            return {
                kind: "NUMBER", value: Number(token.value)
            };
        if (this.match("IDENTIFIER"))
            return {
                kind: "IDENTIFIER", value: token.value
            };
        if (this.match("OPEN-BRACKET")) {
            let expr = this.expression();
            this.expect("CLOSE-BRACKET");
            return expr;
        }
        throw new Error('Unexpected Token : ' + token.type);
    }
}
//# sourceMappingURL=parser.js.map