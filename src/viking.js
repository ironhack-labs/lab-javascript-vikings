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
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
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

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let resultWar;
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            let randomSaxon = Math.floor(Math.random(this.saxonArmy.length));
            let selectedSaxon = this.saxonArmy[randomSaxon];
            let randomViking = Math.floor(Math.random(this.vikingArmy.length));
            let selectedViking = this.vikingArmy[randomViking];
            resultWar = selectedSaxon.receiveDamage(selectedViking.strength);

            if (selectedSaxon.health <= 0) {
                this.saxonArmy.splice(randomSaxon);
            }
        }
        return resultWar;

    }
    saxonAttack() {
        let resultWar;
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            let randomSaxon = Math.floor(Math.random(this.saxonArmy.length));
            let selectedSaxon = this.saxonArmy[randomSaxon];
            let randomViking = Math.floor(Math.random(this.vikingArmy.length));
            let selectedViking = this.vikingArmy[randomViking];
            resultWar = selectedViking.receiveDamage(selectedSaxon.strength);

            if (selectedViking.health <= 0) {
                this.vikingArmy.splice(randomViking);
            }
        }
        return resultWar;
    }

    showStatus() {
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        } else if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else {
            return `Saxons have fought for their lives and survived another day...`
        }
    }
}