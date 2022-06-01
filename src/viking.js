// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };
  attack() {
    return this.strength
  };
  receiveDamage(damage) {
    this.health -= damage
  };
};

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  };
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  };
  battleCry() {
    return 'Odin Owns You All!'
  };
};

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  };
};

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(Viking) {
    this.vikingArmy.push(Viking)
  };

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  };

// SUPERBONUS

  // Attack(isVikingAttacking =  false) {
    
  //   let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  //   let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

  //   if (isVikingAttacking) {
  //     let receivedDamage = randomSaxon.receiveDamage(randomViking.strength);

  //     if (randomSaxon.health <= 0) {
  //       this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
  //     };

  //     return receivedDamage;
  //   } 

  //   let receivedDamage2 = randomViking.receiveDamage(randomSaxon.strength);

  //   if (randomViking.health <= 0) {
  //     this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
  //   };

  //   return receivedDamage2;
    
  // }

  vikingAttack() {
    let randomN = Math.floor(Math.random() * this.saxonArmy.length)
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[randomN];

    let receivedDamage = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomN, 1)
    };

    return receivedDamage;
  };

  saxonAttack()  {
    let randomN = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy[randomN];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let receivedDamage2 = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomN, 1)
    };

    return receivedDamage2;
  };

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  };
};



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
