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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
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
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxon = this.saxonArmy[randomSaxonIndex];
    let viking = this.vikingArmy[randomVikingIndex];
    let damage = viking.strength;
    if (damage > saxon.health) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return saxon.receiveDamage(damage);
  }

  saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxon = this.saxonArmy[randomSaxonIndex];
    let viking = this.vikingArmy[randomVikingIndex];
    let damage = viking.receiveDamage(saxon.attack());
    if (viking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return damage;
  }

  //   showStatus() {
  //     if (!this.vikingArmy.length) {
  //       return "Saxons have fought for their lives and survived another day...";
  //     }
  //     if (this.saxonArmy.length === 0) {
  //       return "Vikings have won the war of the century!";
  //     }
  //     if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
  //       return "Vikings and Saxons are still in the thick of battle.";
  //     }
  //   }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
