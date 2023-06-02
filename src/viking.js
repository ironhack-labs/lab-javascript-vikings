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
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Viking {
  constructor(health, strength) {
    super();
    this.health = health;
    this.strength = strength;
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
    let randomAttacker =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomDefender =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    randomDefender.health -= randomAttacker.strength;

    if (randomDefender.health <= 0) {
      // ADD CODE HERE DEVIN
      console.log("DEAD!!!!!");
    }
  }

  saxonAttack() {
    let random = Math.floor(Math.random() * 10);
  }

  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }

    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return "Vikings have won the war of the century!";
    }

    if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
  }
}
