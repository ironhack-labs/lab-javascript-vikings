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
    return this.health > 0
      ? this.name + " has received " + damage + " points of damage"
      : this.name + " has died in act of combat";
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

//Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? "A Saxon has received " + damage + " points of damage"
      : "A Saxon has died in combat";
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  generateRandom(arg1) {
    return Math.floor(Math.random() * arg1.length);
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    return this.fightEachOther(this.saxonArmy, this.vikingArmy);
  }

  saxonAttack() {
    return this.fightEachOther(this.vikingArmy, this.saxonArmy);
  }

  fightEachOther(arg1, arg2) {
    const genNum = this.generateRandom(arg1);
    const result = arg1[genNum].receiveDamage(arg2[genNum].strength);

    if (result.includes("died") === true) {
      arg1.pop();
      return result;
    } else {
      return result;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
