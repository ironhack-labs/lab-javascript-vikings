// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
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
    constructor(health, strength, name) {
        super (health, strength)
        this.name = name
        //this.health = health
        //this.strength = strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return '${this.name} has recived ${damage} points of damage'
        } else {
            return '${this.name} has died in combat'
        }
    }
    battleCry() {
        return 'Odin Owns You All'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength, ) {
        super(health, strength)
    }
    recieveDamage(damage) {
        this.health -= damage;
        if (damage > 0) {
            return 'a Saxon has recieved ${damage} points of damage'
        } else {
            return 'A Saxon has died in combat'
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
}
