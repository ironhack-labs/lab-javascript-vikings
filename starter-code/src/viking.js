// Soldier
class Soldier {
    constructor(health, strength){
        this.health = 300;
        this.strength = 150;
        this.attack = function() {
            return this.strength;
        }
        this.receiveDamage = function(damage) {
           this.health -= damage;
        }
    }

}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
