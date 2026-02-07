import type { runTimeValue } from "./ast.js";
export declare class environment {
    constructor();
    mapOfVars: Map<string, runTimeValue>;
    defineEnv(name: string, value: runTimeValue): void;
    getEnv(name: string): runTimeValue;
}
//# sourceMappingURL=environment.d.ts.map