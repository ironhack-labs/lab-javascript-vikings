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
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
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
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);

        const saxon = this.saxonArmy[randomSaxonNumber];
        const viking = this.vikingArmy[randomVikingNumber];
        
        const battleResult = saxon.receiveDamage(viking.strength);
        
        if (battleResult === `A Saxon has died in combat`) {
            this.saxonArmy.splice(randomSaxonNumber, 1);            
        }

        return battleResult;
    }


    saxonAttack() {
        const randomSaxonNumber1 = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingNumber1 = Math.floor(Math.random() * this.vikingArmy.length);

        const saxon1 = this.saxonArmy[randomSaxonNumber1];
        const viking1 = this.vikingArmy[randomVikingNumber1];
        
        const battleResult1 = viking1.receiveDamage(saxon1.strength);
        
        if (battleResult1 === `${viking1.name} has died in act of combat`) {
            this.vikingArmy.splice(randomVikingNumber1, 1);
        }

        return battleResult1;
    }


    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
