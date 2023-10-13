// Soldier
class Soldier {
    constructor(healthvalue, strengthvalue) {
        this.health = healthvalue
        this.strength = strengthvalue
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
    constructor(name, health, streng) {
        super(health, streng)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health >= 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }

}


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return 'A Saxon has died in combat'
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
        let randomNumber1 = Math.random() * this.saxonArmy.length
        let randomNumber2 = Math.random() * this.vikingArmy.length

        let fuerzaAtaque = this.vikingArmy[randomNumber2].attack()
        this.saxonArmy[randomNumber1].receiveDamage(fuerzaAtaque)
        if (this.saxonArmy[randomNumber1].health <= 0) {
            this.saxonArmy.splice(randomNumber1, 1)
        } else {
            return this.saxonArmy[randomNumber1].health
        }

    }
}
