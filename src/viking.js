// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        this.image = `./images/squire${Math.floor(Math.random() * 4)}.png`;
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
        this.image = `./images/viking${Math.floor(Math.random() * 4)}.png`;
    }

    receiveDamage(dmg) {
        this.health -= dmg;

        return this.health > 0
            ? `${this.name} has received ${dmg} points of damage`
            : `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.image = `./images/saxon${Math.floor(Math.random() * 4)}.png`;
    }

    receiveDamage(dmg) {
        this.health -= dmg;

        return this.health > 0
            ? `A Saxon has received ${dmg} points of damage`
            : `A Saxon has died in combat`;
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

    vikingAttack(theVikingIndex) {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        // const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = theVikingIndex;

        console.log("...>", {
            saxon: this.saxonArmy[randomSaxon].health,
        });

        const theResultOfCombat = this.saxonArmy[randomSaxon].receiveDamage(
            this.vikingArmy[randomViking].attack()
        );

        console.log({
            saxon: this.saxonArmy[randomSaxon].health,
            viking: this.vikingArmy[randomViking],
        });

        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }

        console.log({ saxonArmySize: this.saxonArmy.length });
        displayArmies();

        return theResultOfCombat;
    }

    saxonAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        // optional chaining for object and keys is when you add ? before the . when calling the key. object?.key
        // link to documentation about optional chaining.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        const theResultOfCombat = this.vikingArmy[randomViking].receiveDamage(
            this.saxonArmy[randomSaxon].attack()
        );

        // let theResultOfCombat;

        // if (this.vikingArmy[randomViking] && this.saxonArmy[randomSaxon]) {
        //     theResultOfCombat = this.vikingArmy[randomViking].receiveDamage(
        //         this.saxonArmy[randomSaxon].attack())
        // };

        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }

        displayArmies();

        return theResultOfCombat;
    }

    showStatus() {
        // if (this.saxonArmy.length === 0) {
        //     return "Vikings have won the war of the century!";
        // } else if (this.vikingArmy.length === 0) {
        //     return "Saxons have fought for their lives and survived another day...";
        // } else {
        //     return "Vikings and Saxons are still in the thick of battle.";
        // }

        // ternary else if
        return this.saxonArmy.length === 0
            ? "Vikings have won the war of the century!"
            : this.vikingArmy.length === 0
            ? "Saxons have fought for their lives and survived another day..."
            : "Vikings and Saxons are still in the thick of battle.";
    }
}













