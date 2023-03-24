// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
       this.health = this.health - damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name  
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor() {        
        this.vikingArmy = []         
        this.saxonArmy = []    
    } 
    addViking(Viking) {
        this.vikingArmy = []
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy = []
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        const randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)         
        const randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length)         
        const randomViking = this.vikingArmy[randomVikingNumber]         
        const randomSaxon = this.saxonArmy[randomSaxonNumber]         
        const result = randomSaxon.receiveDamage(randomViking.attack())         
        if(randomSaxon.health <= 0){             
        this.saxonArmy.splice(randomSaxonNumber, 1)         
        }         
        return result;  
    }
    saxonAttack() {
        const randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)         
        const randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length)         
        const randomViking = this.vikingArmy[randomVikingNumber]         
        const randomSaxon = this.saxonArmy[randomSaxonNumber]         
        const result = randomViking.receiveDamage(randomSaxon.attack())         
        if(randomViking.health <= 0){             
        this.vikingArmy.splice(randomVikingNumber, 1)         
        }         
        return result;  
    }
    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else (this.saxonArmy >= 1 && this.vikingArmy >= 1)
            return "Vikings and Saxons are still in the thick of battle."
    }
}


