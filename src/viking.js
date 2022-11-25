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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    attack() {
        return super.attack();
    }

    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return super.attack();
    }

    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
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
        let saxonSoldier = this.saxonArmy[parseInt(Math.random() * this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[parseInt(Math.random() * this.vikingArmy.length)];
        let saxonHealth = saxonSoldier.receiveDamage(vikingSoldier.attack());

        if (saxonSoldier.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSoldier), 1);
        }

        return saxonHealth;

    }

    saxonAttack() {
        let saxonSoldier = this.saxonArmy[parseInt(Math.random() * this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[parseInt(Math.random() * this.vikingArmy.length)];
        let vikingHealth = vikingSoldier.receiveDamage(saxonSoldier.attack());

        if (vikingSoldier.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSoldier), 1);
        }

        return vikingHealth;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
