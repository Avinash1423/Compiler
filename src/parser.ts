import {Token } from "./token.js";
import type { Expr } from "./ast.js";

export class Parser{


   constructor( private tokens:Token[]) {}

 
    pos:number=0;

   private advance():Token{

       return this.tokens[this.pos++]!;
    }

    private peek():Token{

       return this.tokens[this.pos]!;
    }

  private  match(...matcher:string[]):boolean{

        if(matcher.includes(this.peek().type)){

            this.advance();
            return true;
        }

       else return false;

    }

    private expect(someToken:string):Token{

        if(this.peek().type==someToken){

         return this.advance();

        }

     throw new Error('Undentified Token '+this.peek().value);    


    }





    parse():Expr{

        return this.expression();
    }

    
     
    private expression():Expr{

        let left=this.term();


        while(this.match("PLUS","MINUS")){
         
        let operator=this.tokens[this.pos-1]?.value!;
        let right=this.term();

        
        return {

            kind:"BINARYEXPR",
            value:operator,
            left:left,
            right:right

        }

    }
     return left;

     }


    private term():Expr{
       
        let left=this.factor();

        while(this.match("DIVIDE","MULTIPLY","MODULUS")){

        let operator=this.tokens[this.pos-1]?.value!;
        let right=this.factor();
            
        

        return{

            kind:"BINARYEXPR" ,
            value:operator,
            left:left,
            right:right

        }

    }

     return left;
     }


   private  factor(): Expr{

     const token=this.peek();

        if(this.match("NUMBER"))
          
         return{
             
             kind:"NUMBER",value:Number(token.value)

         };
        

         if(this.match("IDENTIFIER"))
          
         return{
             
             kind:"IDENTIFIER",value:token.value

         };
        

         if(this.match("OPEN-BRACKET")){

          let expr=this.expression();

          this.expect("CLOSE-BRACKET")
   
            return expr;

         }

     throw new Error('Unexpected Token : '+token.type);
 
}

       

}