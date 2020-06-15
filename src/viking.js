// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack = () => {
        return this.strength
    }

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

    receiveDamage = (damage) => {
        this.health -= damage
        if (this.health > 0) {
            return this.name + ' has received ' + damage + ' points of damage'
        }
        else {
            return this.name + ' has died in act of combat'
        }
    }

    battleCry = () => {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage = (damage) => {
        this.health -= damage
        if (this.health > 0) {
            return 'A Saxon has received ' + damage + ' points of damage'
        }
        else {
            return 'A Saxon has died in combat'
        }
    }

}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking = (viking) => {
        this.vikingArmy.push(viking)
    }

    addSaxon = (saxon) => {
        this.saxonArmy.push(saxon)
    }

    vikingAttack = () => {
        let randomSax = Math.floor(Math.random() * this.saxonArmy.length)
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length)
        console.log(randomVik)
        let stat = this.saxonArmy[randomSax].receiveDamage(this.vikingArmy[randomVik].strength)
        let newArr = this.saxonArmy.filter(function (sax) {
            if (sax.health > 0) {
                return sax
            }
        })
        this.saxonArmy = newArr
        return stat
    }

    saxonAttack = () => {
        let randomSax = Math.floor(Math.random() * this.saxonArmy.length)
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length)
        let bc = this.vikingArmy[randomVik].receiveDamage(this.saxonArmy[randomSax].strength)
        let newArr = this.vikingArmy.filter(function (vik) {
            if (vik.health > 0) {
                return vik
            }
        })
        this.vikingArmy = newArr
        return bc
    }

    showStatus = () => {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
