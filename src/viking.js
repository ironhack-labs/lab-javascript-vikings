// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

}

const soldier = new Soldier(100, 100);

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage
        const life = this.health
        if (life > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (life <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

const fromen = new Viking("Fromen", 50, 50);

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage
        const life = this.health
        if (life > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (life <= 0) {
            return `A Saxon has died in combat`
        }
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
        const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const atackRestult = saxonRandom.receiveDamage(vikingRandom.strength)
        if (saxonRandom.health <= 0) {
            const index = this.saxonArmy.indexOf(saxonRandom)
            this.saxonArmy.splice(index, 1)
        }
        return atackRestult;
    }

    saxonAttack() {
        const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const atackRestult = saxonRandom.receiveDamage(vikingRandom.strength)
        if (saxonRandom.health <= 0) {
            const index = this.saxonArmy.indexOf(saxonRandom)
            this.saxonArmy.splice(index, 1)
        }
        return atackRestult;
    }

    showStatus() {

    }

}

const warCraft = new War();