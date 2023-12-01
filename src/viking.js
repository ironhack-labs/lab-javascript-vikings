// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);

    this.name = name;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
    if (this.health > thedamage) {
      return `${this.name} has received ${thedamage} points of damage`;
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
  receiveDamage(thedamage) {
    this.health -= thedamage;
    if (this.health > 0) {
      return `A Saxon has received ${thedamage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War BONUS
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vicking) {
    this.vikingArmy.push(vicking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {}
  saxonAttack() {}
  showStatus() {}
}
