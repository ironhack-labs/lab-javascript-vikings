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
        return this.health -= damage;
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


    attack() {
        return this.strength;
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

    addViking(viking) {
        if (viking instanceof Viking) {
            this.vikingArmy.push(viking);
        } else {
            throw new Error("Only Vikings can be added");
        }
    }

    addSaxon(saxon) {
        if (saxon instanceof Saxon) {
            this.saxonArmy.push(saxon);
        } else {
            throw new Error("Only Saxons can be added");
        }
    }

    vikingAttack() {
        if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) return;

        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return result;
    }

    saxonAttack() {
        if (this.saxonArmy.length === 0 || this.vikingArmy.length === 0) return;
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

const war = new War();

// Add Vikings
war.addViking(new Viking("Ragnar", 100, 25));
war.addViking(new Viking("Lagertha", 90, 30));
war.addViking(new Viking("Bjorn", 110, 20));

// Add Saxons
for (let i = 0; i < 5; i++) {
    war.addSaxon(new Saxon(60, 15));
}

// Battle loop
let round = 1;

while (war.vikingArmy.length > 0 && war.saxonArmy.length > 0) {
    console.log(`\n⚔️ ROUND ${round}`);

    // Vikings attack
    const vikingAttackLog = war.vikingAttack();
    console.log("Viking attack:", vikingAttackLog);

    // Saxons attack (only if any left)
    if (war.saxonArmy.length > 0) {
        const saxonAttackLog = war.saxonAttack();
        console.log("Saxon attack:", saxonAttackLog);
    }

    console.log(war.showStatus());
    round++;
}
// Viking attacks Saxon