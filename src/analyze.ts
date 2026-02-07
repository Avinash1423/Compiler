import {Symbols} from './symbols.js'
import type { Program } from './ast.js'
import type { Stmt } from './ast.js'
import type {Expr} from './ast.js'

export class Analyze{

    constructor(private symbol=new Symbols()){  }


    analyzeProgram(program:Program){

      for(const item of program.value){

           this.analyzeStmt(item)
      }

    }

    private analyzeStmt(stmt:Stmt){

      
        if(stmt.kind=="LET"){

         this.symbol.declareNewVariable(stmt.name);

         this.analyzeExpr(stmt.initializer);
         
        }
    

        if(stmt.kind=="RETURN"){
          
            this.analyzeExpr(stmt.value);

        }


    }

    private analyzeExpr(expr:Expr){

        if(expr.kind=="NUMBER") return;

        if(expr.kind=="IDENTIFIER"){

           this.symbol.checkIfVariableleExists(expr.value);

        }

        if(expr.kind=="BINARYEXPR"){

            this.analyzeExpr(expr.left);
            this.analyzeExpr(expr.right);

        }





    }

     

}