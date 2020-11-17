// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack () {
        return this.strength;
    };

    receiveDamage (damage) {
        this.health -= damage;
    };
};

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    } 

    receiveDamage(damage) {
        let msg;
        this.health = this.health - damage;
        if (this.health < damage) msg = `${this.name} has died in act of combat`
        else msg = `${this.name} has received ${damage} points of damage`
        return msg;
    }

    battleCry () {
        return 'Odin Owns You All!';
    }
};

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength);
    }

    attack () {
        return this.strength;
    };

    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
        } else {
        return `A Saxon has died in combat`;
        }
    }
};

// War
class War {
    constructor () {
       this.vikingArmy = [];
       this.saxonArmy = [];
    }

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack () {
    
    }

    saxonAttack () {

    }

    showStatus () {
        
    }
}
