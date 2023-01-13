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
        this.health = this.health - damage
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
    receiveDamage (damage) {
        this.health = this.health - damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []

addViking (Viking) {
 this.vikingArmy.push(Viking)
}

addSaxon (Saxon) {
    this.saxonArmy.push(Saxon)
}

vikingAttack (){
    const saxonIndex = [Math.floor(Math.random() * this.saxonArmy.length)]
    const vikingIndex = [Math.floor(Math.random() * this.vikingArmy.length)]
   /*  const fightingSaxon = this.saxonArmy[saxonIndex]
    const fightingViking = this.vikingArmy[vikingIndex] */
    const result = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength)
    if (this.saxonArmy[saxonIndex].health <= 0){
        this.saxonArmy.pop(saxonIndex)
    }
    return result
}

saxonAttack () {
    const vikingIndex = [Math.floor(Math.random() * this.vikingArmy.length)]
    const saxonIndex = [Math.floor(Math.random() * this.saxonArmy.length)]
    const result = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength)
    if (this.vikingArmy[vikingIndex].health <= 0){
        this.vikingArmy.pop(vikingIndex)
    }
    return result
}

showStatus () {
    if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
    }
    else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
        return "Vikings and Saxons are still in the thick of battle."
    }
}
}

