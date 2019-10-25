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
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry() {
        return `Odin Owns You All!`
    }
};

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
};

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];        
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];  
        let damaging = randomSaxon.receiveDamage(randomViking.strength);
        randomSaxon.health <= 0 ?  this.saxonArmy.splice(randomSaxon,1) : null;
        return damaging;    
    }

    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];        
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let damaging = randomViking.receiveDamage(randomSaxon.strength);
        randomViking.health <= 0 ? this.vikingArmy.splice(randomViking,1) : null;
        return damaging; 
    }

    showStatus() {
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }       
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        }
        else if (this.saxonArmy.length === 0) {           
            return "Vikings have won the war of the century!";
        }        
    } 
};