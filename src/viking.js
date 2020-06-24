// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    getHealth() {
        return this.health;
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
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
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

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {

        const randomSaxonIdx = Math.floor(Math.random() * this.vikingArmy.length);
        const randomVikingStrength = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const damageDone = this.saxonArmy[randomSaxonIdx].receiveDamage(randomVikingStrength.attack());

        if (this.saxonArmy[randomSaxonIdx].getHealth() <= 0) {
            this.saxonArmy.splice(randomSaxonIdx, 1);
        }
        return damageDone;
    }


    saxonAttack() {
        const randomVikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonStrength = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const damageDone = this.vikingArmy[randomVikingIdx].receiveDamage(randomSaxonStrength.attack());

        if (this.vikingArmy[randomVikingIdx].getHealth() <= 0) {
            this.vikingArmy.splice(randomVikingIdx, 1);
        }
        return damageDone;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length >= 1 || this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}