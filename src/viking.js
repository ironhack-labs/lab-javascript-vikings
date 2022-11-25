// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        // inherit health and strength from Soldier
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        // health minus damage
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        // inherit from Soldier
        super(health, strength);
    }
    receiveDamage(damage) {
        // health minus damage
        this.health = this.health - damage;
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
        // assign an empty array to the vikingArmy property 
        this.vikingArmy = [];
        // assign an empty array to the saxonArmy property 
        this.saxonArmy = [];
    }
    addViking(viking) {
        // add viking to the array
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        // add saxon to the array
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        // A Saxon (chosen at random). go through array and generate a random number but within the amount of items in the array
        const randomSaxonFromArmy = Math.floor(Math.random() * this.saxonArmy.length);
        // assign it to a random variable to be used
        const randomSaxon = this.saxonArmy[randomSaxonFromArmy];
        // a Viking (also chosen at random)
        const randomVikingFromArmy = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingFromArmy];
        // randomViking attacks randomSaxon, saxon receives damage equal to this.strength of viking
        const attackSaxon = randomSaxon.receiveDamage(randomViking.strength);
        this.saxonArmy.splice(randomSaxon, 1);
        return attackSaxon;
    }
    saxonAttack() {
        // Same as above but Saxon attacks Viking
        const randomSaxonFromArmy = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonFromArmy];
        // a Viking (also chosen at random)
        const randomVikingFromArmy = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingFromArmy];

        const attackViking = randomViking.receiveDamage(randomSaxon.strength);
        this.vikingArmy.splice(randomViking, 1);
        return attackViking;
    }
    showStatus() {
        // to do?
    }
}
