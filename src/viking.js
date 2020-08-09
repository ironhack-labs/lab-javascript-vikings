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
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
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
    constructor() {
        this.vikingArmy = [],
            this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonRandom = this.saxonArmy[randomSaxonNumber];
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let vikigAttackSaxon = saxonRandom.receiveDamage(vikingRandom.strength)
        if (saxonRandom.health <= 0) {
            this.saxonArmy.splice(randomSaxonNumber, 1);
        }
        return vikigAttackSaxon;
    }
    saxonAttack() {
            let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
            let vikingRandom = this.vikingArmy[randomVikingNumber];
            let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)];
            let saxonAttackViking = vikingRandom.receiveDamage(saxonRandom.strength)
            if (vikingRandom.health <= 0) {
                this.vikingArmy.splice(randomVikingNumber, 1);
            }
            return saxonAttackViking;
        }
        // showStatus()
}