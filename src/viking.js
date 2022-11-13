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
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    return this.health > 0
      ? `${this.name} has received ${theDamage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    return this.health > 0
      ? `A Saxon has received ${theDamage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(theViking) {
    this.vikingArmy.push(theViking);
  }
  addSaxon(theSaxon) {
    this.saxonArmy.push(theSaxon);
  }

    vikingAttack() {
      const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxon = this.saxonArmy[saxonIndex];
      const viking = this.vikingArmy[vikingIndex];

      const attack = saxon.receiveDamage(viking.strength);

      if (saxon.health <= 0) this.saxonArmy.splice(saxonIndex, 1);

      return attack;
    }
    saxonAttack() {
      const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxon = this.saxonArmy[saxonIndex];
      const viking = this.vikingArmy[vikingIndex];

      const attack = viking.receiveDamage(saxon.strength);

      if (viking.health <= 0) this.vikingArmy.splice(vikingIndex, 1);

      return attack;
    }

  attack(theArmy) {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxon = this.saxonArmy[saxonIndex];
    const viking = this.vikingArmy[vikingIndex];

    let attack = '';

    if (theArmy === 'saxon') {
      attack = viking.receiveDamage(saxon.strength);
      if (viking.health <= 0) this.vikingArmy.splice(vikingIndex, 1);
    } else if (theArmy === 'viking') {
      attack = saxon.receiveDamage(viking.strength);
      if (saxon.health <= 0) this.saxonArmy.splice(saxonIndex, 1);
    } else {
      attack = 'unknown army. try again';
    }

    return attack;
  }

  showStatus() {
    if (!this.vikingArmy.length)
      return `Saxons have fought for their lives and survived another day...`;
    if (!this.saxonArmy.length)
      return `Vikings have won the war of the century!`;
    if (this.vikingArmy.length && this.saxonArmy.length)
      return `Vikings and Saxons are still in the thick of battle.`;
  }
}
