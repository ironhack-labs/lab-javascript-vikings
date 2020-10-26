// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
     {
            return this.strength;
        }
    }
    receiveDamage(damage) {
 {
this.health = this.health - damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    } vikReceiveDamage(damage) {
        this.health = this.health - damage;
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    } 
    
    battleCry() {
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    saxReceiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A saxon has received ${damage} points of damage`
        } else {
            return ` A Saxon has died in combat`;
        }
    }
}
    



// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking() {
        this.vikingArmy += 1;
    }
    addSaxon() {
        this.saxonArmy += 1;
    }
    vikingAttack() {
        saxReceiveDamage = viking.strength;
        if (saxon.this.health = 0) {
            saxonArmy - 1;
        } return saxReceiveDamage(damage) = viking.this.strength;
    }
    saxonAttack() {
        vikReceiveDamage(damage) = saxon.this.strength;
        if (viking.this.health = 0) {
            vikingArmy - 1;
            return vikReceiveDamage(damage) = saxon.this.strength;
        }
    }
    showStatus() {
if (this.saxonArmy === 0) {
    return "Vikings have won the war of the century!";
} else if (this.vikingArmy === 0) {
    return "Saxons have fought for their lives and survived another day...";
} else if (this.vikingArmy && this.saxonArmy === 1) {
    return "Vikings and Saxons are still in the thick of battle.";
} else {
    return null;
}
    }
}
 
