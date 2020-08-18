// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage (damage) {
       this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack () {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
     }
     battleCry() {
        return "Odin Owns You All!"
     }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        } if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
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
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let randViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxSoldier = this.saxonArmy[randSaxon];
        let vikSoldier = this.vikingArmy[randViking];
        let receivedDamage = saxSoldier.receiveDamage(vikSoldier.strength);
        if (saxSoldier.health <= 0){
            this.saxonArmy.splice(randSaxon, 1);
        }
        return receivedDamage
    };

    saxonAttack() {
        let randViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxSoldier = this.saxonArmy[randSaxon];
        let vikSoldier = this.vikingArmy[randViking];
        let receivedDamage = vikSoldier.receiveDamage(saxSoldier.strength);
        if (vikSoldier.health <= 0){
            this.vikingArmy.splice(randViking, 1);
        }
        return receivedDamage
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } 
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        }
        return `Vikings and Saxons are still in the thick of battle.`
    } 
}
