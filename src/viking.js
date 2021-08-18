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
    super(name, health);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  vikingAttack() {
    super.attack();
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  soliderAttack() {
    super.attack();
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
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
  
  // SUPERBONUS: Generic attack function 
  // generalAttack(attacker, target) {
  //   let randomAttacker = Math.floor((Math.random() * this.attacker.length));
  //   let randomTarget = Math.floor((Math.random() * this.target.length));
  //   let resultOfAttack = this.randomTarget[target].receiveDamage(this.attacker[randomAttacker].strength);
  //   if(this.target[randomTarget] <= 0) {
  //     this.target.splice(this.target[saxon], 1);
  //   }
  //   return resultOfAttack;
  // }

  // vikingAttack() {
  //   this.generalAttack(this.vikingArmy, this.saxonArmy);
  // }

  // saxonAttack() {
  //   this.generalAttack(this.saxonArmy, this.vikingArmy);
  // }

  vikingAttack() {
    let anyViking = Math.floor((Math.random() * this.vikingArmy.length));
    let saxon = Math.floor((Math.random() * this.saxonArmy.length));
    let resultOfVikingAttack = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[anyViking].strength);
    if(this.saxonArmy[saxon].health <= 0){
      this.saxonArmy.splice(this.saxonArmy[saxon], 1);
    }
    // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
    return resultOfVikingAttack;
  }

  saxonAttack() {
    let viking = Math.floor((Math.random() * this.vikingArmy.length));
    let anySaxon = Math.floor((Math.random() * this.saxonArmy.length));
    let resultOfSaxonAttack = this.vikingArmy[viking].receiveDamage(this.saxonArmy[anySaxon].strength);
    if(this.vikingArmy[viking].health <= 0){
      this.vikingArmy.splice(this.saxonArmy[viking], 1);
    } 
    return resultOfSaxonAttack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
