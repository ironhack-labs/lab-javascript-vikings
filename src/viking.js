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
    const damage = this.attack(this.vikingArmy, this.saxonArmy);
    this.saxonArmy = this.saxonArmy.filter(soldier => soldier.health > 0);
    return damage;
  }
  saxonAttack() {
    const damage = this.attack(this.saxonArmy, this.vikingArmy);
    this.vikingArmy = this.vikingArmy.filter(soldier => soldier.health > 0);
    return damage;
  }

  attack(attackingArmy, defendingArmy) {
    const damage = defendingArmy[
      Math.floor(Math.random() * defendingArmy.length)
    ].receiveDamage(
      attackingArmy[Math.floor(Math.random() * attackingArmy.length)].strength
    );
    return damage;
  }

  showStatus() {
    return this.saxonArmy.length === 0
      ? "Vikings have won the war of the century!"
      : this.vikingArmy.length === 0
      ? "Saxons have fought for their lives and survived another day..."
      : "Vikings and Saxons are still in the thick of battle.";
  }
}
