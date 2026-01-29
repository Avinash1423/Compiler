import {Token } from "./token.js";

 export class Lexer{

    private pos=0;
    private tokens:Token[]=[];
                                
    constructor(private input:string){}                        
    
      
   private peek() :string {

    if(this.pos>=this.input.length) return "\0";

    
        return this.input[this.pos]!; 
    }

    private advance() :string {

         if(this.pos>=this.input.length) return "\0";

        return this.input[this.pos++]!;
    }

    private isAlpha(ch:string) :boolean {

        return (ch>="a" && ch<="z" ||ch>="A" && ch<="Z");
    }

    private isDigit(ch:string) :boolean{

        return (ch>="0" && ch<="9");
    }

    
    tokenize():Token[] {

        while(this.pos<this.input.length){

           
          const ch=this.peek();
       


          //skip whiteSpace
          if(ch==" "||ch=="\t"||ch=="\n"){
                this.advance();
                continue;
          }

          //Digits
          if(this.isDigit(ch)){

            let num="";

            while(this.pos<this.input.length && this.isDigit(this.peek())){

                num +=this.advance()
            }
            
             this.tokens.push(new Token( "NUMBER",num));
             continue;

          }

          //letters
          if(this.isAlpha(ch)){

            let word="";

            while(this.pos<this.input.length && this.isAlpha(this.peek())){

                word +=this.advance(); 
            }

            switch(word){

                default:
                    this.tokens.push(new Token( "IDENTIFIER",word));
                    break;

                case "true" :
                      this.tokens.push(new Token("TRUE",word));
                      break;

                
                case "false" :
                      this.tokens.push(new Token( "FALSE",word));
                       break;
                
                case "let" :
                      this.tokens.push(new Token( "LET",word));
                       break;
            } 

            continue;

          }
         //symbols
          switch(ch){

            default:
                 this.tokens.push(new Token("UNDEFINED",this.advance()));
                 break;

            case "+":
                  this.tokens.push(new Token("PLUS",this.advance()));
                   break;

            case "-":
                  this.tokens.push(new Token("MINUS",this.advance())); 
                   break;

            case "*":
                  this.tokens.push(new Token("MULTIPLY",this.advance()));
                   break;
            
            case "/":
                  this.tokens.push(new Token("DIVIDE",this.advance()));
                   break;
            
            case "(":
                  this.tokens.push(new Token("OPEN-BRACKET",this.advance()));
                   break;
           
            case ")":
                  this.tokens.push(new Token("CLOSE-BRACKET",this.advance()));
                   break;
            
           case "=":
                  this.tokens.push(new Token("EQUALS",this.advance()));
                   break;
          
           case ",":
                  this.tokens.push(new Token("COMMA",this.advance()));
                   break;
            
            case ";":
                  this.tokens.push(new Token("SEMI-COLON",this.advance()));
                   break;

            case ":":
                  this.tokens.push(new Token("COLON",this.advance()));
                   break;

            case "!":
                  this.tokens.push(new Token("EXCLAMATION",this.advance()));
                   break;
            
            
            
  
          }

           continue;

        }
           
        this.tokens.push(new Token("EOF","\0"));
           return this.tokens;

        }


      
    }


 