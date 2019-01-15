// Soldier
class Soldier {
  constructor(healthSoldier, strengthSoldier) {
    this.health = healthSoldier;
    this.strength = strengthSoldier;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// var SoldierA = new Soldier(100, 30);
// console.log(SoldierA);
// console.log(SoldierA.attack());
// SoldierA.receiveDamage(10);
// console.log(SoldierA);

// Viking
class Viking extends Soldier {
  constructor(nameViking, healthViking, strengthViking) {
    super(healthViking, strengthViking);
    this.name = nameViking;
  }
  receiveDamage(damage) {
    this.health -= damage;
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
  }
  receiveDamage(damage) {
    this.health -= damage;
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
    var nbViking = Math.floor(Math.random() * this.vikingArmy.length);

    var vikingRandom = this.vikingArmy[nbViking];

    var nbSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    var saxonRandom = this.saxonArmy[nbSaxon];

    var damageVikingtoSaxon = vikingRandom.attack();
    console.log(vikingRandom);
    console.log(damageVikingtoSaxon);

    var deadSaxon = saxonRandom.receiveDamage(damageVikingtoSaxon);

    if (saxonRandom.health <= 0) {
      this.saxonArmy.splice(nbSaxon, 1);
    }

    return deadSaxon;
  }

  saxonAttack() {
    var nbViking = Math.floor(Math.random() * this.vikingArmy.length);

    var vikingRandom = this.vikingArmy[nbViking];

    var nbSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    var saxonRandom = this.saxonArmy[nbSaxon];

    var damageSaxontoViking = saxonRandom.attack();
    console.log(saxonRandom);
    console.log(damageSaxontoViking);

    var deadViking = vikingRandom.receiveDamage(damageSaxontoViking);

    if (vikingRandom.health <= 0) {
      this.vikingArmy.splice(nbViking, 1);
    }

    return deadViking;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

var VikingA = new Viking("VikingA", 1, 1);
var VikingB = new Viking("VikingB", 1, 1);

var SaxonA = new Saxon(200, 300);
var SaxonB = new Saxon(10, 50);

var War1 = new War();
console.log(War1);

War1.addViking(VikingA);
War1.addViking(VikingB);
War1.addSaxon(SaxonA);
War1.addSaxon(SaxonB);

console.log(War1.vikingArmy);
console.log(War1.saxonArmy);
console.log(War1);

console.log(War1.vikingAttack());
console.log(War1.saxonAttack());
console.log(War1);
