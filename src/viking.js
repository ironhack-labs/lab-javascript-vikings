// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }
}
Soldier.prototype.attack = function () {
    return this.strength
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage = function (damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = function () {
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage = function (damage) {
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
        this.vikingArmy = [],
        this.saxonArmy = []
    }
    let addViking = function (Viking) {
        let newVik = new Viking
        this.vikingArmy.push(newVik)
    }
    let addSaxon = function (Saxon) {
        let newSax = new Saxon
        this.saxonArmy.push(newSax)
        
    }
    let vikingAttack = function() {
    
        let randomPick = (array) => {
        let num = Math.floor(Math.random() * (array.length))
            return array[num]
        }
        
        let randomVik = randomPick(this.saxonArmy)
        let randomSax = randomPick(this.vikingArmy)
        
        randomSax.receiveDamage = function(randomVik){
            randomSax.health -= randomVik.strength
            if (randomSax.health <= 0) {
                (this.saxonArmy.filter(item => item.health <= 0))
            } 
    }

    return receiveDamage((randomPick(this.vikingArmy)))

}
    let saxonAttack = function() {
    
        let randomPick = (array) => {
        let num = Math.floor(Math.random() * (array.length))
            return array[num]
        }
        
        let randomVik = randomPick(this.saxonArmy)
        let randomSax = randomPick(this.vikingArmy)
        
        randomVik.receiveDamage = function(randomSax){
            randomVik.health -= randomSax.strength
            if (randomVik.health <= 0) {
                (this.vikingArmy.filter(item => item.health <= 0))
            } 
    }

    return receiveDamage((randomPick(this.saxonArmy)))

}
    let showStatus = function() {
        if (saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (saxonArmy.length > 0 && vikingArmy > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }    
    }

}