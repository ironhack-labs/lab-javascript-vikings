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
        super.receiveDamage(damage)
        return this.health <= 0 ? this.name+ " has died in act of combat" : this.name+ " has received " +damage+ " points of damage"
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        return this.health <= 0 ? "A Saxon has died in combat" : "A Saxon has received " +damage+ " points of damage"
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
        var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        var result = saxon.receiveDamage(viking.strength)
        if (saxon.health <= 0) {
            var index = this.saxonArmy.indexOf(saxon)
            this.saxonArmy.splice(index,1)
        }
        return result
    }
    saxonAttack() {
        var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        var result = viking.receiveDamage(saxon.strength)
        if (viking.health <= 0) {
            var index = this.vikingArmy.indexOf(viking)
            this.vikingArmy.splice(index,1)
        }
        return result
    }
    showStatus() {
        if (this.saxonArmy.length == 0) return "Vikings have won the war of the century!"
        if (this.vikingArmy.length == 0) return "Saxons have fought for their lives and survived another day..."
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
    }

    // Refactoring - generic attack function

    soldierAttack(attacker) {
        var targetArmy = attacker instanceof Viking ? this.saxonArmy : this.vikingArmy
        var target = targetArmy[Math.floor(Math.random() * targetArmy.length)]
        var result = target.receiveDamage(attacker.strength)
        if (target.health <= 0) {
            var index = targetArmy.indexOf(target)
            targetArmy.splice(index,1)
        }
        return result
    }
}

