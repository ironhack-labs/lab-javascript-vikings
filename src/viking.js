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
        return this.health ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        return this.health ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(objViking) {
        this.vikingArmy.push(objViking)
    }
    addSaxon(objSaxon) {
        this.saxonArmy.push(objSaxon)
    }
    vikingAttack() {
        let auxVik = Math.floor(Math.random() * this.vikingArmy.length)
        let auxSax = Math.floor(Math.random() * this.saxonArmy.length)
        this.saxonArmy[auxSax].receiveDamage(this.vikingArmy[auxVik].strength)
        if (this.saxonArmy[auxSax].health <= 0) { this.saxonArmy.splice(auxSax) }
        return
    }
    saxonAttack() {
        let auxSax = Math.floor(Math.random() * this.vikingArmy.length)
        let auxVik = Math.floor(Math.random() * this.saxonArmy.length)
        this.vikingArmy[auxVik].receiveDamage(this.saxonArmy[auxSax].strength)
        if (this.vikingArmy[auxVik].health <= 0) { this.vikingArmy.splice(auxVik) }
        return
    }
    showStatus() {
        if (this.vikingArmy.length && this.saxonArmy.length === 1) return "Vikings and Saxons are still in the thick of battle."
        else if (!this.saxonArmy.length) return "Vikings have won the war of the century!"
        else if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
    }
}
