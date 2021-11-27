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
  constructor(name , health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } 
    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }


}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return 'A Saxon has died in combat';
    } 
    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor() {
    (this.vikingArmy = []), (this.saxonArmy = []);
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonAttacked = this.saxonArmy[saxonIndex];
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingAttacking = this.vikingArmy[vikingIndex];
    saxonAttacked.receiveDamage(vikingAttacking.attack());
    if (saxonAttacked.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy[saxonIndex], 1);
      return 'A Saxon has died in combat';
    }
  }
  saxonAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonAttacking = this.saxonArmy[saxonIndex];
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingAttacked = this.vikingArmy[vikingIndex];
    vikingAttacked.receiveDamage(saxonAttacking.attack());
    if (vikingAttacked.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy[vikingIndex], 1);
      return 'A Viking has died in combat';
    }
    return `${vikingAttacked.name} has received ${saxonAttacking.strength} points of damage`;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
