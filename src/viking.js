// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    }
    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length)
        this.saxonArmy[randomSaxonNum].receiveDamage(this.vikingArmy[randomSaxonNum].strength);
        if (this.saxonArmy[randomSaxonNum].health <= 0) {
            this.saxonArmy.splice(randomSaxonNum, 1)
        }
    }
    saxonAttack() {
        let randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length)
        this.vikingArmy[randomVikingNum].receiveDamage(this.saxonArmy[randomSaxonNum].strength);
        if (this.vikingArmy[randomVikingNum].health <= 0) {
            this.vikingArmy.splice(randomVikingNum, 1)
        }

    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }

    }
}
