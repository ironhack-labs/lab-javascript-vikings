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
            return(`${this.name} has received ${damage} points of damage`);
        } else {
            return(`${this.name} has died in act of combat`);
        }
    }
    battleCry() {
        return ("Odin Owns You All!");
    }
}

// Saxon
class Saxon extends Soldier {

receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return(`A Saxon has received ${damage} points of damage`);
    } else {
        return(`A Saxon has died in combat`);

    }
}
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

addViking(Viking) {
    this.vikingArmy.push(Viking);
}

addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)

}

vikingAttack() {
    function getRandomIn(max) {
        return Math.floor(Math.random() * Math.floor(max));

        let randomSaxonIndex = getRandomInt(this.saxinArmy.length)
        let randomViking = getRandomInt(this.vikingArmy.length);
    }
    let viking = vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxon = saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    saxon.receiveDamage(viking.strength) = viking.health;

    this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomViking].strength);
}

saxonAttack() {
    this.vikingAttack();
}

showStatus() {

}

}
