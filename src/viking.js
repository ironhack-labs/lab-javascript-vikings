// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    if (this.health - damage > 0) {
    this.health -= damage;
    } else {
      this.health = 0;
    }
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
      return `${this.name} has received ${damage} points of damage`;
    }

    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }

    return `A Saxon has died in combat`;
  }
}

// War
class War {
  vikingArmy = []
  saxonArmy = []

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    return attack('viking', this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return attack('saxon', this.vikingArmy, this.saxonArmy);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }

    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }

    return 'Vikings and Saxons are still in the thick of battle.'
  }
}

function attack(attacker, vikingArmy, saxonArmy) {
  let randomIndexViking = Math.floor(Math.random() * vikingArmy.length);
  let randomIndexSaxon = Math.floor(Math.random() * saxonArmy.length);

  let viking = vikingArmy[randomIndexViking];
  let saxon = saxonArmy[randomIndexSaxon];

  if (attacker === 'viking') {
    return receiveDamage(viking, saxon, saxonArmy);
  }

  if (attacker === 'saxon') {
    return receiveDamage(saxon, viking, vikingArmy)
  }
}

function receiveDamage(attacker, attacked, attackedArmy) {
  let receiveDamageMessage = attacked.receiveDamage(attacker.strength);

  if (attacked.health <= 0) {
    attackedArmy.splice(attackedArmy.indexOf(attacked), 1);
  }

  return receiveDamageMessage;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
