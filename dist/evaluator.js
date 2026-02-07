import { environment } from "./environment.js";
export const evalStmt = (stmt, env) => {
    switch (stmt.kind) {
        case "RETURN":
            return evalExpr(stmt.value, env);
        case "LET":
            const letVal = evalExpr(stmt.initializer, env);
            env.defineEnv(stmt.name, letVal);
            return null;
    }
};
export const evalExpr = (expr, env) => {
    switch (expr.kind) {
        case "NUMBER":
            return { kind: "integer", value: expr.value };
        case "IDENTIFIER":
            return env.getEnv(expr.value);
        case "BINARYEXPR":
            const left = evalExpr(expr.left, env);
            const right = evalExpr(expr.right, env);
            switch (expr.value) {
                case "+":
                    if (left.kind == "integer" && right.kind == "integer")
                        return { kind: "integer", value: left.value + right.value };
                    else
                        throw new Error("Cannot perform aritmetic on types " + left.kind + " and " + right.kind);
                case "-":
                    if (left.kind == "integer" && right.kind == "integer")
                        return { kind: "integer", value: left.value - right.value };
                    else
                        throw new Error("Cannot perform aritmetic on types " + left.kind + " and " + right.kind);
                case "/":
                    if (left.kind == "integer" && right.kind == "integer") {
                        if (right.value !== 0) {
                            return { kind: "integer", value: left.value / right.value };
                        }
                        else
                            throw new Error("Cannot divide by 0");
                    }
                    else
                        throw new Error("Cannot perform aritmetic on types " + left.kind + " and " + right.kind);
                case "*":
                    if (left.kind == "integer" && right.kind == "integer")
                        return { kind: "integer", value: left.value * right.value };
                    else
                        throw new Error("Cannot perform aritmetic on types " + left.kind + " and " + right.kind);
            }
    }
    throw new Error("Unable to define " + expr.kind);
};
//# sourceMappingURL=evaluator.js.map