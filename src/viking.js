// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
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

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  };

  battleCry = function () {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
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
  vikingArmy = [];
  saxonArmy = [];

  addViking = function (vikingObj) {
    this.vikingArmy.push(vikingObj);
  };
  addSaxon = function (saxonObj) {
    this.saxonArmy.push(saxonObj);
  };

  vikingAttack = function () {
    let randomNumSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomNumSaxon];

    let randomNumViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomNumViking];

    let damage = randomSaxon.receiveDamage(randomViking.strength);

    if (damage === "A Saxon has died in combat") {
      this.saxonArmy.splice(randomNumSaxon);
    }

    return damage;
  };
  saxonAttack = function () {
    let randomNumViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomNumViking];

    let randomNumSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomNumSaxon];

    let damage = randomViking.receiveDamage(randomSaxon.strength);

    if (damage.includes(`${randomViking.name} has died in act of combat`)) {
      this.vikingArmy.splice(randomNumViking);
    }
    return damage;
  };
  showStatus = function () {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings have won the war of the century!";
    }
  };
}
