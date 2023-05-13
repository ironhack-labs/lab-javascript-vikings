// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;

    };
    receiveDamage(theDamage) {
        this.health -= theDamage;
    };
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;


    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
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
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
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
    //
    //- should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
    vikingAttack() {
        const randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const viking = this.vikingArmy[randomIndex];
        const randomIndex2 = Math.floor(Math.random() * this.saxonArmy.length);
        const saxon = this.saxonArmy[randomIndex2];

        if (saxon.health <= viking.strength) {
            this.saxonArmy.splice(randomIndex2, 1);
        }
        const vikingSoldier = new Viking(viking.name, viking.health, viking.strength);
        const damage = vikingSoldier.attack();
        const saxonSoldier = new Saxon(saxon.health, saxon.strength);
        return saxonSoldier.receiveDamage(damage);

    }
    saxonAttack() {
        const randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const viking = this.vikingArmy[randomIndex];
        const randomIndex2 = Math.floor(Math.random() * this.saxonArmy.length);
        const saxon = this.saxonArmy[randomIndex2];

        if (viking.health <= saxon.strength) {
            this.vikingArmy.splice(randomIndex, 1);
        }
        const vikingSoldier = new Viking(viking.name, viking.health, viking.strength);
        const saxonSoldier = new Saxon(saxon.health, saxon.strength);
        const damage = saxonSoldier.attack();

        return vikingSoldier.receiveDamage(damage);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }


}