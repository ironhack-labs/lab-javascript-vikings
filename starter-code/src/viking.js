// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.damage = damage;
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
    if (damage >= this.health) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
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

    // if (damage >= this.health) {
    //   return `A Saxon has died in combat`;
    // } else {
    //   return `A Saxon has received ${damage} points of damage`;
    // }
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
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
    var vikingArmy = this.vikingArmy;
    vikingArmy.push(Viking);
    return undefined;
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    var saxonHit = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.length -= 1;
    }
    return saxonHit;
  }

  saxonAttack() {
    var vikingHit = this.vikingArmy[0].receiveDamage(
      this.saxonArmy[0].strength
    );
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.length -= 1;
    }
    return vikingHit;
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else return "Vikings and Saxons are still in the thick of battle.";
  }
}
