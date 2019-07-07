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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      //   return `${this.name} has received ${damage} points of damage`;
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      //   return `${this.name} has died in act of combat`;
      return `${this.name} has died in act of combat`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
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
    let x = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    let y = Math.floor(Math.random() * (this.vikingArmy.length - 1));

    let z = this.saxonArmy[x].receiveDamage(this.vikingArmy[y].strength);
    if (this.saxonArmy[x].health <= 0) {
      this.saxonArmy.splice(x, 1);

      return z;
    }
    return z;
  }

  saxonAttack() {
    let y = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    let x = Math.floor(Math.random() * (this.vikingArmy.length - 1));

    let z = this.vikingArmy[x].receiveDamage(this.saxonArmy[y].strength);
    if (this.vikingArmy[x].health <= 0) {
      this.vikingArmy.splice(x, 1);
      console.log(z);
      return z;
    }
    return z;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length <= 0) {
      return `Saxons have fought for their lives and survive another day...`;
    }
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
