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
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
