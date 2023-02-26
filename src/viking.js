// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        this.damage;
    }
    attack() {
        return this.strength; 
        
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (name, health, strength);
        this.name = name;
        this.health = health; 
        this.strength = strength;
    }
    battleCry () {
        return 'Odin Owns You All!';
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > damage) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }   
    }
    
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super (health, strength)
        this.health = health;
        this.strength = strength;
    }
    // attack() {
    //    return this.strength;
    // }
    // No need to add this method due to the inheritance
    receiveDamage (damage) {
        this.health = this.health - damage;
        if (this.health > damage) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {}
