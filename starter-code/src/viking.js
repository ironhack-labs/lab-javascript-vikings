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
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
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
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let vikRandIdx = Math.floor(Math.random() * this.vikingArmy.length);
    let saxRandIdx = Math.floor(Math.random() * this.saxonArmy.length);
    let x = this.saxonArmy[saxRandIdx].receiveDamage(
      this.vikingArmy[vikRandIdx].attack()
    );

    if (this.saxonArmy[saxRandIdx].health <= 0)
      this.saxonArmy.splice(saxRandIdx, 1);

    return x;
  }

  saxonAttack() {
    let vikRandIdx = Math.floor(Math.random() * this.vikingArmy.length);
    let saxRandIdx = Math.floor(Math.random() * this.saxonArmy.length);

    let x = this.vikingArmy[vikRandIdx].receiveDamage(
      this.saxonArmy[saxRandIdx].attack()
    );
    if (this.vikingArmy[vikRandIdx].health <= 0)
      this.vikingArmy.splice(vikRandIdx, 1);
    return x;
  }

  showStatus() {
    if (!this.saxonArmy.length)
      return "Vikings have won the war of the century!";
    if (!this.vikingArmy.length)
      return "Saxons have fought for their lives and survive another day...";
    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
