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
    super.receiveDamage(damage);
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

  receiveDamage(damage) {
    super.receiveDamage(damage);
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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    var saxonRandom = this.saxonArmy[saxonIndex];
    var vikingRandom = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var res = saxonRandom.receiveDamage(vikingRandom.strength);
    if (saxonRandom.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return res;
  }

  saxonAttack() {
    var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    var saxonRandom = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    var vikingRandom = this.vikingArmy[vikingIndex];
    var res = vikingRandom.receiveDamage(saxonRandom.strength);
    if (vikingRandom.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return res;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
