// Soldier
class Soldier {
  constructor(health, strength) {

    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength;
  }

  receiveDamage(attackDamage) {
    this.health -= attackDamage;
  }
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(attackDamage) {
    super.receiveDamage(attackDamage);
    if (this.health > 0) {
      return `${this.name} has received ${attackDamage} points of damage`;
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
  receiveDamage(attackDamage) {
    super.receiveDamage(attackDamage);
    if (this.health > 0) {
      return `A Saxon has received ${attackDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}


// War
class War { }
