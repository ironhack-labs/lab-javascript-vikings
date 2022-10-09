// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage){
        this.theDamage = theDamage
        this.health += (this.health - theDamage)
            }
};

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
