// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}




// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return (`${this.name} has died in act of combat`)
        } else {
            return (`${this.name} has received ${damage} points of damage`)
        }
    }
    battleCry() {
        return ("Odin Owns You All!")
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return (`A Saxon has died in combat`)
        } else {
            return (`A Saxon has received ${damage} points of damage`)
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
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let j = (this.saxonArmy.length -1)
        let aux = (this.saxonArmy[j].receiveDamage(this.vikingArmy[0].strength))
        if (this.saxonArmy[j].health <= 0){
            this.saxonArmy.pop()
        }
        return (aux)
    }
    saxonAttack() {
        let i = (this.vikingArmy.length - 1)
        let aux2 = (this.vikingArmy[i].receiveDamage(this.saxonArmy[0].strength))
        if (this.vikingArmy[i].health <= 0){
        this.vikingArmy.pop()
        }
        return (aux2)
    }
    showStatus() {
        console.log(this.vikingArmy.length)
        console.log(this.saxonArmy.length)
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return ("Vikings and Saxons are still in the thick of battle.");
        } else if (this.vikingArmy.length === 0) {
            return ("Saxons have fought for their lives and survive another day...")
        } else if (this.saxonArmy.length === 0) {
            return ("Vikings have won the war of the century!")
        }
    }
}