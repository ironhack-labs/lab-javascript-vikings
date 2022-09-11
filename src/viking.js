// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength = strength;
      
    }

attack(){
return this.strength;
}
receiveDamage(damage){
   this.health -=damage;
}
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
super(health, strength);
this.name= name;
    }
    
    receiveDamage(damage){
        this.health -=damage;
        if (this.health >0){
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health ==0){
            return `${this.name} has died in act of combat`;
        }
     }

     battleCry(){
        return "Odin Owns You All!";
     }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -=damage;
        if (this.health >0){
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health ==0){
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(name, health, strength)
    vikingArmy=[];
    addViking(Viking){
        
   }

    saxonArmy=[];
    addSaxon(Saxon){

    }
    
    vikingAttack(){
       
            receiveDamage(){
                damage= super.strength;
                
            }
            
        }
    }
    saxonAttack(){
super(Viking)
receiveDamage(){
    this.strength.Saxon;

}
    }

    showStatus(){
        if (Saxon.length == 0) {
            return `Vikings have won the war of the century!`
        }
        if (Viking.length == 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        if (Viking.length == 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        if (Viking.length >=1 && Saxon.length >=1 ){
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

