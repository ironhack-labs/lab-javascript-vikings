let www;
let qqq;
// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = function () {
    return this.strength;
  };
  receiveDamage = function (damage) {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry = function () {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {
  receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
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

  randomSoldier(army) {
    return Math.floor(Math.random() * army.length);
  }

  firstArmyAttacks(firstArmy, secondArmy) {
    let firstSoldier = this.randomSoldier(firstArmy);
    let secondSoldier = this.randomSoldier(secondArmy);

    let result = secondArmy[secondSoldier].receiveDamage(
      firstArmy[firstSoldier].strength
    );
    if (secondArmy[secondSoldier].health <= 0) {
      secondArmy.splice(secondSoldier, 1);
    }
    return result;
  }

  vikingAttack() {
    return this.firstArmyAttacks(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.firstArmyAttacks(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    if (!this.saxonArmy.length)
      return "Vikings have won the war of the century!";
    if (!this.vikingArmy.length)
      return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
