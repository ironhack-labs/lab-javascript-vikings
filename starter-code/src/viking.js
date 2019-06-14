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
    super.receiveDamage(damage);
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
    super.receiveDamage(damage);
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

  //   getViking() {
  //     let randomVik = Math.floor(Math.random() * this.vikingArmy.length);
  //     return randomVik;
  //   }

  //   getSaxon() {
  //     let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
  //     return randomSax;
  //   }
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack() {
    let aSax = Math.floor(Math.random() * this.saxonArmy.length);
    let aVik = Math.floor(Math.random() * this.vikingArmy.length);
    let result = this.saxonArmy[aSax].receiveDamage(
      this.vikingArmy[aVik].strength
    );
    if (this.saxonArmy[aSax].health <= 0) {
      this.saxonArmy.splice(aSax, 1);
    }
    return result;
  }
  saxonAttack() {
    let aSax = Math.floor(Math.random() * this.saxonArmy.length);
    let aVik = Math.floor(Math.random() * this.vikingArmy.length);
    let result = this.vikingArmy[aVik].receiveDamage(
      this.saxonArmy[aSax].strength
    );
    if (this.vikingArmy[aVik].health <= 0) {
      this.vikingArmy.splice(aVik, 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
