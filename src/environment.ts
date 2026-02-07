import type { runTimeValue } from "./ast.js";

export class environment{


    constructor(){}

    mapOfVars=new Map<string,runTimeValue>();


    defineEnv(name:string,value:runTimeValue){

        if(this.mapOfVars.has(name)) throw new Error("Unable to define "+name+" ,aldready exists.");
        
            this.mapOfVars.set(name,value);
    }


    getEnv(name:string):runTimeValue{

           if(!this.mapOfVars.has(name)) throw new Error(name + " is undefined.");

           return this.mapOfVars.get(name)!;
        

    }




}