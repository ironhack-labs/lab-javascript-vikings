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
    this.health = health;
    this.strength = strength;
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    this.randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const result = this.saxonArmy[this.randomSaxon].receiveDamage(
      this.vikingArmy[this.randomViking].strength
    );
    if (result === "A Saxon has died in combat") {
      this.saxonArmy.splice(this.randomSaxon, 1);
    }
    return result;
  }
  saxonAttack() {
    const result = this.vikingArmy[this.randomViking].receiveDamage(
      this.saxonArmy[this.randomSaxon].strength
    );
    if (
      result ===
      `${this.vikingArmy[this.randomViking].name} has died in act of combat`
    ) {
      this.vikingArmy.splice(this.randomViking, 1);
    }
    return result;
  }
  showStatus() {
    if (!this.saxonArmy.length)
      return `Vikings have won the war of the century!`;
    if (!this.vikingArmy.length)
      return `Saxons have fought for their lives and survived another day...`;
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
      return `Vikings and Saxons are still in the thick of battle.`;
  }
}
