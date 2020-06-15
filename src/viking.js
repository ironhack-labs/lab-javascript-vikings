// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
  }

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        this.name = name;
        super(health, strength);    
    }
}

// Saxon
class Saxon {}

// War
class War {}
