// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    // METODO DE ATAQUE
    attack = () => this.strength

    // METODO DE DAÑO
    receiveDamage = damage => {
        this.health -= damage
    }
}


// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    // METODO DE GRITO
    battleCry = () => "Odin Owns You All!"

    // METODO DE DAÑO
    receiveDamage = (damage) => {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    }

}


// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength)
    }

    // METODO DE DAÑO
    receiveDamage = (damage) => {
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
        let soldierViking
        let soldierSaxon
    }

    randomSoldier = army => {
        if (army == this.vikingArmy) {
            soldierViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            return
        } else {
            this.soldierSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
            return
        }
    }


    // AÑADIR COMBATIENTES
    addViking = viking => {
        this.vikingArmy.push(viking)
        return
    }
    addSaxon = saxon => {
        this.saxonArmy.push(saxon)
    }


    // ATAQUES

    Attack = (victim, attacker) => {

        victim.receiveDamage(attacker.strength)
        if (victim <= 0) {
            victim.splice(victim, 1)
            return `${victim} has died for ${attacker}`
        } else {
            if (victim = this.vikingArmy[randomViking]) {
                return `${victim.name} has received ${attacker.strength} points of damage`
            } else {
                return `Saxon has received ${attacker.strength} points of damage`
            }
        }

    }

    // RECUENTO DE MUERTOS
    showStatus = () => {
        if (this.saxonArmy == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }


}