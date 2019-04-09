// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    //attack Method
    attack() {
        return this.strength
    }

    //receive damage method
    receiveDamage(damage) {
        this.health -= damage
    }
}




// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name, health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage"
        } else {
            return this.name + " has died in act of combat"
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}




// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage"
        } else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
        this.graveyard = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let rVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        let rSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[rVikingNum];
        let randomSaxon = this.saxonArmy[rSaxonNum];
        let theAction = randomSaxon.receiveDamage(randomViking.attack());

        if (randomSaxon.health <= 0) {
            this.saxonArmy.pop();
        }
        return theAction
    }
    saxonAttack() {
        let rVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        let rSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[rVikingNum];
        let randomSaxon = this.saxonArmy[rSaxonNum];
        let theAction = randomViking.receiveDamage(randomSaxon.attack())

        if (randomViking.health <= 0) {
            this.vikingArmy.pop();
        }
        return theAction
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
