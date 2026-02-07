import { environment } from "./environment.js";
import type { Stmt } from "./ast.js";
import type { Expr } from "./ast.js";
import type { runTimeValue } from "./ast.js";
export declare const evalStmt: (stmt: Stmt, env: environment) => runTimeValue | null;
export declare const evalExpr: (expr: Expr, env: environment) => runTimeValue;
//# sourceMappingURL=evaluator.d.ts.map