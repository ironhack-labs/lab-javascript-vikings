// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack = () => this.strength

    receiveDamage = damage => {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    attack = () => this.strength

    receiveDamage = damage => {
        this.health = this.health - damage;

        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return this.strength;
    }

    receiveDamage = damage => {
        this.health = this.health - damage;
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking = viking => {
        this.vikingArmy.push(viking);
    }

    addSaxon = saxon => {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let indexOfViking = Math.floor(Math.random() * this.vikingArmy.length)
        let indexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let viking = this.vikingArmy[indexOfViking];
        let saxon = this.saxonArmy[indexOfSaxon];

        let saxonCasualties = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) {
            this.saxonArmy.splice(indexOfSaxon, 1);
        }

        return saxonCasualties;
    }

    saxonAttack() {
        let indexOfViking = Math.floor(Math.random() * this.vikingArmy.length)
        let indexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let viking = this.vikingArmy[indexOfViking];
        let saxon = this.saxonArmy[indexOfSaxon];

        let vikingCasualties = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) {
            this.vikingArmy.splice(indexOfViking, 1);
        }

        return vikingCasualties;

    }

}
