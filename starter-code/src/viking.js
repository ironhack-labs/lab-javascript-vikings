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
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
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
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon) 
    }
    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex]
        let randomViking = this.vikingArmy[randomVikingIndex]
        /*Jazmine nos pide que mandemos llamar a la función. No estamos seguros
        si al declararla en esta variable la estamos mandando llamar. Lo marca
        como correcto.*/
        let damageDone = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }
        return damageDone
    }
    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex]
        let randomViking = this.vikingArmy[randomVikingIndex]
        let damageDone = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
        }
        return damageDone
    }
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length == 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}


/*

Este es nuestro metodo para eliminar las dos funciones de cuando ataca un vikingo y cuando ataca un
saxon. 
Este metodo cuenta con un parametro que recibe Viking o Saxon y dependiendo de 
cual sea el argumento que recibe, es lo que va a ejecutar.

attack(whoAttacks) {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomSaxon = this.saxonArmy[randomSaxonIndex]
    let randomViking = this.vikingArmy[randomVikingIndex]
     if (whoAttacks == 'Viking') {
        let damageDone = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }
        return damageDone
    } else if (whoAttacks == 'Saxon') {
        let damageDone = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
        }
        return damageDone
    }
}

*/
