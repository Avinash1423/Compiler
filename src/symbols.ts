 export class Symbols{

    constructor(){}

   private tableOfSymbols=new Map<string,boolean>();

   declareNewVariable(symbol:string){

    if(this.tableOfSymbols.has(symbol)){

        throw new Error(symbol+" is previously declared");
    }
    
    else{

        this.tableOfSymbols.set(symbol,true)
    }

   }

   
   checkIfVariableleExists(symbol:string){

       if(!this.tableOfSymbols.has(symbol)){

        throw new Error(symbol+" is not declared");

       }         

   }


 



}