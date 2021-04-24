// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength
    }

    receiveDamage (damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    constructor () {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack () {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let result
        result = saxon.receiveDamage(viking.strength)
        if (saxon.health <= 0) this.saxonArmy.forEach((_soldier, index) => {if (this.saxonArmy[index] === saxon) {this.saxonArmy.splice(index, 1)} })
        return result
    }

    saxonAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let result
        result = viking.receiveDamage(saxon.strength)
        if (viking.health <= 0) this.vikingArmy.forEach((soldier, index) => {if (this.vikingArmy[index] === viking) {this.vikingArmy.splice(index, 1)} })
        return result
    }

    /*
    generic method
    genericAttack(army) {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]   
        let result
        if (army === "saxon") {
            result = viking.receiveDamage(saxon.strength)
            if (viking.health <= 0) this.vikingArmy.forEach((soldier, index) => {if (this.vikingArmy[index] === viking) {this.vikingArmy.splice(index, 1)} })
        }
        if (army === "viking") {
            result = saxon.receiveDamage(viking.strength)
            if (saxon.health <= 0) this.saxonArmy.forEach((_soldier, index) => {if (this.saxonArmy[index] === saxon) {this.saxonArmy.splice(index, 1)} })
        }
        return result
    }
    */

    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
        if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day..."
        return "Vikings and Saxons are still in the thick of battle."
    }
}
