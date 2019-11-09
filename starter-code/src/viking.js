// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    };
    
    attack() {
        return this.strength;
    }
        
    receiveDamage(damage) {
        this.health -= damage;
    };
};

// Viking   
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    };
};

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }
    }
};

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    
    vikingAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if (saxon.health < viking.strength) {
            this.saxonArmy.pop();
            return saxon.receiveDamage(viking.strength);
        } else {
            return saxon.receiveDamage(viking.strength);
        };
    };

    saxonAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if (viking.health - saxon.strength <= 0) {
            this.vikingArmy.pop();
            return viking.receiveDamage(saxon.strength);
        } else {
            return viking.receiveDamage(saxon.strength);
        };
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    };
};