// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return (this.strength = this.strength);
  }

  receiveDamage(theDamageViking) {
    this.health = this.health - theDamageViking;

    if (this.health >= theDamageViking) {
      return `${this.name} has received ${theDamageViking} points of damage`;
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
  attack() {
    return (this.strength = this.strength);
  }

  receiveDamage(theDamageSaxon) {
    this.health = this.health - theDamageSaxon;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${theDamageSaxon} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(oneViking) {
    this.vikingArmy.push(oneViking);
  }

  addSaxon(oneSaxon) {
    this.saxonArmy.push(oneSaxon);
  }

  vikingAttack() {}

  saxonAttack() {}

  showStatus() {}
}
