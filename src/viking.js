// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
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

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0){
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0){
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    randomWarrior(army) {
        const warriorRandomNumber = Math.floor(Math.random() * army.length);
        return [army[warriorRandomNumber], army, warriorRandomNumber];
    }

        warriorAttackDefense(warriorAttack, warriorDefense) {
        
        const soldierAttack = this.randomWarrior(warriorAttack)[0];

        const soldierDF = this.randomWarrior(warriorDefense);

        const soldierDefense = soldierDF[0];
        const soldierDefenseArmy = soldierDF[1];
        const soldierDefensePositionArray = soldierDF[2];

        const result = soldierDefense.receiveDamage(soldierAttack.strength);

        if (soldierDefense.health <= 0) {
            soldierDefenseArmy.splice(soldierDefensePositionArray,1);
        }
        
        return result;
    }


    vikingAttack() {
        return this.warriorAttackDefense(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.warriorAttackDefense(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
