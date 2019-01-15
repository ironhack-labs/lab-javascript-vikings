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
    this.damage = damage; // is it mandatory or can we directly put the substraction
    this.health = this.health - this.damage; // to be checked
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  // attack(){} inherited from Soldier Class
  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  // attack() {} inherited from Soldier Class
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    var oneViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var oneSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    console.log("coucou");

    console.log(oneViking);
    console.log(oneSaxon);

    var res = oneSaxon.receiveDamage(oneViking.strength);

    // remove dead saxon
    this.saxonArmy = this.saxonArmy.filter(function(e) {
      return e.health > 0;
    });

    return res;
  }
  saxonAttack() {
    var oneViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var oneSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];

    var res = oneViking.receiveDamage(oneSaxon.strength);

    // remove dead saxon
    this.vikingArmy = this.vikingArmy.filter(function(e) {
      return e.health > 0;
    });
    return res;
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0 ) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
