import * as readline from "readline";
import { Lexer } from "./lexer.js";
import { Token } from "./token.js";
const read = async () => {
    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        reader.question(">>>", (line) => {
            reader.close();
            resolve(line);
        });
    });
};
const main = async () => {
    while (true) {
        const input = await read();
        if (input === "#exit") {
            console.log("Exiting....");
            break;
        }
        if (input === "#clear") {
            console.clear();
            console.log(">> ");
            continue;
        }
        const lexer = new Lexer(input);
        const token = lexer.tokenize();
        console.log(">> ", token);
    }
};
main();
//# sourceMappingURL=main.js.map