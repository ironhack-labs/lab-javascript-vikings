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

    return this.health <= 0
      ? `${this.name} has died in act of combat`
      : `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health <= 0
      ? `A Saxon has died in combat`
      : `A Saxon has received ${damage} points of damage`;
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
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const damageReceived = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].attack()
    );

    this.saxonArmy[randomSaxon].health <= 0
      ? this.saxonArmy.splice(randomSaxon, 1)
      : '';

    return damageReceived;
  }
  saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const damageReceived = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].attack()
    );

    this.vikingArmy[randomViking].health <= 0
      ? this.vikingArmy.splice(randomViking, 1)
      : '';

    return damageReceived;
  }
  showStatus() {
    return this.saxonArmy.length === 0
      ? `Vikings have won the war of the century!`
      : this.vikingArmy.length === 0
      ? `Saxons have fought for their lives and survived another day...`
      : 'Vikings and Saxons are still in the thick of battle.';
  }
}

// rewriting attack as a generic function  -BONUS-

/*

class abstractAttack {
  attack(attacker, defender) {
    if (attacker.length === 0 || defender.length === 0) {
      return -1;
    }

    const randomAttacker = Math.floor(Math.random() * attacker.length);
    const randomDefender = Math.floor(Math.random() * defender.length);
    const damageReceived = defender[randomDefender].receiveDamage(
      attacker[randomAttacker].attack()
    );

    defender[randomDefender].health <= 0
      ? defender.splice(randomDefender, 1)
      : "";

    return 1;
  }
}

class War extends abstractAttack {
  constructor() {
    super();
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
    return this.attack(this.vikingArmy, this.saxonArmy) === -1
      ? console.log(this.showStatus())
      : "";
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy) === -1
      ? console.log(this.showStatus())
      : "";
  }
  showStatus() {
    return this.saxonArmy.length === 0
      ? `Vikings have won the war of the century!`
      : this.vikingArmy.length === 0
      ? `Saxons have fought for their lives and survived another day...`
      : "Vikings and Saxons are still in the thick of battle.";
  }
}

function generateViking() {
  const name = "Harald";
  const strength = 150;
  const health = 300;
  return new Viking(name, health, strength);
}

function generateSaxon() {
  const health = 60;
  const strength = 25;
  return new Saxon(health, strength);
}

const war = new War();
war.addSaxon(generateSaxon());
war.addSaxon(generateSaxon());
war.addSaxon(generateSaxon());
war.addViking(generateViking());
war.addViking(generateViking());
war.addViking(generateViking());

console.log(`start`, war);

war.saxonAttack();
war.saxonAttack();
war.saxonAttack();
war.vikingAttack();
war.vikingAttack();
war.vikingAttack();

console.log(`end`, war);
console.log(`status`, war.showStatus());

*/

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
