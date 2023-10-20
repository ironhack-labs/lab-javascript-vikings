// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(numberDamage) {
        this.health -= numberDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super();
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(numberDamage) {
        this.health -= numberDamage;
        if (this.health > 0) {
            return `${this.name} has received ${numberDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(numberDamage) {
        this.health -= numberDamage;
        if (this.health > 0) {
            return `A Saxon has received ${numberDamage} points of damage`;
        } else {
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
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }

    vikingAttack() {
        let result = this.saxonArmy[
            Math.floor(Math.random() * this.saxonArmy.length)
        ].receiveDamage(
            this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
                .strength
        );

        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (this.saxonArmy[i].health <= 0) {
                this.saxonArmy.splice(i, 1);
            }
        }

        return result;
    }

    saxonAttack() {
        let result = this.vikingArmy[
            Math.floor(Math.random() * this.vikingArmy.length)
        ].receiveDamage(
            this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength
        );
        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (this.vikingArmy[i].health <= 0) {
                this.vikingArmy.splice(i, 1);
            }
        }
        return result;
    }

    genericAttack(oneClass) {
        let attackingClass = oneClass;
        let defendingClass = '';

        if (attackingClass === 'Viking') {
            defendingClass = 'Saxon';
        } else if (attackingClass === 'Saxon') {
            defendingClass = 'Viking';
        } else {
            return "This class doesn't exit or is misspelled";
        }

        let result = this[defendingClass][
            Math.floor(Math.random() * this[defendingClass].length)
        ].receiveDamage(
            this[attackingClass][
                Math.floor(Math.random() * this[attackingClass].length)
            ].strength
        );
        for (let i = 0; i < this[defendingClass].length; i++) {
            if (this[defendingClass][i].health <= 0) {
                this[defendingClass].splice(i, 1);
            }
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        }
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        }
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
