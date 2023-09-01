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
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier {

    attack() {
        return this.strength;
    }
    receiveDamage(the_damage) {
        this.health -= the_damage;
        if (this.health > 0) {
            return `A Saxon has received ${the_damage} points of damage`
        } else {
            return `A Saxon has died in combat`
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
        this.vikingArmy.push(viking);


    }


    addSaxon(saxon) {
        this.saxonArmy.push(saxon);

    }

    vikingAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let viking = this.vikingArmy[randomVikingIndex];

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let saxon = this.saxonArmy[randomSaxonIndex];
        let message = saxon.receiveDamage(viking.attack());
        if (saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return message;
    }

    saxonAttack() {
        const randomIndex = Math.floor(Math.random() * saxonArmy.length);
    }
}
