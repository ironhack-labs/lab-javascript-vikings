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
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
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
            let oneSaxon = [Math.floor(Math.random() * this.saxonArmy.length)]
            let oneViking = [Math.floor(Math.random() * this.vikingArmy.length)]
            
            let attack = oneSaxon.receiveDamage = (oneViking.strength);
            this.saxonArmy = this.saxonArmy.filter(Saxon => Saxon.health = 0);
            return attack;
        }

        saxonAttack() {
            let oneViking = [Math.floor(Math.random() * this.vikingArmy.length)]
            let oneSaxon = [Math.floor(Math.random() * this.saxonArmy.length)]

            let attack = oneViking.receiveDamage = (oneSaxon.strength);
            this.vikingArmy = this.vikingArmy.filter(Viking => Viking.health = 0);
            return attack;
        }

        showStatus() {
            if (this.saxonArmy.length <= 0) {
                return "Vikings have won the war of the century!";
            } else if (this.vikingArmy.length <= 0) {
                return "Saxons have fought for their lives and survived another day...";
            } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
                return "Vikings and Saxons are still in the thick of battle."
            }
        }
}
