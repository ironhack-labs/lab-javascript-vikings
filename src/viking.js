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
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super (health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
        
    }

    addViking(Viking) {
        this.vikingArmy = this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy = this.saxonArmy.push(Saxon);

    }

    vikingAttack() {
        receiveDamage(damage)
        damage = this.strength;
        this.saxonArmy = this.saxonArmy.pop(Saxon);
        
    }

    saxonAttack() {
        receiveDamage(damage) 
        damage = this.strength;
        this.vikingArmy = this.vikingArmy.pop(Viking);
        

    }
    showStatus() {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";

        }
        else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }

}
