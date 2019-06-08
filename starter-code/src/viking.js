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

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let saxonOne = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let vikingOne = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    saxonOne.receiveDamage(vikingOne.strength);

    if (saxonOne.health <= 0) {
      this.saxonArmy.pop(saxonOne);
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${vikingOne.strength} points of damage`;
    }
  }

  saxonAttack() {
    let saxonOne = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let vikingOne = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    vikingOne.receiveDamage(saxonOne.strength);

    if (vikingOne.health > 0) {
      return `${vikingOne.name} has received ${
        saxonOne.strength
      } points of damage`;
    } else {
      this.vikingArmy.pop(vikingOne);
      return `${vikingOne.name} has died in act of combat`;
    }
  }

  showStatus() {
    if (this.saxonArmy == 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy == 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}