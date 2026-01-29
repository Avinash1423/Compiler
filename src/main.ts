
import * as readline from "readline";
import { Lexer } from "./lexer.js";
import { Token } from "./token.js";
import type { promises } from "fs";

  const read= async ():Promise<string>=>{
 const reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>((resolve)=>{
  reader.question(">>>",(line:string)=>{
    reader.close();
     resolve(line);
  });
});

 }

 const main=async()=>{

while(true){
 
    const input:string=await read();

    if(input==="#exit"){
        console.log("Exiting....")
        break;
    } 
    if(input==="#clear"){
        console.clear();
        console.log(">> ");
        continue;
    } 
    
    const lexer=new Lexer(input);

    const token :Token[]=lexer.tokenize();

    console.log(">> " ,token);

}
 
}

main();
