// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
        attack() {
            return this.strength
        };
        receiveDamage(damage){
            this.health = this.health - damage;
        }; 
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
    super(health, strength);
    this.name = name;  
}
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
            }
        return `${this.name} has received ${damage} points of damage`
    }
    
    battleCry() {
        return "Odin Owns You All!"
    }
}
// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`
            }
        return `A Saxon has received ${damage} points of damage`
         
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
        let theSaxon = this.saxonArmy[saxonIndex]
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        let theViking = this.vikingArmy[vikingIndex]

        let result = theSaxon.receiveDamage(theViking.attack())
        
        if (theSaxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1)
    }
    return result
}


    saxonAttack(){
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
        let theSaxon = this.saxonArmy[saxonIndex]
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        let theViking = this.vikingArmy[vikingIndex]

        let result = theViking.receiveDamage(theSaxon.attack())
        
        if (theViking.health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1)
    }
    return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        return "Vikings and Saxons are still in the thick of battle."
    }
}
