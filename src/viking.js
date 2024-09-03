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
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > damage) {
            return `${this.name} has received ${damage} points of damage`
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
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health = this.health - damage
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
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }
    vikingAttack() {
        let anyVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let anyVikingArmy = this.vikingArmy[anyVikingIndex]
        let anySaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let anySaxonArmy = this.saxonArmy[anySaxonIndex]
        let damage = anyVikingArmy.strength
        let result = anySaxonArmy.receiveDamage(damage)
        if (anySaxonArmy.health <= 0) {
            this.saxonArmy.splice(anySaxonIndex, 1)
        }
        return result
    }
    saxonAttack() {
        let anyVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let anyVikingArmy = this.vikingArmy[anyVikingIndex]
        let anySaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let anySaxonArmy = this.saxonArmy[anySaxonIndex]
        let damage = anySaxonArmy.strength
        let result = anyVikingArmy.receiveDamage(damage)
        if (anyVikingArmy.health <= 0) {
            this.vikingArmy.splice(anyVikingIndex, 1)
        }
        return result
    }


    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


