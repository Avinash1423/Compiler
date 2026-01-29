import * as readline from "readline";
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
        console.log(">> ", input);
    }
};
main();
//# sourceMappingURL=main.js.map