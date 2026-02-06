import type {Expr } from "./ast.js";
import type {BinaryExpr} from "./ast.js";


export class Evaluator{

    constructor(){ }

    
    evaluate(expr:Expr):number{

     if(expr.kind=="NUMBER") return  expr.value;

     if(expr.kind=="BINARYEXPR") {
                
          return this.evaluateBinaryExpr(expr) ;  
                   
     }

     throw new Error("Undefined : "+ expr );


    }

    evaluateBinaryExpr( Bexpr:BinaryExpr):number{
     
        let left=this.evaluate(Bexpr.left);

        let right=this.evaluate(Bexpr.right);

        let operator=Bexpr.value;

        switch(operator){

            default:
                throw new Error("Undefined : "+ operator);

            case "+":
                return left+right;

            case "-":
                return left-right;

            case "/" :   

                 if(right==0)  throw new Error("Cannot divide by zero");
                 return left/right;

            case "*" :   

                 return left*right;   
                 
            case "%":

                 if(right==0)  throw new Error("Cannot modulo by zero");
                 return left % right;

        }

        


         


    }


}