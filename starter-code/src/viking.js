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
    vikingAttack = () => {

        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
            return 'A Saxon has died in combat'
        } else {
            return `Saxon has received ${this.vikingArmy[randomViking].strength} points of damage`
        }
    }

    saxonAttack = () => {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
            return
        } else {
            return `${this.vikingArmy[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`
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