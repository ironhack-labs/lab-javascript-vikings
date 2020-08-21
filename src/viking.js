// Soldier
class Soldier {

    // Add the properties health and strength to the parent class Soldier
    constructor(health, strength) { 

        this.health = health
        this.strength = strength
    }

    // A method to make an attack according the strength
    attack() {
        return this.strength
    }
    // A method to calculate the health after an attack
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    // Viking is an inherit class from Soldier

    // Add the properties name, health and strength 
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    // A method to calculate the health after an attack and determinate if the viking is dead or alive according to its health
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    // A method to show a message
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    // Saxon is an inherit class from Soldier

    // A method to calculate the health after an attack and determinate if the saxon is dead or alive according to its health
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {

    // Initial arrays to create an armay of vikings and saxons
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    // Add a viking to the viking army
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    // Add a saxon to the saxon army
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    // A random viking attack a random saxon
    vikingAttack() {
        let vikingRand = Math.floor(Math.random() * (this.vikingArmy.length))
        let saxonRand = Math.floor(Math.random() * (this.saxonArmy.length))
        let damgRec = this.saxonArmy[saxonRand].receiveDamage(this.vikingArmy[vikingRand].strength)
       
        // If the health of the saxon is zero, the saxon is dead and remove from the army
        if (this.saxonArmy[saxonRand].health <= 0) {
            this.saxonArmy.splice(saxonRand,1)
        }
        return damgRec
    
    }

    // A random viking attack a random saxon
    saxonAttack() {
        
        let vikingRand = Math.floor(Math.random() * (this.vikingArmy.length))
        let saxonRand = Math.floor(Math.random() * (this.saxonArmy.length))
        let damgRec = this.vikingArmy[vikingRand].receiveDamage(this.saxonArmy[saxonRand].strength)

        // If the health of the viking is zero, the viking is dead and remove from the army
        if (this.vikingArmy[vikingRand].health <= 0) {
            this.vikingArmy.splice(vikingRand, 1)
        }
        return damgRec

    }

    // Show the status of the armies
    showStatus() {
        // If the saxon army is zero, show a win message for the vikings
        if (!this.saxonArmy.length) {
            return `Vikings have won the war of the century!`

        // If the viking army is zero, show a win message for the saxons
        } else if (!this.vikingArmy.length) {
            return `Saxons have fought for their lives and survived another day...`

        // If the vikings or the saxons are still alive, show a message for both
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }

     }
}
