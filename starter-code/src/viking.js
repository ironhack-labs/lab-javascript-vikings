// // Soldier
class Soldier {
    
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack = () => {
        return this.strength;
    }
    receiveDamage = (damage) => {
        this.health -= damage;
    }
}

class Viking {}

class Saxon {}

class War {}


