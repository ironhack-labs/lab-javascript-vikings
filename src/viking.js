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
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
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
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }
  vikingAttack() {
    const randSax = Math.floor(Math.random() * this.saxonArmy.length);
    const randVik = Math.floor(Math.random() * this.vikingArmy.length);
    const saxDamage = this.saxonArmy[randSax].receiveDamage(
      this.vikingArmy[randVik].strength
    );
    if (this.saxonArmy[randSax].health <= 0) {
      this.saxonArmy.length = this.saxonArmy.length - 1;
    }
    return saxDamage;
  }

  saxonAttack() {
    const randSax = Math.floor(Math.random() * this.saxonArmy.length);
    const randVik = Math.floor(Math.random() * this.vikingArmy.length);
    const vikDamage = this.vikingArmy[randVik].receiveDamage(
      this.saxonArmy[randSax].strength
    );
    if (this.vikingArmy[randVik].health <= 0) {
      this.vikingArmy.length = this.vikingArmy.length - 1;
    }
    return vikDamage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survived another day...";
    if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
