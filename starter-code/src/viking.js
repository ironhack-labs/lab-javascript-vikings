// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
      return this.strength;
    };
    this.receiveDamage = function(damage) {
      this.health -= damage;
    };
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.attack = function() {
      return this.strength;
    };
    this.receiveDamage = function(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    };
    this.battleCry = function() {
      return `Odin Owns You All!`;
    };
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.attack = function() {
      return this.strength;
    };
    this.receiveDamage = function(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
    };
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(viking) {
      this.vikingArmy.push(viking);
    };
    this.addSaxon = function(saxon) {
      this.saxonArmy.push(saxon);
    };
    this.vikingAttack = function() {
      this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
      if (this.saxonArmy[0].health <= 0) {
        this.saxonArmy.splice(0, 1);
        return `A Saxon has died in combat`;
      }
    };
    this.saxonAttack = function() {
      this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
      if (this.vikingArmy[0].health <= 0) {
        let name = this.vikingArmy[0].name;
        this.vikingArmy.splice(0, 1);
        return `${name} has received ${
          this.saxonArmy[0].strength
        } points of damage`;
      } else {
        return `${this.vikingArmy[0].name} has received ${
          this.saxonArmy[0].strength
        } points of damage`;
      }
    };
    this.showStatus = function() {
      if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    };
  }
}
