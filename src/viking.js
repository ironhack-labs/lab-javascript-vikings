// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
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
  addViking(obj) {
    this.vikingArmy.push(obj);
  }
  addSaxon(obj) {
    this.saxonArmy.push(obj);
  }

  vikingAttack() {
    let fightingViking = this.vikingArmy[0];
    let fightingSaxon = this.saxonArmy[0];
    let result = fightingSaxon.receiveDamage(fightingViking.strength);
    if (fightingSaxon.health < fightingViking.strength) {
      this.saxonArmy.pop();
    }
    return result;
  }

  saxonAttack() {
    let fightingViking = this.vikingArmy[0];
    let fightingSaxon = this.saxonArmy[0];
    let result = fightingViking.receiveDamage(fightingSaxon.strength);
    if (fightingViking.health < fightingSaxon.strength) {
      this.vikingArmy.pop();
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
