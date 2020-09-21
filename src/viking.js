/*  Soldier  */
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function () {
      return strength;
    };

    this.receiveDamage = function (damage) {
      this.health = health - damage;
    };
  }
}

/*  Viking  */
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;

    this.receiveDamage = function (damage) {
      if (damage >= health) {
        this.health -= damage;
        return `${name} has died in act of combat`;
      } else {
        this.health -= damage;
        return `${name} has received ${damage} points of damage`;
      }
    };

    this.battleCry = function () {
      return "Odin Owns You All!";
    };
  }
}

/*  Saxon  */
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.name = name;

    this.receiveDamage = function (damage) {
      if (damage >= health) {
        this.health -= damage;
        return "A Saxon has died in combat";
      } else {
        this.health -= damage;
        return `A Saxon has received ${damage} points of damage`;
      }
    };
  }
}

/*  War  */
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
      const randViking = this.vikingArmy[
        Math.floor(Math.random() * this.vikingArmy.length)
      ];
      const randSaxon = this.saxonArmy[
        Math.floor(Math.random() * this.saxonArmy.length)
      ];

      const vikingDmg = randSaxon.receiveDamage(randViking.strength);
      if (randSaxon.health <= 0) {
        this.saxonArmy.pop();
      }
      return vikingDmg;
    };

    this.saxonAttack = function () {
      const randViking = this.vikingArmy[
        Math.floor(Math.random() * this.vikingArmy.length)
      ];
      const randSaxon = this.saxonArmy[
        Math.floor(Math.random() * this.saxonArmy.length)
      ];

      const saxonDmg = randViking.receiveDamage(randSaxon.strength);
      if (randViking.health <= 0) {
        this.vikingArmy.pop();
      }
      return saxonDmg;
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
