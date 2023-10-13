// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue


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
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue


    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > damage) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= damage) {
            return `${this.name} has died in act of combat`
        }

    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthValue, strengthValue) {
        super(healthValue, strengthValue)


    }
    receiveDamage(damage) {
        this.health -= damage
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
        this.instanciaSaxon = new Saxon()
        this.instaciaViking = new Viking()



    }
    vikingArmy = []
    saxonArmy = []
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        //ESTO LO HEMOS VISTO CON CHAT GPT PORQUE NO SABIAMOS HACER EL NÚMERO RANDOM :/

        const saxonAleatorio = saxonArmy[Math.floor(Math.random() * saxonArmy.length)]



    }
}