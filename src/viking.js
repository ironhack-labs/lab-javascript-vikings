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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
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
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const vikingDamage = this.vikingArmy[randomViking].strength;

    const returnMessage =
      this.saxonArmy[randomSaxon].receiveDamage(vikingDamage);
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return returnMessage;
  }

  saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonDamage = this.saxonArmy[randomSaxon].strength;

    const returnMessage =
      this.vikingArmy[randomViking].receiveDamage(saxonDamage);
    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return returnMessage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }

  saxonOrVikingAttack(attackerArmy, defenderArmy) {
    const randomAttacker = Math.floor(Math.random() * attackerArmy.length);
    const randomDefender = Math.floor(Math.random() * defenderArmy.length);

    const attackerDamage = attackerArmy[randomAttacker].strength;

    const result = defenderArmy[randomDefender].receiveDamage(attackerDamage);
    if (defenderArmy[randomDefender].health <= 0) {
      defenderArmy.splice(randomDefender, 1);
    }
    return result;
  }
}

// Vikings
const vikings = [
  new Viking('Harrold', 45, 50),
  new Viking('Ragnar', 30, 50),
  new Viking('Vikpus', 30, 50),
  new Viking('Rognar', 30, 50),
  new Viking('Harrick', 30, 50),
  new Viking('Viggo', 30, 50),
  new Viking('Harald', 30, 50),
  new Viking('Astrid', 30, 50),
  new Viking('Floki', 30, 50),
  new Viking('Thor', 30, 50),
  new Viking('Odin', 30, 50),
  new Viking('Frigg', 30, 50)
];

// Saxons
const saxons = [
  new Saxon(20, 28),
  new Saxon(30, 21),
  new Saxon(40, 30),
  new Saxon(20, 29),
  new Saxon(25, 26),
  new Saxon(35, 41),
  new Saxon(34, 22),
  new Saxon(32, 31),
  new Saxon(45, 50)
];

const guerre1 = new War();

for (const saxon of saxons) {
  guerre1.addSaxon(saxon);
}

for (const viking of vikings) {
  guerre1.addViking(viking);
}

function fights() {
  const armies = [guerre1.vikingArmy, guerre1.saxonArmy];

  while (guerre1.saxonArmy.length > 0) {
    let randomNum1 = Math.floor(Math.random() * 2);
    let randumNum2 = 1;

    if (randomNum1 === 1) {
      randumNum2 = 0;
      console.log('Attaque des Saxons');
    } else {
      randumNum2 = 1;
      console.log('Attaque des Vikings');
    }
    guerre1.saxonOrVikingAttack(armies[randomNum1], armies[randumNum2]);

    console.log(guerre1.showStatus());
  }
}

fights();

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
