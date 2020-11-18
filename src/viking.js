class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
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

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon

class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War

class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let rand = Math.floor(Math.random() * this.saxonArmy.length);
    let dmg = this.saxonArmy[rand].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[rand].health <= 0) {
      this.saxonArmy.splice(rand, 1);
    }

    return dmg;
  }

  saxonAttack() {
    let rand = Math.floor(Math.random() * this.vikingArmy.length);
    let dmg = this.vikingArmy[rand].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[rand].health <= 0) {
      this.vikingArmy.splice(rand, 1);
    }

    return dmg;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length <= 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
