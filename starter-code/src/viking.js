// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health,
        this.strength=strength
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health-=damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength),
        this.name=name
    }
receiveDamage(damage){
    super.receiveDamage(damage)
    if (this.health>0) return `${this.name} has received ${damage} points of damage`;
        
    else return `${this.name} has died in act of combat`; 
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health>0) return `A Saxon has received ${damage} points of damage`;
            
        else return `A Saxon has died in combat`; 
        }
}


// War
function getRandomWar(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class War {
    constructor(){
        this.vikingArmy=[],
        this.saxonArmy=[]
    }
    addViking(newViking){
        this.vikingArmy.push(newViking);
    }

    addSaxon(newSaxon){
        this.saxonArmy.push(newSaxon);
    }

    vikingAttack(){
       let randomViking=getRandomWar(this.vikingArmy.length);
       let randomSaxon=getRandomWar(this.saxonArmy.length);
        let message = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
        if (this.saxonArmy[randomSaxon].health<=0){
            this.saxonArmy.splice(randomSaxon,1);
        }
        return message
    }

    saxonAttack(){
        let randomViking=getRandomWar(this.vikingArmy.length);
        let randomSaxon=getRandomWar(this.saxonArmy.length);
         let message = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())
         if (this.vikingArmy[randomViking].health<=0){
             this.vikingArmy.splice(randomViking,1);
         }
         return message
     }
     showStatus(){
         if (this.saxonArmy.length===0 ) {
             return "Vikings have won the war of the century!"
         }else if (this.vikingArmy.length===0){
             return "Saxons have fought for their lives and survived another day..."
         }else{
             return "Vikings and Saxons are still in the thick of battle."
         }
     }

    
}
