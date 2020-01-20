// Soldier de la cual saldrán todos los guerreros
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


    // calculamos la vida que le queda, si es inferior a 0, le dice que muere, si no, la vida que le queda

    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat` //"NAME has died in act of combat"
        } else {
            return `${this.name} has received ${damage} points of damage`//"NAME has received DAMAGE points of damage"
        }
    }


    // grito de batalla, siempre gana Ragnar nigga
    battleCry() {
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }


    //al igual que class viking, nos dice si ha muerto o la vida que le queda

    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }


    // Sumar guerreros

    addViking(vikingmore) {
        this.vikingArmy.push(vikingmore)
    }


    addSaxon(saxonmore) {
        this.saxonArmy.push(saxonmore)
    }


    vikingAttack() {
        let vikingrdm = this.vikingArmy[Math.round(Math.random() * (this.vikingArmy.length - 1))] //vikingo random
        let saxonrdm = this.saxonArmy[Math.round(Math.random() * (this.saxonArmy.length - 1))]

        // daño
        let damage = vikingrdm.strength
        let result = saxonrdm.receiveDamage(damage)


        return result
    }

    saxonAttack() {

        let saxonrdm = this.saxonArmy[Math.round(Math.random() * (this.saxonArmy.length - 1))]
        let vikingrdm = this.vikingArmy[Math.round(Math.random() * (this.vikingArmy.length - 1))]

        // daño
        let damage = saxonrdm.strength
        let result = vikingrdm.receiveDamage(damage)


        return result
    }


    showStatus() {

        // resultado

        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"

        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."

        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
console.log("Saxon")

//BABY SHARK