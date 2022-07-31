// Soldier
class Soldier {
    constructor(firstArg, secondArg) {
        this.health = firstArg;
        this.strength = secondArg;
    }
    attack(){
        return this.strength
    }
    receiveDamage (damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(firstArg, secondArg, thrdArg){
        super(secondArg, thrdArg);
        this.name = firstArg;
    }
    receiveDamage(damage) {
        super.receiveDamage (damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        super.receiveDamage(damage)
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex]
        const result = randomSaxon.receiveDamage(randomViking.attack())
        if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxonIndex, 1);
        return result
    }
    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex] 
        const result = randomViking.receiveDamage(randomSaxon.attack())
        if(randomViking.health <= 0) this.vikingArmy.splice(randomVikingIndex, 1)
        return result
    }
    showStatus() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        } else if (this.vikingArmy.length > 0) {
            return "Vikings have won the war of the century!"
        } else {
            return "Saxons have fought for their lives and survived another day..."
        }
    }
}
