// Soldier
class Soldier {
    constructor (health, strength) {
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
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            let result = `${this.name} has received ${damage} points of damage`
            return result;
        }  else {
            let result = `${this.name} has died in act of combat`;
            return result;
        }
    }

    battleCry () {
        return "Odin Owns You All!";
    };
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            let result = `A Saxon has received ${damage} points of damage`
            return result;
        }  else {
            let result = `A Saxon has died in combat`;
            return result;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingUnit) {
        this.vikingArmy.push(vikingUnit);
    }

    addSaxon(saxonUnit) {
        this.saxonArmy.push(saxonUnit);
    }

    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let vikingStrength = randomViking.strength;
        let result = randomSaxon.receiveDamage(vikingStrength);
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
        return result;
    }

    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let saxonStrength = randomSaxon.strength; 
        let result = randomViking.receiveDamage(saxonStrength);
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
 
}
