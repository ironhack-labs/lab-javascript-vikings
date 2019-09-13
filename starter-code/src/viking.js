// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
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
        super(health, strength)
        this.name = name
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
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return "A Saxon has died in combat";
        }
    }
}
// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy= [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let damagedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let battle = damagedSaxon.receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        if(damagedSaxon.health <= 0) {
            this.saxonArmy.splice(damagedSaxon, 1);
        }
        return battle;
    }
    saxonAttack() {
        const damagedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let battle2 = damagedViking.receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        if(damagedViking.health <= 0) {
            this.vikingArmy.splice(damagedViking, 1);
        }
        return battle2;
            
    }
         
    
    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
            
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";

        }

        }
    
    }

/**
var rand = myArray[Math.floor(Math.random() * myArray.length)];
 vikingAttack() method
1.A Saxon (chosen at random) 
2. has their receiveDamage() method called 
3. with the damage equal to the strength of a Viking 4. (also chosen at random). 
This should only perform a single attack and the Saxon doesn't get to attack back.

should be a function
should receive 0 arguments
should make a Saxon receiveDamage() equal to the strength of a Viking
should remove dead saxons from the army
should return result of calling receiveDamage() of a Saxon with the strength of a Viking
 
**/