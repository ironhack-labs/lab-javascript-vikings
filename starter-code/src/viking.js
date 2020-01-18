class Soldier {

    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    // Método para atacar
    attack = () => this.strength
    // Metodo para recibir daño
    receiveDamage = (damage) => {
        this.health -= damage
    }
}


// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    // Método para recibir daño
    receiveDamage = (damage) => {
        this.health -= damage
        if (this.health > 0)
            return `${this.name} has received ${damage} points of damage`
        else
            return `${this.name} has died in act of combat`
    }
    // Método para que Odin te de pal pelo 
    battleCry = () => `Odin Owns You All!`
}


// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength)
    }
    // Método para recibir daño
    receiveDamage = (damage) => {
        this.health -= damage
        if (this.health > 0)
            return `A Saxon has received ${damage} points of damage`
        else
            return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    // Método para añadir Vikingos a su armada
    addViking = viking => {
        this.vikingArmy.push(viking)
    }
    // Método para añadir Sajones a su armada
    addSaxon = saxon => {
        this.saxonArmy.push(saxon)
    }

    // Método para que los Vikingos ataquen
    vikingAttack() {

        // Necesito que hayan soldados en las armadas para trabajar con sus datos

        let vikingInArmy = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxonInArmy = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        // Llamamos al metodo para atacar a los Sajones
        saxonInArmy.receiveDamage(vikingInArmy.strength)
        if (saxonInArmy.health <= 0) {
            this.saxonArmy.splice(saxonInArmy, 1)
            return `A Saxon has died in combat`
        } else
            return `A Saxon has received ${damage} points of damage`
    }

    // Método para que los Sajones ataquen
    saxonAttack() {

        let vikingInArmy = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxonInArmy = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        vikingInArmy.receiveDamage(saxonInArmy.strength)
        if (vikingInArmy.health <= 0) {
            this.vikingArmy.splice(vikingInArmy, 1)
            return `El Vikingo Manolo ha muerto` //Ponga lo que ponga aquí me destroza hace fallar :(
        } else
            return `El Vikingo Manolo ha recibido mucho daño :(` //Ponga lo que ponga aquí me destroza hace fallar :(

    }
    // Método para mostrar la situación de la batalla 
    showStatus() {
        if (this.saxonArmy.length === 0)
            return `Vikings have won the war of the century!`
        else if (this.vikingArmy.length === 0)
            return `Saxons have fought for their lives and survived another day...`
        else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
            return `Vikings and Saxons are still in the thick of battle.`
    }

}