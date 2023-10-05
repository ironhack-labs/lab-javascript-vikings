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

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let vikingRamdom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonRamdom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let attackk = saxonRamdom.receiveDamage(vikingRamdom.strength);
        if (saxonRamdom.health <= 0) {
            this.saxonArmy.splice(vikingRamdom)
        }

        return attackk

    }



    saxonAttack() {
        let vikingRamdom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonRamdom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let attackk = vikingRamdom.receiveDamage(saxonRamdom.strength);
        if (vikingRamdom.health <= 0) {
            this.vikingArmy.splice(vikingRamdom)
        }

        return attackk

    }

    showStatus() {

        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        } else if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
