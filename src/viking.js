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
    this.health -= damage;

    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else {
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

    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War extends Saxon {
  vikingArmy = [];
  saxonArmy = [];

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }

  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack() {
    //should make Saxon receiveDamage() equal to the strength of a Viking
  }

  saxonAttack() {
    //should make Viking receiveDamage() equal to the strength of a Saxon
  }

  showStatus() {
    if ((this.saxonArmy = []))
      return `Vikings have won the war of the century!`;
  }
}
