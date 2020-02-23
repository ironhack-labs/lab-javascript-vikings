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
        }
        return `A Saxon has received ${damage} points of damage`
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
        return this.superBonus(this.vikingArmy, this.saxonArmy)
    
        //     let posiciosaxon = randomelement(this.saxonArmy.length)
        //     let posicioviking = randomelement(this.vikingArmy.length)
        //     let resultadovidaviking = this.saxonArmy[posiciosaxon].receiveDamage(this.vikingArmy[posicioviking].strength)
        //     if (this.saxonArmy[posiciosaxon].health <= 0) {
        //         this.saxonArmy.splice(posiciosaxon)
        //     }
        //     return resultadovidaviking
        // }

    }

    saxonAttack() {
        return this.superBonus(this.saxonArmy, this.vikingArmy)
        // let posicioviking = randomelement(this.vikingArmy.length)
        // let posiciosaxon = randomelement(this.saxonArmy.length)
        // let resultadovidasaxon = this.vikingArmy[posicioviking].receiveDamage(this.saxonArmy[posiciosaxon].strength)
        // if (this.vikingArmy[posicioviking].health <= 0) {
        //     this.vikingArmy.splice(posicioviking)
        // }
        // return resultadovidasaxon
    }
    showStatus() {
        if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."

        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        return "Saxons have fought for their lives and survived another day..."
    }

    randomelement(longitud) {
        return Math.floor(Math.random() * longitud)
    }

    superBonus(atacant, defenent) {
        let posicioDefenent = this.randomelement(defenent.length)
        let posicioAtacant = this.randomelement(atacant.length)
        let mensajeRespuestaDefensor = defenent[posicioDefenent].receiveDamage(atacant[posicioAtacant].strength)
        if (defenent[posicioDefenent].health <= 0) {
            defenent.splice(posicioDefenent)
        }
        return mensajeRespuestaDefensor
    }

}
