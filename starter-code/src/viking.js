// Soldier

function Soldier(health, strength) {
    this.health = health
    this.strength = strength
    this.attack = () => {
        return this.strength
    }
    this.receiveDamage = damage => {
        this.health -= damage
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name
    this.health = health
    this.strength = strength
    this.receiveDamage = damage => {
        this.health -= damage
        console.log("%c" + `Remaining health ${this.health}`, 'background-color: goldenrod; color: white; border-radius: 3px; padding: 2px 5px;')
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        else return `${this.name} has died in act of combat`
    }
    this.battleCry = () => "Odin Owns You All!"
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
    this.health = health
    this.strength = strength
    this.receiveDamage = damage => {
        this.health -= damage
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }
}

// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
    this.addViking = viking => { this.vikingArmy.push(viking) }
    this.addSaxon = saxon => { this.saxonArmy.push(saxon) }
    this.vikingAttack = Viking => {
        var chosenSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        var combatResult = this.saxonArmy[chosenSaxon].receiveDamage(Viking.strength)
        if (combatResult === `A Saxon has died in combat`) {
            this.saxonArmy.splice(chosenSaxon, 1)
        }
        return combatResult
    }
    this.saxonAttack = Saxon => {
        var chosenViking = Math.floor(Math.random() * this.vikingArmy.length)
        var combatResult = this.vikingArmy[chosenViking].receiveDamage(Saxon.strength)
        if (combatResult === `${this.vikingArmy[viking].name} has died in act of combat`) {
            this.vikingArmy.splice(chosenViking, 1)
        }
        return combatResult
    }

    this.saxonAttack = () => { }
    this.showStatus = () => { }
}
