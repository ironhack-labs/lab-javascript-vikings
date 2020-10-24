// Soldier
class Soldier {
    constructor (health, strength) {
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
        super (health, strength);
        this.name = name;
    };
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        };
    };
    battleCry () {
        return `Odin Owns You All!`;
    };
};

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        };
    };
};

// War
class War {
    constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
    };

    addViking (viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    };
    vikingAttack () {
        let randomIndVik = Math.round(Math.random(this.vikingArmy.length-1) * 10);
        const vikingAttack = this.vikingArmy[randomIndVik].attack();
        let randomIndSax = Math.round(Math.random(this.saxonArmy.length-1) * 10);
        const saxonDamage = this.saxonArmy[randomIndSax].receiveDamage(vikingAttack); 
        const newSaxonArmy = this.saxonArmy.filter(saxon => saxon.health <= 0);
        this.saxonArmy = newSaxonArmy;
        return saxonDamage;
    };
    saxonAttack () {
        let randomIndSax = Math.round(Math.random(this.saxonArmy.length-1) * 10);
        const saxonAttack = this.saxonArmy[randomIndSax].attack();
        let randomIndVik = Math.round(Math.random(this.vikingArmy.length-1) * 10);
        const vikingDamage = this.vikingArmy[randomIndVik].receiveDamage(saxonAttack); 
        const newVikingArmy = this.vikingArmy.filter(viking => viking.health <= 0);
        this.vikingArmy = newVikingArmy;
        return vikingDamage;   
    };
};

