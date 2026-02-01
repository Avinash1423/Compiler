export type Expr=NumberLiteral | Identifier | BinaryExpr;

export type NumberLiteral={ kind:"NUMBER",value:number}

export type Identifier={ kind:"IDENTIFIER",value:string }

export type BinaryExpr={ kind:"BINARYEXPR"  ,
                         value:string,
                         left:Expr,
                         right:Expr
                           
                                     }  