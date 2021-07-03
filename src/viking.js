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
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return `${this.name} has ${damage >= this.health ? `died in act of combat` : `received ${damage} points of damage`}`

  };

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return `A Saxon has ${this.health <= 0 ? `died in combat` : `received ${damage} points of damage`}`;
  };
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
    return this.attacking('viking')
  }

  saxonAttack() {
    return this.attacking('saxon');
  }

  attacking(soldier) {
    const randomSaxNum = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikNum = Math.floor(Math.random() * this.vikingArmy.length)
    const saxon = this.saxonArmy[randomSaxNum];
    const viking = this.vikingArmy[randomVikNum];

    let result;
    if (soldier === "viking") {
      result = saxon.receiveDamage(viking.strength);
      if (saxon.health <= 0) {
        this.saxonArmy.splice(randomSaxNum, 1);
      }
    } else if (soldier === 'saxon') {
      result = viking.receiveDamage(saxon.strength);

      if (viking.health <= 0) {
        this.vikingArmy.splice(randomVikNum, 1);
      }
    }
    return result;
  }


  showStatus() {
    const vikLength = this.vikingArmy.length;
    const saxLength = this.saxonArmy.length;
    if (vikLength && saxLength) {
      return `Vikings and Saxons are still in the thick of battle.`
    } else if (!saxLength) {
      return `Vikings have won the war of the century!`;
    } else if (!vikLength) {
      return `Saxons have fought for their lives and survived another day...`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
