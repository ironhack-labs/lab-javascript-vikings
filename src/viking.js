// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health === 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health === 0) {
            return "A Saxon has died in combat";
        }
    }
}

// War
let viking1 = new Viking("Arthur", 50, 5)
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let ranSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxSoldier = this.saxonArmy[ranSaxon];
    
        let ranViking = Math.floor(Math.random() * this.vikingArmy.length);
        let vikSoldier = this.vikingArmy[ranViking];

        let result = saxSoldier.receiveDamage(vikSoldier.attack());
        if (saxSoldier.health <= 0) {
            this.saxonArmy.splice(ranSaxon, 1);
        }
        return result;
    }
    saxonAttack() {
        let ranSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxSoldier = this.saxonArmy[ranSaxon];
    
        let ranViking = Math.floor(Math.random() * this.vikingArmy.length);
        let vikSoldier = this.vikingArmy[ranViking];

        let result = vikSoldier.receiveDamage(saxSoldier.attack());
        if (vikSoldier.health <= 0) {
            this.vikingArmy.splice(ranViking, 1);
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";2
        }
    }
}
