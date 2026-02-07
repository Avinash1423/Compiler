import * as readline from "readline";
import { Lexer } from "./lexer.js";
import { Token } from "./token.js";
import { Parser } from "./parser.js";
import { Analyze } from "./analyze.js";
import { runProgram } from "./programRun.js";
import { environment } from "./environment.js";
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
function compile(input, env) {
    const lexer = new Lexer(input);
    const tokens = lexer.tokenize();
    const parser = new Parser(tokens);
    const parsedOutput = parser.parse();
    const analyzer = new Analyze();
    analyzer.analyzeProgram(parsedOutput);
    let result = runProgram(parsedOutput, env);
    if (result !== null)
        console.log(result);
}
const main = async () => {
    let env = new environment();
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
        compile(input, env);
    }
};
main();
//# sourceMappingURL=main.js.map