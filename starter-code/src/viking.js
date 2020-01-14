// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => this.strength;
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
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }
  battleCry = () => "Odin Owns You All!";
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(v) {
    this.vikingArmy.push(v);
  }

  addSaxon(s) {
    this.saxonArmy.push(s);
  }

  vikingAttack() {
    let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomNumberSaxon];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    if (randomViking.strength >= randomSaxon.health) {
      this.saxonArmy.splice(randomNumberSaxon, 1);
    }
    return randomSaxon.receiveDamage(randomViking.strength);
  }

  saxonAttack() {
    let randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomNumberSaxon];
    let randomViking = this.vikingArmy[randomNumberViking];
    if (randomSaxon.strength >= randomViking.health) {
      this.vikingArmy.splice(randomNumberViking, 1);
    }
    return randomViking.receiveDamage(randomSaxon.strength);
  }

  showStatus() {
    return !this.saxonArmy.length
      ? "Vikings have won the war of the century!"
      : !this.vikingArmy.length
      ? "Saxons have fought for their lives and survive another day..."
      : "Vikings and Saxons are still in the thick of battle.";
  }
}
