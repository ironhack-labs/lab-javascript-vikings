// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
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
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
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
        if (this.health <= 0) {
            return 'A Saxon has died in combat';
        } else {
            return `A Saxon has received ${damage} points of damage`;
        };    
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
        let result = this.attack(this.vikingArmy, this.saxonArmy);
        return result;
    }

    saxonAttack(){
        let result = this.attack(this.saxonArmy, this.vikingArmy);
        return result;
    }

    showStatus(){
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

// SUPER BONUS
    attack(attackingArmy, defendingArmy) {
        let defendingSoldierIndex = Math.round((Math.random()*(defendingArmy.length-1)));
        let defendingSoldier = defendingArmy[defendingSoldierIndex];
        let attackingSoldier = attackingArmy[Math.round((Math.random()*(attackingArmy.length-1)))];
        let damageReceived = defendingSoldier.receiveDamage(attackingSoldier.strength);
        if (defendingSoldier.health <= 0) {
            defendingArmy.splice(defendingSoldierIndex);
        }
        return damageReceived;
    }
}

