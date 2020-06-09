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
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
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
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health <= 0)
            return 'A Saxon has died in combat'
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
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const viking = this.vikingArmy[randomVikingIndex]

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const saxon = this.saxonArmy[randomSaxonIndex]

        const result = saxon.receiveDamage(viking.strength)

        if (saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return result

    }
    saxonAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const viking = this.vikingArmy[randomVikingIndex]

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const saxon = this.saxonArmy[randomSaxonIndex]

        const result = viking.receiveDamage(saxon.strength)

        if (viking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result
    }
    showStatus() {

    }
}
const game = new War()
game.addSaxon(new Saxon(100, 20))
game.addViking(new Viking('Daniel', 80, 20))
console.log(game.saxonArmy)
game.vikingAttack()
game.vikingAttack()