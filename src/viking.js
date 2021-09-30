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
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : 'A Saxon has died in combat';
  }

}

// War
class War {
  contructor() {

  }
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    this.addViking();
    this.addSaxon();

    const damage = this.vikingArmy[0].strength
    const resultAfterReceivingDamage = this.saxonArmy[0].receiveDamage(damage);

    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(this.saxonArmy[0]));
    }
    return resultAfterReceivingDamage;
  }

  saxonAttack() {
    this.addViking();
    this.addSaxon();

    const damage = this.saxonArmy[0].strength
    const resultAfterReceivingDamage = this.vikingArmy[0].receiveDamage(damage);

    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(this.vikingArmy[0]));
    }
    return resultAfterReceivingDamage;
  }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
