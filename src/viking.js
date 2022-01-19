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
      return this.name + ' has received ' + damage + ' points of damage';
    } else {
      return this.name + ' has died in act of combat';
    };
  }
  battleCry() {
    return 'Odin Owns You All!'
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return 'A Saxon has received ' + damage + ' points of damage';
    } else {
      return 'A Saxon has died in combat';
    };
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
  let randomNum1 = Math.floor(Math.random() * this.saxonArmy.length);
  let randomNum2 = Math.floor(Math.random() * this.vikingArmy.length);
  let damage = this.vikingArmy[randomNum2].strength;

  let saxon = this.saxonArmy[randomNum1];
   let result = this.saxonArmy[randomNum1].receiveDamage(damage);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomNum1,1);
    }
    return result;
  }

  saxonAttack() {
    let randomNum1 = Math.floor(Math.random() * this.vikingArmy.length);
    let randomNum2 = Math.floor(Math.random() * this.saxonArmy.length);
    let damage = this.saxonArmy[randomNum2].strength;
    
    let viking = this.vikingArmy[randomNum1];
      let result = this.vikingArmy[randomNum1].receiveDamage(damage);
      if (viking.health <= 0) {
        this.vikingArmy.splice(randomNum1,1);
      }
      return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  };
};



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
