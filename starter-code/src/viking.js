// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
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
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }

    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(name, health, strength) {
        super(name, health, strength)

    }
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

    vikingArmy = []
    saxonArmy = []

    addViking(viking) {
        this.vikingArmy.push(viking)


    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let temp = this.superBonus("vikings")
        console.log(temp)
        return temp
        //     let posicionsaxon = randomelement(this.saxonArmy.length)
        //     let posicionviking = randomelement(this.vikingArmy.length)
        //     let resultadovidaviking = this.saxonArmy[posicionsaxon].receiveDamage(this.vikingArmy[posicionviking].strength)
        //     if (this.saxonArmy[posicionsaxon].health <= 0) {
        //         this.saxonArmy.splice(posicionsaxon)
        //     }

        //     return resultadovidaviking
        // }

    }

    saxonAttack() {
        let temp = this.superBonus("saxon")
        console.log(temp)
        return temp
        // let posicionviking = randomelement(this.vikingArmy.length)
        // let posicionsaxon = randomelement(this.saxonArmy.length)
        // let resultadovidasaxon = this.vikingArmy[posicionviking].receiveDamage(this.saxonArmy[posicionsaxon].strength)
        // if (this.vikingArmy[posicionviking].health <= 0) {
        //     this.vikingArmy.splice(posicionviking)
        // }

        // return resultadovidasaxon
    }
    showStatus() {
        if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."

        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"



        } else {
            return "Saxons have fought for their lives and survived another day..."

        }



    }

    randomelement(longitud) {
        let random = Math.floor(Math.random() * longitud)
        return random
    }
    superBonus(atacante) {
        if (atacante === "vikings") {
            var atacant = this.saxonArmy
            var defenent = this.vikingArmy
        } else {
            var defenent = this.saxonArmy
            var atacant = this.vikingArmy

        }

        let posicionatacant = this.randomelement(atacant.length)
        let posiciondefenent = this.randomelement(defenent.length)
        let resultadovidadefenent = atacant[posicionatacant].receiveDamage(defenent[posiciondefenent].strength)
        if (atacant[posicionatacant].health <= 0) {
            atacant.splice(posicionatacant)
        }
        return resultadovidadefenent
    }


}
