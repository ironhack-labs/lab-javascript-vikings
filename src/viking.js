// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(dmg) {
        this.health -= dmg; 
    }

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(dmg) {
        super.receiveDamage(dmg);

        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(dmg) {
        super.receiveDamage(dmg)
        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`
        } else {
            return 'A Saxon has died in combat'
        }
    }

}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }
    
    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    attack(attackingTroop, damagedTroop) {
        let attackerIndex = Math.floor(Math.random() * attackingTroop.length);
        let recieverIndex = Math.floor(Math.random() * damagedTroop.length);
        let randomAttacker = attackingTroop[attackerIndex];
        let randomReciever = damagedTroop[recieverIndex];
        let attackResult = randomReciever.receiveDamage(randomAttacker.attack());
        if (randomReciever.health <= 0) {
            damagedTroop.splice(randomReciever, 1);
        }
        return attackResult;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
