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
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  // constructor features passed here
  constructor(name, health, strength) {
    super(health, strength); // super gives access to the methods
    this.name = name;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength); // super gives access to the methods
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
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
    this.vikingArmy.push(new Viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(new Saxon);
  }

  vikingAttack() {
    Saxon.this.receiveDamage(Viking.this.strength);
    if (Saxon.this.health <= 0) {
      this.saxonArmy.pop();
    }
    return Saxon.this.receiveDamage(Viking.this.strength);
  }

  saxonAttack() {
    Viking.this.receiveDamage(Saxon.this.strength);
    if (Viking.this.health <= 0) {
      this.vikingArmy.pop();
    }
    return Viking.this.receiveDamage(Saxon.this.strength);
  }

  showStatus() {
    if (this.saxonArmy === []) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy === []) {
      return `Saxons have fought for their lives and survived another day...!`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}