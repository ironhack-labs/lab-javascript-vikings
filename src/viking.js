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
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage; 
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier { 
    constructor (health, strength) {
        super (health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

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
        // take random saxon and viking 
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // define attack power
        const vikingAttackPower = randomViking.strength;
        // calculate the damage 
        const saxonDamage = randomSaxon.receiveDamage(vikingAttackPower);
        // if dead remove
        this.saxonArmy = this.saxonArmy.filter(function (saxon) { return saxon.health > 0; });;
        return saxonDamage;
    }
    saxonAttack() {
        // take random saxon and viking 
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // define attack power
        const saxonAttackPower = randomSaxon.strength;
        // calculate the damage
        const vikingDamage = randomViking.receiveDamage(saxonAttackPower);
        // if dead remove
        this.vikingArmy = this.vikingArmy.filter(function (viking) { return viking.health > 0; });;
        return vikingDamage;    
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
/*
const war = new War();
war.addViking(new Viking("john", 80, 50))
war.addViking(new Viking("bella", 120, 50))
war.addSaxon(new Saxon(100, 30))
war.addSaxon(new Saxon(120, 30))
war.addSaxon(new Saxon(90, 30))
console.log(war.vikingAttack())
console.log(war.vikingAttack())
*/