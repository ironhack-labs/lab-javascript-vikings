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
        }
        else {
            return `${this.name} has died in act of combat`
        }

    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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

    addViking(VikingObj) {

        this.vikingArmy.push(VikingObj);
    }

    addSaxon(SaxonObj) {
        this.saxonArmy.push(SaxonObj);
    }

    vikingAttack() {
        if (this.saxonArmy.length === 0) return;
        let receivedDamagedSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)

        let attackedVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

        let result = this.saxonArmy[receivedDamagedSaxonIndex].receiveDamage(this.vikingArmy[attackedVikingIndex].strength)

        if (this.saxonArmy[receivedDamagedSaxonIndex].health - this.vikingArmy[attackedVikingIndex]?.strength <= 0)
            this.saxonArmy.splice(receivedDamagedSaxonIndex, 1)

        return result;
    }
    saxonAttack() {
        if (this.vikingArmy.length === 0) return;
        let receivedDamagedVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

        let attackedSoxonIndex = Math.floor(Math.random() * this.saxonArmy.length)

        let result = this.vikingArmy[receivedDamagedVikingIndex].receiveDamage(this.saxonArmy[attackedSoxonIndex].strength)

        if (this.vikingArmy[receivedDamagedVikingIndex].health - this.saxonArmy[attackedSoxonIndex]?.strength <= 0)
            this.vikingArmy.splice(receivedDamagedVikingIndex, 1)

        return result;

    }
    showStatus() {


        if (this.saxonArmy.length === 0 && this.vikingArmy.length >= 1) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0 && this.saxonArmy.length >= 1) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }

        return "There is no army more!!!"

    }
}


// checking the game logic
let war = new War();
for (let index = 0; index < 10; index++) {
    const viking = new Viking(
        'viking' + index.toString(), 300, 50
    )
    war.addViking(viking);

}

for (let index = 0; index < 200; index++) {
    const saxon = new Saxon(
        100, 20
    )
    war.addSaxon(saxon);

}

for (let index = 0; index < 500; index++) {
    war.vikingAttack()

}

console.log(war)
console.log(war.showStatus())



