// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`);
        }
        else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry() {
        return (`Odin Owns You All!`)
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`)
        }
        else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
vikingArmy = [] 
   saxonArmy = []
   addViking(Viking) {
    this.vikingArmy.push(Viking)
   }
   addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
   }
   vikingAttack() {
   const Saxon1 = new Saxon(Math.floor(Math.random*100), Math.floor(Math.random*100))
   const Viking1 = new Viking(Math.floor(Math.random*100), Math.floor(Math.random*100), "ratay")
   Saxon1.receiveDamage(Viking1.strength)
   }
}

// Armies Attack
