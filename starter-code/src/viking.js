// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg,
        this.strength = strengthArg,
        this.attack = function () {
            return this.strength
        }
        this.receiveDamage = function (theDamage) {
            this.health -= theDamage
        }
    }
}



// Viking
class Viking {
    constructor(name, heath, strength) {
        this.name = name,
        this.health = health,
        this.strength = strength
    }
}

// Saxon
class Saxon {}

// War
class War {}
