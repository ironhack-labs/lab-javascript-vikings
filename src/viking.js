// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(dmg) {
    this.health = this.health - dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(dmg) {
    this.health = this.health - dmg;
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    this.health = this.health - dmg;
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
    } else if (this.health <= 0) {
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randViking = Math.floor(Math.random() * this.vikingArmy.length);
    let damage = this.vikingArmy[randViking].strength;
    let result = this.saxonArmy[randSaxon].receiveDamage(damage);
    if (this.saxonArmy[randSaxon].health <= 0) {
      this.saxonArmy.splice(randSaxon, 1);
    }
    return result;
  }

  saxonAttack() {
    let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randViking = Math.floor(Math.random() * this.vikingArmy.length);
    let damage = this.saxonArmy[randSaxon].strength;
    let result = this.vikingArmy[randViking].receiveDamage(damage);
    if (this.vikingArmy[randViking].health <= 0) {
      this.vikingArmy.splice(randViking, 1);
    }
    return result;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length > 0 || this.vikingArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
