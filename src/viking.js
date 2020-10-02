// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength
    }
    
    receiveDamage(damage){
        this.health = this.health - damage
    } 
}
    
// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }
attack(){
    return this.strength;
    
}

receiveDamage(damage){
    this.health = this.health - damage

    if (this.health>0){
        return `${this.name} has received ${damage} points of damage`
    } else if (this.health == 0) {
        return `${this.name} has died in act of combat`
}
}
battleCry(){
    return `Odin Owns You All!`
}
}


// Saxon
class Saxon extends Soldier {
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War{
   constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
   }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let saxonArmyRandom = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let vikingArmyRandom = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let damageOfViking = vikingArmyRandom.attack()
        let result = saxonArmyRandom.receiveDamage(damageOfViking);
        if(saxonArmyRandom.health<=0){
            this.saxonArmy.splice(saxonArmyRandom, 1)
        }
        return result;
    }
        
    

    saxonAttack(){
        let saxonArmyRandom = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let vikingArmyRandom = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let damageOfSaxon = saxonArmyRandom.attack()
        let result = vikingArmyRandom.receiveDamage(damageOfSaxon);
        if(vikingArmyRandom.health<=0){
            this.vikingArmy.splice(vikingArmyRandom, 1)
        }
        return result;
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
