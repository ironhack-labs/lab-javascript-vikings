// Soldier
class Soldier {
    
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }
}
Soldier.prototype.attack = function() {
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
}
// Viking
class Viking extends Soldier { 

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health <= 0) { return `${this.name} has died in act of combat`}
        return `${this.name} has received ${damage} points of damage`
    }
    
    battleCry() {
        return `Odin Owns You All!`
    }
    
}

// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health <= 0) { return `A Saxon has died in combat`}
        return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {}
