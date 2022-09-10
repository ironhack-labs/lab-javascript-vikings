// Soldier
class Soldier {
    constructor (health, strength) {
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
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength);
        
    }
    receiveDamage (damage) {
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
        
        let vikingNum = Math.floor(Math.random()*this.vikingArmy.length);
        let saxonNum = Math.floor(Math.random()*this.saxonArmy.length);
        
       // this.saxonArmy[saxonNum].receiveDamage(this.vikingArmy[vikingNum]['strength']);
        if (this.saxonArmy[saxonNum].receiveDamage(this.vikingArmy[vikingNum]['strength']).includes('died')) { // === `A Saxon has died in combat`) {
            this.saxonArmy.splice(saxonNum, 1);
        }
        return this.saxonArmy[saxonNum].receiveDamage(this.vikingArmy[vikingNum]['strength']);
    }
    saxonAttack () {
        let vikingNum = Math.floor(Math.random()*this.vikingArmy.length);
        let saxonNum = Math.floor(Math.random()*this.saxonArmy.length);
        
       // this.vikingArmy[vikingNum].receiveDamage(this.saxonArmy[saxonNum]['strength']);
        if (this.vikingArmy[vikingNum].receiveDamage(this.saxonArmy[saxonNum]['strength']).includes('died')) {
            this.vikingArmy.splice(vikingNum, 1);
        }
        return this.vikingArmy[vikingNum].receiveDamage(this.saxonArmy[saxonNum]['strength']);
    }
    showStatus () {

    }
}
