// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
    }
    attack() {
        return this.strength
    }
    receiveDamage(damageValue) {
        this.health -= damageValue
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue
    }
    receiveDamage(damageValue) {
        this.health -= damageValue
        if (this.health > 0) {
            return `${this.name} has received ${damageValue} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(healthValue, strengthValue) {
        super(healthValue, strengthValue)
    }
    receiveDamage(damageValue) {
        this.health -= damageValue
        if (this.health > 0) {
            return `A Saxon has received ${damageValue} points of damage`
        } else {
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
    addViking(vikingSoldier) {
        this.vikingArmy.push(vikingSoldier)
    }
    addSaxon(saxonSoldier) {
        this.saxonArmy.push(saxonSoldier)
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let vikingDamageDealt = randomSaxon.receiveDamage(randomViking.strength);
        if (vikingDamageDealt) {
            this.saxonArmy.pop()
        }
        else {
            return
        }



    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxonDamageDealt = randomViking.receiveDamage(randomSaxon.strength);
        if (saxonDamageDealt) {
            this.vikingArmy.pop()
        }
    }
    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.vikingArmy.length && this.saxonArmy.length) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
