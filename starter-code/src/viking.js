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
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (0 >= this.health) {
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    }

    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage
        if (0 >= this.health) {
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonDude = this.saxonArmy[saxonIndex]
        let vikingDude = this.vikingArmy[vikingIndex]
        let damage = saxonDude.receiveDamage(vikingDude.strength)


        if (saxonDude.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1);
        }

        return damage
    }

    saxonAttack() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonDude = this.saxonArmy[saxonIndex]
        let vikingDude = this.vikingArmy[vikingIndex]
        let damage = vikingDude.receiveDamage(saxonDude.strength)


        if (vikingDude.health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1);
        }

        return damage
    }

    showStatus() {

        if (this.saxonArmy == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy == 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}