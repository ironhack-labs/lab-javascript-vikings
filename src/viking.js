// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function () {
      return this.strength;
    };
    this.receiveDamage = function (damage) {
      this.health -= damage;
    };
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.receiveDamage = function (damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    };
    this.battleCry = function () {
      return "Odin Owns You All!";
    };
  }
} // Saxon
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
  vikingAttack() {
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var res = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return res;
  }

  saxonAttack() {
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var selectedViking = this.vikingArmy[randomViking];
    var selectedSaxon = this.saxonArmy[randomSaxon];
    var res = selectedViking.receiveDamage(selectedSaxon.strength);
    if (selectedViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return res;
  }

  showStatus() {
    if (this.saxonArmy.length === []) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length === []) {
      return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
