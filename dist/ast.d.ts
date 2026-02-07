export type Expr = NumberLiteral | Identifier | BinaryExpr;
export type NumberLiteral = {
    kind: "NUMBER";
    value: number;
};
export type Identifier = {
    kind: "IDENTIFIER";
    value: string;
};
export type BinaryExpr = {
    kind: "BINARYEXPR";
    value: string;
    left: Expr;
    right: Expr;
};
export type Stmt = LetStmt | ReturnStmt;
export type LetStmt = {
    kind: "LET";
    name: string;
    initializer: Expr;
};
export type ReturnStmt = {
    kind: "RETURN";
    value: Expr;
};
export type Program = {
    kind: "PROGRAM";
    value: Stmt[];
};
export type runTimeValue = {
    kind: "integer";
    value: number;
} | {
    kind: "boolean";
    value: boolean;
} | {
    kind: "string";
    value: string;
};
//# sourceMappingURL=ast.d.ts.map