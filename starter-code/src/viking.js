// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameViking, healthViking, strengthViking) {
    super(healthViking, strengthViking);
    this.name = nameViking;
    // this.health = healthViking;
    // this.strength = strengthViking;
  }
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
  constructor(healthSaxon, strengthSaxon) {
    super(healthSaxon, strengthSaxon);
    this.health = healthSaxon;
    this.strength = strengthSaxon;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War;
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
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randSaxon = this.saxonArmy[indexSaxon];
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randViking = this.vikingArmy[indexViking];
    if (randSaxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }
    return randSaxon.receiveDamage(randViking.strength);
  }
  saxonAttack() {
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randSaxon = this.saxonArmy[indexSaxon];
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randViking = this.vikingArmy[indexViking];
    if (randViking.health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }
    return randViking.receiveDamage(randSaxon.strength);
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
