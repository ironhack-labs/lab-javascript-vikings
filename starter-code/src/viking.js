// Soldier
class Soldier {
    constructor (healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
        }

      attack() {
          return this.strength;
      }

      receiveDamage (damage) {
         this.health = this.health - damage;
      }
    
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health,strength);
        this.name = name;
    }

    receiveDamage (damage) {
        this.health = this.health - damage;

        if (this.health >= 1) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
     }

     battleCry() {
         return 'Odin Owns You All!'
     }

}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health >= 1) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return 'A Saxon has died in combat';
        }
    }
}

const randomInteger = (minimum,maximum) => Math.floor(Math.random() * (maximum - minimum + 1) + minimum);

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }


    vikingAttack() {
        const vikingCount = this.vikingArmy.length;
        const saxonCount = this.saxonArmy.length;
        const vikingIndex = randomInteger(0, vikingCount - 1);
        const saxonIndex = randomInteger(0, saxonCount - 1);

        const viking = this.vikingArmy[vikingIndex];
        const saxon = this.saxonArmy[saxonIndex];

        const vikingStrength = viking.strength;
        const attackMessage = saxon.receiveDamage(vikingStrength);

        for (let saxon of this.saxonArmy) {
            if (saxon.health <= 0) {
                const index = this.saxonArmy.indexOf(saxon);
                this.saxonArmy.splice(index, 1);
            }
        }       

        return attackMessage;
    }

    saxonAttack() {
        const vikingCount = this.vikingArmy.length;
        const saxonCount = this.saxonArmy.length;
        const vikingIndex = randomInteger(0, vikingCount - 1);
        const saxonIndex = randomInteger(0, saxonCount - 1);

        const viking = this.vikingArmy[vikingIndex];
        const saxon = this.saxonArmy[saxonIndex];

        const vikingStrength = viking.strength;
        const attackMessage = saxon.receiveDamage(vikingStrength);

        for (let saxon of this.saxonArmy) {
            if (saxon.health <= 0) {
                const index = this.saxonArmy.indexOf(saxon);
                this.saxonArmy.splice(index, 1);
            }
        }       

        return attackMessage;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            "Vikings have won the war of the century!";

        }
    }

}

