class a {
    constructor(a,b) {
        
        this.a=a;
        this.b=b;
        this.concat=function(){
            return (' function papi');
        }
    }
}    
class b  extends a {
    constructor(a,x) {
        super(a,x);
        this.a=a;
        this.x=x;
        this.concat=function(){
            return ('function child');
        }
    }
} 

let prova = new b (2,5);

console.log(prova);

