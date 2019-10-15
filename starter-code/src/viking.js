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
        this.damage = damage;
        this.health = this.health - this.damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.damage = damage;

        this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }

    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        //this.health = health;
        //this.strength = strength;
    }

    receiveDamage(damage) {
        this.damage = damage;

        this.health = this.health - this.damage;

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
        this.saxonArmy = [];
        this.vikingArmy = []
    }

    addViking(viking) {
        this.viking = viking;

        this.vikingArmy.push(this.viking);
    }

    addSaxon(saxon) {
        this.saxon = saxon;

        this.saxonArmy.push(this.saxon);
    }


    vikingAttack() {
       let saxonArmyRandom = Math.floor(Math.random() * (this.saxonArmy.length));
       let randomSaxon = this.saxonArmy[saxonArmyRandom];

       let vikingArmyRandom = Math.floor(this.vikingArmy.length*Math.random());
       let randomViking = this.vikingArmy[vikingArmyRandom];

       let attack = randomSaxon.receiveDamage(randomViking.strength);


       if (randomSaxon.health <= 0) {
           this.saxonArmy.splice(saxonArmyRandom, 1);}

        return attack;
    }

    saxonAttack() {
       let saxonArmyRandom = Math.floor(Math.random() * (this.saxonArmy.length));
       let randomSaxon = this.saxonArmy[saxonArmyRandom];

       let vikingArmyRandom = Math.floor(this.vikingArmy.length*Math.random());
       let randomViking = this.vikingArmy[vikingArmyRandom];

       let attack = randomViking.receiveDamage(randomSaxon.strength);


       if (randomViking.health <= 0) {
           this.vikingArmy.splice(vikingArmyRandom, 1);}

        return attack;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

