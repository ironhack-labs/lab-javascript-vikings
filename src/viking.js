// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(the_damage) {
    {
      this.health -= the_damage;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, strength, health) {
    super(strength, health);
    this.name = name;
  }

  receiveDamage(the_damage) {
    this.health -= the_damage;
    if (this.health > 0) {
      return `${this.name} has received ${the_damage} points of damage`;
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
  attack() {
    return this.strength;
  }
  receiveDamage(the_damage) {
    this.health -= the_damage;
    if (this.health > 0) {
      return `A Saxon has received ${the_damage} points of damage`;
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  //Armies Attak
  vikingAttack() {
    let damageSaxon =
      this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let attackviking =
      this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
  }

  saxonAttack() {}

  showStatus() {
    if (this.saxonArmy < 0) {
      return "Vikings have won the war of the century!";
    }
  }
}
