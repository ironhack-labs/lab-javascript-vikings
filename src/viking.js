// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= damage;
    }
};


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    };
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    };
    battleCry() {
        return `Odin Owns You All!`
    };
}
const vikingSoldier = new Viking("Herald", 200, 80);
console.log(vikingSoldier.receiveDamage(199));
console.log(vikingSoldier.attack());



// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength
    };
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`
        }
        return `A Saxon has died in combat`
    };
};

const saxonSoldier = new Saxon(100, 200);
console.log(saxonSoldier.receiveDamage(102));
console.log(saxonSoldier.attack());


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

        let damage = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return damage;

        /*   let healthSaxon = this.saxonArmy[0].receiveDamage(
              this.vikingArmy[0].strength
            );
            if (this.saxonArmy[0].health <= 0) {
              this.saxonArmy.splice(0, 1);
            }
            return healthSaxon;
           */
    };
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

        let damage = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return damage;
    };

    //SuperBonus;
    genericMethod(attacker) {
        this.attacker = attacker;
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
        if (this.attacker === randomViking) {
            if (randomSaxon.health <= 0) {
                this.saxonArmy.splice(randomSaxon, 1);
            }
            let damage = randomSaxon.receiveDamage(randomViking.strength);
            return damage;
        }
        if (this.attacker === randomSaxon) {
            if (randomViking.health <= 0) {
                this.vikingArmy.splice(randomViking, 1);
            }
            let damage = randomViking.receiveDamage(randomSaxon.strength);
            return damage;
        }
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
            return `Vikings and Saxons are still in the thick of battle.`
    };
};

/* const finalAttack = new War()

console.log(finalAttack.addViking(vikingSoldier), finalAttack.addSaxon(saxonSoldier),
    finalAttack.genericMethod(saxonSoldier, vikingSoldier), finalAttack.showStatus()); */