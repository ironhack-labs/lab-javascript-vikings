// Soldier
class Soldier {
  // make constructor
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
      return this.strength;
    };
    this.receiveDamage = function(damage) {
      this.health = this.health - damage;
    };
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = "Harald";
    this.battleCry = function() {
      return "Odin Owns You All!";
    };
    this.receiveDamage = function(damage) {
      this.health = this.health - damage;

      if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
      } else {
        return this.name + " has died in act of combat";
      }
    };
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.receiveDamage = function(damage) {
      this.health = this.health - damage;
      if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
      } else {
        return "A Saxon has died in combat";
      }
    };
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(Viking) {
      this.vikingArmy.push(Viking);
    };
    this.addSaxon = function(Saxon) {
      this.saxonArmy.push(Saxon);
    };
    this.vikingAttack = function() {
      var viking = this.vikingArmy[
        Math.floor(Math.random() * this.vikingArmy.length)
      ];
      var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      var saxon = this.saxonArmy[saxonIndex];

      var total = saxon.receiveDamage(viking.strength);

      if (saxon.health > 0) {
      } else {
        this.saxonArmy.splice(saxonIndex, 1);
      }

      return total;
    };

    this.saxonAttack = function() {
      var saxon = this.saxonArmy[
        Math.floor(Math.random() * this.saxonArmy.length)
      ];
      var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      var viking = this.vikingArmy[vikingIndex];

      var total = viking.receiveDamage(saxon.strength);

      if (viking.health > 0) {
      } else {
        this.vikingArmy.splice(vikingIndex, 1);
      }

      return total;
    };

    this.showStatus = function() {
      if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
        return "Vikings and Saxons are still in the thick of battle.";
      } else if (this.vikingArmy.length == 0) {
        return "Saxons have fought for their lives and survive another day...";
      } else {
        return "Vikings have won the war of the century!";
      }
    };
  }
}
