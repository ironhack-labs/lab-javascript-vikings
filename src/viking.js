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

class Viking extends Soldier{
    constructor(name, health, strength) {
        super (health, strength);
         this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return 'Odin Owns You All!';
    }
}

// Saxon

class Saxon extends Soldier {
    constructor(health, strength) {
        super (health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return 'A Saxon has died in combat';
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
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let attackResult = randomSaxon.receiveDamage(randomViking.strength);
        this.saxonArmy = this.saxonArmy.filter(saxon => {
            return saxon.health > 0;
        });
        return attackResult;
    }
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let attackResult = randomViking.receiveDamage(randomSaxon.strength);
        this.vikingArmy = this.vikingArmy.filter(viking => {
            return viking.health > 0;
        });
        return attackResult;
    }

    showStatus() {

    }
}
let war = new War();
let viking = new Viking('Ragnar', 100, 10);
war.addViking(viking);
war.addViking(viking);
war.addViking(viking);

let saxon = new Saxon(50, 5);
war.addSaxon(saxon);
war.addSaxon(saxon);
war.addSaxon(saxon);

war.vikingAttack();
war.vikingAttack();
war.vikingAttack();

war.saxonAttack();
war.saxonAttack();
war.saxonAttack();





