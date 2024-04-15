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
        // const HealtFinal = this.health - damage
        this.health -= damage

    }
}



// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
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
        this.vikingArmy = []
        this.saxonArmy = []
    }


    //Añadir Ejércitos
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }

    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }


    //---------------------------------------------------------------------------
    //Generar soldados random y remove soldados muertos

    selectRandomWarrior(warrriorArray) {
        const randomWarrior = Math.floor(Math.random() * warrriorArray.length)
        return warrriorArray[randomWarrior] //retorno un guerrero al azar 
    }

    removeDiedWarriors(warrriorArray) {
        for (let i = 0; i < warrriorArray.length; i++) {
            if (warrriorArray[i].health <= 0) { //En caso de que el soldado tenga menos de 0 de vida
                warrriorArray.splice(i, 1) //le eliminamos desde la posición en la que se encuentre
                i-- // En caso de que haya un soldado eliminado deberemos de restar uno para equilibrar el .length
            }
        }
    }
    //------------------------------------------------------------------------------


    vikingAttack() {
        const randomSaxon = this.selectRandomWarrior(this.saxonArmy)
        const randomViking = this.selectRandomWarrior(this.vikingArmy)
        const resultCombat = randomSaxon.receiveDamage(randomViking.strength)
        this.removeDiedWarriors(this.saxonArmy)
        return resultCombat
    }

    saxonAttack() {
        const randomSaxon = this.selectRandomWarrior(this.saxonArmy)
        const randomViking = this.selectRandomWarrior(this.vikingArmy)
        const resultCombat = randomViking.receiveDamage(randomSaxon.strength)
        this.removeDiedWarriors(this.vikingArmy)
        return resultCombat
    }
    showStatus() {
        if (this.saxonArmy.length === 0 && this.vikingArmy.length !== 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0 && this.saxonArmy.length !== 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
