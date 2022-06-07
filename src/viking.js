// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  //method attack
  attack() {
    return this.strength;
  }

  //method receiveDamage
  receiveDamage(damage) {
    this.health = -damage;
    return;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return this.name + ' has died in act of combat';
    }
    return this.name + ' has received ' + damage + ' points of damage';
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return 'A Saxon has died in combat';
    }
    return 'A Saxon has received ' + damage + ' points of damage';
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.SaxonArmy.push(saxon);
  }

  vikingAttack() {
  
    let saxon = 
  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
