// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= this.damage;
    //   delete this.health - this.damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= this.damage;

    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${this.damage} points of damage`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= this.damage;
    if (this.health === 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${this.damage} points of damage`;
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
    if (Saxon.receiveDamage(damage) == Viking.strength) {
      this.saxonArmy.pop;
    }
  }
  saxonAttack() {}
  showStatus() {}
}
