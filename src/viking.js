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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }

        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
   receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;

    else return "A Saxon has died in combat";
   }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(viking) {
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };

    vikingAttack() {
        // Select random viking
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        // Select random saxon
        let saxonIndex = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

        let saxon = this.saxonArmy[saxonIndex];

        let resultAttack = saxon.receiveDamage(viking.strength)

        // Saxon receive damage
        saxon.receiveDamage(viking.strength);

        // Remove Saxon from army if dead
        if(saxon.health -= 0){
            this.saxonArmy.splice(saxonIndex, 1)
        }

        return resultAttack;

    };

    saxonAttack() {
        // Select random viking
        let vikingIndex = [Math.floor(Math.random()*this.vikingArmy.length)];

        let viking = this.vikingArmy[vikingIndex];

        // Select random saxon
        let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

        let resultAttack = viking.receiveDamage(saxon.strength)

        if (viking.health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1);
        }

        return resultAttack;
    };

    showStatus() {};
}
