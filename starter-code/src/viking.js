// Soldier
function Soldier(health, strength) {
    this.health = 300
    this.strength = 150
    this.attack = function () {
        return this.strength
    }
    this.receiveDamage = function (damage) {
        this.health -= damage
    }
}

// Viking
function Viking(name, health, strength) {
    this.name = name
    this.health = health
    this.strength = strength
    this.attack = function attack() {
        return this.strength
    }
    this.receiveDamage = function (damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has did in act of combat`
        }
    }
    this.battleCry = function battleCry() {
        return "Odin Owns You All!"
    }

}
Viking.prototype = Object.create(Soldier.prototype)

// Saxon


function Saxon(health, strength) {
    this.health = health
    this.strength = strength
    this.attack = function () {
        return this.strength
    }
    this.receiveDamage = function (damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }


}
Saxon.prototype = Object.create(Soldier.prototype)

function War() {

    this.vikingArmy = []
    this.saxonArmy = []
    this.addViking = function (Viking) {
        this.vikingArmy.push(Viking)
    }
    this.addSaxon = function (Saxon) {
        this.saxonArmy.push(Saxon)
    }
    this.vikingAttack = function () {
        const randomS = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomV = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const putazo = randomS.receiveDamage(randomV.strength)
        const indice = this.saxonArmy.indexOf(randomS)

        if (randomS.health <= 0) {
            this.saxonArmy.splice(indice, 1)
        }
        return putazo
    }
    this.saxonAttack = function () {
        const randomS = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomV = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const putazo2 = randomV.receiveDamage(randomS.strength)
        const indice = this.vikingArmy.indexOf(randomS.strength)

        if (randomV.health <= 0) {
            this.vikingArmy.splice(indice, 1)
        }
        return putazo2

    }
    this.showStatus = function () {
        if (this.saxonArmy <= 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy <= 0) {
            return 'Saxons have fought for their lives and survive another day...'
        } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }

    }

}






// War