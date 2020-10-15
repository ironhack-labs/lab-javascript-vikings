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
            return this.name + " has received " + damage + " points of damage";
        }
        if (this.health <= 0) {
            return this.name + " has died in act of combat"
        }
    }
    
    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage
            + " points of damage";
        }
        if (this.health <= 0) {
            return "A Saxon has died in combat";
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
        this.vikingArmy.push(viking)
    }
    
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomViking = this.vikingArmy[rand(this.vikingArmy)];
        let randomSaxon = this.saxonArmy[rand(this.saxonArmy)];
        let damage = randomSaxon.receiveDamage(randomViking.strength);
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
        return damage;
    }

    saxonAttack() {
        let randomViking = this.vikingArmy[rand(this.vikingArmy)];
        let randomSaxon = this.saxonArmy[rand(this.saxonArmy)];
        let damage = randomViking.receiveDamage(randomSaxon.strength);
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
        return damage;
    }

    showStatus() {
        if (!this.saxonArmy.length) {return "Vikings have won the war of the century!"};
        if (!this.vikingArmy.length) {return "Saxons have fought for their lives and survived another day..."};
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {return "Vikings and Saxons are still in the thick of battle."}
    }


}

function rand(array) {
    return Math.floor(Math.random() * array.length);
}