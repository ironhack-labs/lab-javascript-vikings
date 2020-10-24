// Soldier
class Soldier {
    health;
    strength;

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
    name;
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }

        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        if(this.health > 0) {
            return 'A Saxon has received ${damage} points of damage';
        }

        return 'A Saxon has died in combat';
    }
}

// War
class War {
    vikingArmy;
    saxonArmy;

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
        let damage = this.vikingArmy.first().attack()

        this.saxonArmy.forEach(saxon => {
                saxon.receiveDamage(damage);
            }
        )

        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    }

    saxonAttack() {
        let damage = this.saxonArmy.first().attack();

        this.vikingArmy.forEach(viking => {
                viking.receiveDamage(damage);
            }
        )

        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    }

    showStatus() {
        const areVikingsAlive = this.vikingArmy.length > 0;
        const areSaxonsAlive = this.saxonArmy.length > 0;

        if (areVikingsAlive && areSaxonsAlive) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }

        if (!areVikingsAlive) {
            return 'Saxons have fought for their lives and survived another day...';

        }

        if (!areSaxonsAlive) {
            return 'Vikings have won the war of the century!';
        }
    }
}
