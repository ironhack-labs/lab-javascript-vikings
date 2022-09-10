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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function (Viking) {
    this.vikingArmy.push(Viking);
  };
  this.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon);
  };
  this.vikingAttack = function () {
    let saxonSoldiers =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let vikingSoldiers =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    saxonSoldiers.receiveDamage(vikingSoldiers.attack());
    if (saxonSoldiers.health <= 0) {
      this.saxonArmy = [];
      return 'A Saxon has died in combat';
    }
  };
  this.saxonAttack = function () {
    let saxonSoldiers =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let vikingSoldiers =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    vikingSoldiers.receiveDamage(saxonSoldiers.attack());
    if (vikingSoldiers.health <= 0) {
      this.vikingArmy = [];
    }
    return (
      vikingSoldiers.name +
      ' has received ' +
      saxonSoldiers.strength +
      ' points of damage'
    );
  };
  this.showStatus = function () {
    if (this.saxonArmy === undefined || this.saxonArmy.length == 0) {
      // To check if an array is empty or not
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...';
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length != 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  };
}
