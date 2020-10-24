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
    // this.battleCry = function () {
    //   return `Odin Owns You All!`;
    // };
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
      return `Odin Owns You All!`;
    };
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);

    this.receiveDamage = function (damage) {
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
    this.addViking = function (viking) {
      this.vikingArmy.push(viking);
    };
    this.addSaxon = function (saxon) {
      this.saxonArmy.push(saxon);
    };

    this.vikingAttack = function () {
      const ranSaxon = Math.floor(
        Math.random() * Math.floor(this.saxonArmy.length)
      );
      const ranViking = Math.floor(
        Math.random() * Math.floor(this.vikingArmy.length)
      );

      const result = this.saxonArmy[ranSaxon].receiveDamage(
        this.vikingArmy[ranViking].strength
      );
      if (this.saxonArmy[ranSaxon].health < 0) {
        this.saxonArmy.splice(ranSaxon, 1);
      }

      return result;
    };
    this.saxonAttack = function () {
      const ranSaxon = Math.floor(
        Math.random() * Math.floor(this.saxonArmy.length)
      );
      const ranViking = Math.floor(
        Math.random() * Math.floor(this.vikingArmy.length)
      );

      //return result of vikingArmy damage
      const result = this.vikingArmy[ranViking].receiveDamage(
        this.saxonArmy[ranSaxon].strength
      );

      //check if viking has health
      if (this.vikingArmy[ranViking].health <= 0) {
        this.vikingArmy.splice(ranViking, 1);
      }

      return result;
    };

    this.showStatus = function () {
      if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    };
  }
}
