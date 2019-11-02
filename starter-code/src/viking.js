
//function Soldier() {}
class Soldier{
 constructor(health,strength){
     this.health = health;
     this.strength = strength;
     
 }
 attack(){
     return this.strength;
   //console.log(`Soldier strength ${this.strength}`);
 }
 receiveDamage (damage){
      this.health-= damage;
    
 }
}
class Viking extends Soldier{

    constructor(name,health, strength){
        super(health,strength); 
        this.name = name;
        
        
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else if(this.health<=0){
            return `${this.name} has died in act of combat`;
        }

    }
    battleCry(){
        return `Odin Owns You All!`;
    }

}

 class Saxon extends Soldier{
     constructor(health,strength){
         super(health,strength);
     }
     attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else if(this.health<=0){
            return `A Saxon has died in combat`;
        }

    }
 }

 class War{
     constructor(){
         this.vikingArmy =[];
         this.saxonArmy =[];
     }
     

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let random = function (array){
           return Math.floor(array.length * Math.random());
        };
        let randomViking = random(this.vikingArmy);
        let randomSaxon = random(this.saxonArmy);
        let vikingDamage = this.vikingArmy[randomViking].strength;
        
        
        let result = this.saxonArmy[randomSaxon].receiveDamage(vikingDamage);
       
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }

        return result;
        

    }
    saxonAttack(){}
    showStatus(){}


 }


