
import * as readline from "readline";
import { Lexer } from "./lexer.js";
import { Token } from "./token.js";
import { Parser } from "./parser.js";
import type {Program}  from "./ast.js";
import { Analyze } from "./analyze.js";
import { runProgram } from "./programRun.js";
import { environment } from "./environment.js";


const reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  
    function compile(input:string,env:environment){
        
      const lexer=new Lexer(input);

      const tokens :Token[]=lexer.tokenize();

      const parser=new Parser(tokens);

      const parsedOutput:Program=parser.parse();

      const analyzer=new Analyze();

      analyzer.analyzeProgram(parsedOutput);

      let result=runProgram(parsedOutput,env);

       if(result!==null) console.log(result);
   }

   
 const main=async()=>{

   let env= new environment();
   let buffer: String[]=[];
       reader.setPrompt(">>>");
       reader.prompt();

reader.on("line",(input:string)=>{

 
    if(input===": exit"){
        console.log("Exiting....")
        return;
      
    } 
    if(input===": clear"){
        console.clear();
        reader.setPrompt(">>>");
        reader.prompt();
      
    } 

    if(input===": run"){
        
    compile(buffer.join("\n"),env);
        reader.setPrompt(">>>");
        reader.prompt();
  
    }

    if(input===": reset"){
        
        buffer=[];
        reader.setPrompt(">>>");
        reader.prompt();

    }

       if(!input.startsWith(": ")){ 
        buffer.push(input);
        reader.setPrompt("  ");
        reader.prompt();
       }

  }
 
);
 

 }
main();
