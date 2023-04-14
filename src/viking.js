// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return this.strength
    };
    receiveDamage(damage) {
        this.health = (this.health - damage);
    };
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    };
    receiveDamage(damage) {
        this.health = (this.health - damage);
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    };
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    };
    receiveDamage(damage) {
        this.health = (this.health - damage);
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${damage} points of damage`
    };
}

// War
class War {
    constructor() {
        this.vikingArmy = [],
            this.saxonArmy = []
    };
    addViking(Soldier) {
        this.vikingArmy.push(Soldier);
    };
    addSaxon(Soldier) {
        this.saxonArmy.push(Soldier);
    };
    vikingAttack() {
        let randomVik = this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
        let randomSax = this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];

        let attack = (randomSax.receiveDamage(randomVik.attack()));

        if (randomSax.health <= 0) {
            this.saxonArmy.pop(randomSax)
        }

        return attack;
    };
    saxonAttack() {
        let randomVik = this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
        let randomSax = this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];

        let attack = (randomVik.receiveDamage(randomSax.attack()));

        if (randomVik.health <= 0) {
            this.vikingArmy.pop(randomVik)
        }

        return attack;
    };
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    };

}
