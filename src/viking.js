// Soldier
class Soldier {
    constructor(health,strength){
     this.health=health;
     this.strength=strength;
     this.damage=1;   
    }
    attack(){      
        return this.strength
        }
    receiveDamage(damage){
        this.damage=damage;
        if(this.damage===0){
        return this.health;   
        }else{
       this.health=this.health-this.damage;
    }
}
}
const Soldier1=new Soldier(`health`,`strength`);

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }
    receiveDamage(damage){
        this.damage=damage;
        if(this.damage===0){
            return this.health;   
        }else{
             this.health-=this.damage;
       
             if(this.health>0){
             return `${this.name} has received ${this.damage} points of damage` 
             }else{          
             return `${this.name} has died in act of combat`        
             }
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}
const Zok=new Viking();

// Saxon
class Saxon extends Soldier {
   receiveDamage(damage){
    this.damage=damage;    
    if(this.damage===0){
        return this.health;   
    }else{
         this.health=this.health-this.damage;
   
        if(this.health>0){
             return `A Saxon has received ${this.damage} points of damage` 
         }else{          
             return `A Saxon has died in combat`        
         }
      }
   }
}

// War
class War {
    constructor(){
         this.vikingArmy=[];
         this.saxonArmy=[];
         
    }
    addViking(Viking){
         this.Viking={};
         this.Viking=Viking;
         this.vikingArmy.push(this.Viking);
    }
    addSaxon(Saxon){
         this.Saxon={};
         this.Saxon=Saxon;
         this.saxonArmy.push(this.Saxon);
    }
    vikingAttack(){
         Saxon.receiveDamage(damage);
         Saxon.damage=Viking.strength;
         for(let i=0;i<this.saxonArmy.length;i++){
         if(this.saxonArmy[i].health-this.saxonArmy[i].damage<=0){
            this.saxonArmy.splice(i,1);
         }else{
            return Saxon.receiveDamage();
         }
         }
    }
    saxonAttack(){

    }
    showStatus(){

    }
}
