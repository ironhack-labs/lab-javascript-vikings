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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
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

  receiveDamage(damage) {
    super.receiveDamage(damage);
    // return "foo";
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : "A Saxon has died in combat";
    // ? `A Saxon has received ${damage} points of damage`
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
    var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.shift();
    }
    return result;
  }
  saxonAttack() {
    var result1 = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.shift();
    }
    return result1;
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

viking1 = new Viking("Astrid", 12, 67);
saxon1 = new Saxon(23, 34);
war1 = new War();
war1.addViking(viking1);
war1.addSaxon(saxon1);
console.log(war1);
war1.vikingAttack();
console.log(war1);
console.log(war1.showStatus());

// war1.saxonAttack();
