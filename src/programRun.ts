import type {Program}  from "./ast.js";
import { environment } from "./environment.js";
import { evalStmt } from "./evaluator.js";


export  const runProgram=(parsedAST:Program,globalEnv:environment)=>{

  for(const stmt of parsedAST.value){

    let returnVal=evalStmt(stmt,globalEnv);

    if(returnVal!==null) return returnVal;
    
  }

  return null;



}

