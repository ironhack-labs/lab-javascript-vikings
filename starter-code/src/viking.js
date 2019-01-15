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
    this.damage = damage;
    this.health = this.health - this.damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(vikingName, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = vikingName;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > damage) {
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
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
  }
  receiveDamage(damage) {
    // var damage = this.health - this.strength;
    super.receiveDamage(damage);
    if (this.health > 0) {
      return "A Saxon has received " + this.damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
War();
