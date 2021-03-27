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
        return `Odin Owns You All!`
    }
}
// Saxon
class Saxon extends Soldier {
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
class War { }