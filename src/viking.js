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
        super.receiveDamage(damage);
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
        super(health, strength);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
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

        // Select random Viking (as agressor) and random Saxon (as target)
        const agressorIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const agressor = this.vikingArmy[agressorIndex];
        console.log(agressor);
      
        const targetIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const target = this.saxonArmy[targetIndex];
        console.log(target);

        // Subtract agressor's strength from target's health
        const result = target.receiveDamage(agressor.strength);
        
        console.log(this.saxonArmy);

        // Remove target form army if health is smaller or equal to 0
        if (target.health <= 0) {
            this.saxonArmy.splice(targetIndex, targetIndex + 1);
        }
      
        // Return result of attack
        return result;
    }
  
    saxonAttack() {

        // Select random Viking (as agressor) and random Saxon (as target)
        const agressorIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const agressor = this.saxonArmy[agressorIndex];
        console.log(agressor);
      
        const targetIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const target = this.vikingArmy[targetIndex];
        console.log(target);

        // Subtract agressor's strength from target's health
        const result = target.receiveDamage(agressor.strength);
        
        console.log(this.vikingArmy);

        // Remove target form army if health is smaller or equal to 0
        if (target.health <= 0) {
            this.vikingArmy.splice(targetIndex, targetIndex + 1);
        }
      
        // Return result of attack
        return result;
    }
    
    showStatus() {
      switch (true) {
        case !(this.saxonArmy.length):
          return `Vikings have won the war of the century!`;
        
        case !(this.vikingArmy.length):
          return `Saxons have fought for their lives and survived another day...`;
          
        default:
          return `Vikings and Saxons are still in the thick of battle.`;
          break;
      }
    }
}


const viking1 = new Viking("Harold", 100, 1000);
const viking2 = new Viking("Peter", 100, 10);
const viking3 = new Viking("Andrew", 100, 10);

const saxon1 = new Saxon(100, 10);
const saxon2 = new Saxon(100, 10);
const saxon3 = new Saxon(100, 10);

const war = new War();
war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);

war.vikingAttack();
war.showStatus();
war.vikingAttack();
war.showStatus();
war.vikingAttack();
war.showStatus();
war.vikingAttack();
war.showStatus();
war.vikingAttack();
war.showStatus();
war.vikingAttack();
war.showStatus();