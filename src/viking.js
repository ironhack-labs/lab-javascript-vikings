// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  
  attack() {
    return this.strength;
  };

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
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
    this.health = this.health - damage;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
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
    
    
    // Original vikingAttack() Method
    const vike = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const sax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const result = sax.receiveDamage(vike.strength);
    if (sax.health <=0) { this.saxonArmy.splice(sax) }
    return result;

    // Refactored to use generic attack() Method
    // attack('Viking');
  }

  saxonAttack() {

    // Original saxonAttack() Method
    const vike = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const sax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const result = vike.receiveDamage(sax.strength);
    if (vike.health <= 0) { this.vikingArmy.splice(vike) }
    return result;

    // Refactored to use generic attack() Method
    // attack('Saxon');
  }

  // Super Bonus Iteration #5 refactor
  /* I think I would need to "hoist" it above the vikingAttack() and saxonAttack()
     Methods to be able to actually use it */

  // attack(attacker) {

  //   let att, attArmy, def, defArmy;
  //   if (attacker instanceof Viking || attacker === 'Viking') {
  //     att = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  //     attArmy = this.vikingArmy;
  //     def = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  //     defArmy = this.saxonArmy;
  //   } else if (attacker instanceof Saxon || attacker === 'Saxon') {
  //     att = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  //     attArmy = this.saxonArmy;
  //     def = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  //     defArmy = this.vikingArmy;
  //   } else {}

  //   console.log(`attacker, ` att, ` defender, ` def);
  //   const result = def.receiveDamage(att.strength);
  //   console.log(result);
  //   if (def.health <= 0) { defArmy.splice(def) }
  //   console.log(defArmy);
  //   return result;
  //   }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
