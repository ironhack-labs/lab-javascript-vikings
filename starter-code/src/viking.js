// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    // Retorna un numero igual al ataque del soldado
    attack() {
        return this.strength
    }
    // Baja la vida el numero de puntos del argumento
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
    // Comprueba si el argumento recibido ha bajado la vida a 0 o menos (muerto)
    // o si solo ha quitado puntos de vida por encima de 0
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    // Grito de batalla
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    // Comprueba si el argumento recibido ha bajado la vida a 0 o menos (muerto)
    // o si solo ha quitado puntos de vida por encima de 0
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return "A Saxon has died in combat"
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
    // Añade un viking al array
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj)
    }
    // Añade un saxon al array
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack() {
        // Escoger saxon y viking aleatorio
        let saxonAlt = this.saxonArmy[Math.round(Math.random() * (this.saxonArmy.length - 1))]
        let vikingAlt = this.vikingArmy[Math.round(Math.random() * (this.vikingArmy.length - 1))]

        // Recibir daño igual al ataque del vikingo
        let damage = vikingAlt.strength
        saxonAlt.receiveDamage(damage)

        // Verificar si el saxon ha muerto para eliminarlo del array
        if (saxonAlt.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonAlt, 1))
            return "A Saxon has died in combat"
        } else {
            return "A Saxon has not died in combat"
        }

        // Pruebas
        // console.log("Saxon")
        // console.log(saxonAlt)
        // console.log(saxonAlt.health)
        // console.log(vikingAlt.strength)
        // console.log("Viking")
        // console.log(vikingAlt)
        // console.log(this.saxonArmy)
    }

    saxonAttack() {
        // Escoger saxon y viking aleatorio
        let saxonAlt = this.saxonArmy[Math.round(Math.random() * (this.saxonArmy.length - 1))]
        let vikingAlt = this.vikingArmy[Math.round(Math.random() * (this.vikingArmy.length - 1))]

        // Recibir daño igual al ataque del saxon
        let damage = saxonAlt.strength
        vikingAlt.receiveDamage(damage)

        // Verificar si el vikingo ha muerto para eliminarlo del array
        if (vikingAlt.health <= 0) {
            this.vikingArmy.splice(this.saxonArmy.indexOf(saxonAlt, 1))
        } else {
            return `${vikingAlt.name} has received ${saxonAlt.strength} points of damage`
        }
    }

    showStatus() {
        // Comprueba el estado de los arrays y da resultado segun se encuentren 
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}