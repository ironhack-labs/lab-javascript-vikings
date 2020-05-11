// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack = function() {
        return this.strength;
        }
    receiveDamage = function(damage) {
        this.health -= damage;
        }
}
// // Viking
class Viking  extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage = function(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }else if (this.health === 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry =  function() {
        return `Odin Owns You All!`
    }
}
//Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    attack = function() {
        return this.strength
    }
    receiveDamage = function(damage) {
        this.health -= damage
    if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }else if (this.health === 0) {
            return `A Saxon has died in combat`
        } 
    }
}

// War
class War extends Soldier {
    vikingArmy = []
    saxonArmy = []
    addViking = function(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }
    addSaxon = function(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }
    vikingAttack = function() {
       let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
       let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
       randomSaxon === randomViking;
       this.saxonArmy -= saxonObject
    }
}
