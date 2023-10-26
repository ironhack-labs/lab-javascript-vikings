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

    /* receiveDamage(damage) {
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`;
                
            } else return `${this.name} has died in act of combat`;
        } */
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
  }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }
    vikingAttack() {
        let vikingAttacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        
        let randomIndexofSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let saxonDefender = this.saxonArmy[randomIndexofSaxon];
        
        let battleOutcome = saxonDefender.receiveDamage(vikingAttacker.strength);
        
        if (saxonDefender.health <= 0) {
            this.saxonArmy.splice(randomIndexofSaxon,1);
        }
        
        return battleOutcome;
    }

    saxonAttack() {
        let saxonAttacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

        let randomIndexofViking = Math.floor(Math.random()*this.vikingArmy.length);
        let vikingDefender = this.vikingArmy[randomIndexofViking];

        let battleOutcome = vikingDefender.receiveDamage(saxonAttacker.strength);

        if (vikingDefender.health <= 0) {
            this.vikingArmy.splice(randomIndexofViking,1);
        }

        return battleOutcome;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else return "Vikings and Saxons are still in the thick of battle.";
    }
}

