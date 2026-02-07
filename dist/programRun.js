import { environment } from "./environment.js";
import { evalStmt } from "./evaluator.js";
export const runProgram = (parsedAST, globalEnv) => {
    for (const stmt of parsedAST.value) {
        let returnVal = evalStmt(stmt, globalEnv);
        if (returnVal)
            return returnVal;
        else
            throw new Error("Error running program " + stmt);
    }
};
//# sourceMappingURL=programRun.js.map