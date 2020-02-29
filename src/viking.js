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
        };
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
        } else {
            return `A Saxon has died in combat`;
        };
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
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const damage = this.vikingArmy[randomVikingIndex].attack();
        const result = this.saxonArmy[randomSaxonIndex].receiveDamage(damage);


        if (this.saxonArmy[randomSaxonIndex].health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return result;
    }

    saxonAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const damage = this.saxonArmy[randomSaxonIndex].attack();
        const result = this.vikingArmy[randomVikingIndex].receiveDamage(damage);


        if (this.vikingArmy[randomVikingIndex].health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }





}

class Fight {

    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    attack(attacker) {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        if (attacker === "vikings") {
            const result = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);


            if (this.saxonArmy[randomSaxonIndex].health <= 0) {
                this.saxonArmy.splice(randomSaxonIndex, 1);
            }

            return result;

        } else if (attacker === "saxons") {
            const result = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);


            if (this.vikingArmy[randomVikingIndex].health <= 0) {
                this.vikingArmy.splice(randomVikingIndex, 1);
            }

            return result;
        }
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}


let viking, saxon, fight;

function generateViking() {
    const name = 'Harald';
    const strength = 150;
    const health = 300;
    return new Viking(name, health, strength);
}

function generateSaxon() {
    const health = 60;
    const strength = 25;
    return new Saxon(health, strength);
}

viking = generateViking();
saxon = generateSaxon();
fight = new Fight();

fight.addSaxon(saxon);
fight.addViking(viking);
fight.addSaxon(saxon);
fight.addViking(viking);
fight.addSaxon(saxon);
fight.addViking(viking);
fight.addSaxon(saxon);
fight.addViking(viking);

console.log(fight.attack("vikings"));
console.log(fight.showStatus());
console.log(fight.attack("saxons"));
console.log(fight.showStatus());
console.log(fight.attack("vikings"));
console.log(fight.showStatus());
console.log(fight.attack("saxons"));
console.log(fight.showStatus());
console.log(fight.attack("vikings"));
console.log(fight.showStatus());
console.log(fight.attack("saxons"));
console.log(fight.showStatus());
console.log(fight.attack("vikings"));
console.log(fight.showStatus());

