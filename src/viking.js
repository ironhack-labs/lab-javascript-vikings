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
            return `${this.name} has received ${damage} points of damage`;
        } return `${this.name} has died in act of combat`;
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
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
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
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
        return result;
    }

    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return result;
    }

//refactor vikingAttack and saxonAttack
    attack(attacker) {
        let attackingArmy;
        let attackedArmy;
   
        if (attacker !== "viking" && attacker !== "saxon") {
            throw new Error(`It's a war between vikings and saxons. You must enter "viking" or "saxon"`);
        } else if (attacker === "viking") {
            attackingArmy = this.vikingArmy;
            attackedArmy = this.saxonArmy;
        } else {
            attackingArmy = this.saxonArmy;
            attackedArmy = this.vikingArmy;
        }

        attackingSoldier = attackingArmy[Math.floor(Math.random() * this.attackingArmy.length)];
        attackedSoldier = attackedArmy[Math.floor(Math.random() * this.attackedArmy.length)];
        
        const result = attackedSoldier.receiveDamage(attackingSoldier.strength);
        if (attackedSoldier.health <= 0) {
            attackedArmy.splice(attackedArmy.indexOf(attackedSoldier), 1);
        }
        return result;
    }

    showStatus() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length >0) {
            return "Vikings and Saxons are still in the thick of battle.";
        } else if (this.saxonArmy.length === this.vikingArmy.length === 0) {
            return "The war has killed all the Vikings and Saxons!";
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        return "Saxons have fought for their lives and survived another day...";
    }
}
