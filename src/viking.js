// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
    return this.strength

    }

    receiveDamage(damage) {    
    this.health -= damage;
    }
    
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name, health);  
        this.name= name;
        this.health= health;
        this.strength= strength;      
    }
    attack() {
        return this.strength
}
    receiveDamage(damage) {
        this.health -= damage;
       if (damage < this.health) {
           return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);  
        this.health= health;
        this.strength= strength; 
        this.name = Saxon;     
    }
    attack() {
        return this.strength
}
    receiveDamage(damage) {
        this.health -= damage;
    if (damage < this.health) {
        return `A ${this.name} has received ${damage} points of damage`;
     } else {
         return `A ${this.name} has died in combat`;
     }
}
}

// War
class War {}
