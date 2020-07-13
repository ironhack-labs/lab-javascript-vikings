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
        super(health, strength);
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
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {

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

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
        let damageSaxon = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return damageSaxon;
    }

    saxonAttack() { // Same as vikingAttack but the other way around
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
        let damageViking = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return damageViking;
    }
    
    showStatus() {
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
        else if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!'
        }
        else {
            return 'Saxons have fought for their lives and survived another day...'
        }
    }

    // Super Bonus. I tried avoiding any specific names and working with attacking and defending armies. Not confident at all that it would work like this. 

    genericAttack(attackerArray) {
        
        if (attackerArray == this.vikingArmy) {
            defenderArray == this.saxonArmy;
        }
        else {
            defenderArray = this.vikingArmy;
        }

        let randomAttacker = this.attackerArray[Math.floor(Math.random() * this.attackerArray.length)];
        let randomDefender = this.defenderArray[Math.floor(Math.random() * this.defenderArray.length)];

        let damageAttacker = randomAttacker.receiveDamage(randomDefender.strength);

        if (damageAttacker.health <= 0) {
            this.attackerArray.splice(randomAttacker, 1);
        }
        return damageAttacker;
    }

    genericAttack(vikingArmy); // -> This would be the way of calling the attacking army, but I got the feeling this wouldn't work (because of missing 'this.', but when I implement that, it gives an error.)
    genericAttack(saxonArmy);
}

