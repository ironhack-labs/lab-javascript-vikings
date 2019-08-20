// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
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
        super.attack()
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0)
            return `${this.name} has received ${damage} points of damage`
        return `${this.name} has died in act of combat`

    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        super.attack()
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0)
            return `A Saxon has received ${damage} points of damage`

        return `A Saxon has died in combat`

    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };
    vikingAttack() {

        let ranSaxidx = Math.floor(Math.random() * this.saxonArmy.length);
        let ranVikidx = Math.floor(Math.random() * this.vikingArmy.length);

        let ranVik = this.vikingArmy[ranVikidx];
        let ranSax = this.saxonArmy[ranSaxidx];

        let damage = ranSax.receiveDamage(ranVik.strength);

        if (ranSax.health <= 0)
            this.saxonArmy.splice(ranSaxidx, 1)
        return damage;
    };

    saxonAttack() {
        let ranSaxidx = Math.floor(Math.random() * this.saxonArmy.length);
        let ranVikidx = Math.floor(Math.random() * this.vikingArmy.length);

        let ranVik = this.vikingArmy[ranVikidx];
        let ranSax = this.saxonArmy[ranSaxidx];

        let damage = ranVik.receiveDamage(ranSax.strength);

        if (ranVik.health <= 0)
            this.vikingArmy.splice(ranVikidx, 1)
        return damage;

    };

    showStatus() {
        return !this.saxonArmy.length ? "Vikings have won the war of the century!" :
            !this.vikingArmy.length ? "Saxons have fought for their lives and survive another day..." :
            "Vikings and Saxons are still in the thick of battle.";

    };


}