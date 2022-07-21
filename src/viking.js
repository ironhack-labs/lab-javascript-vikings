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
    return `Odin Owns You All!`;
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
  }
  attack(attackerArmy, receiverArmy) {
    const rndAttacker =
      attackerArmy[Math.floor(Math.random() * attackerArmy.length)];
    const rndReceiver =
      receiverArmy[Math.floor(Math.random() * receiverArmy.length)];
    const result = rndReceiver.receiveDamage(rndAttacker.strength);
    receiverArmy.forEach((soldier, index) => {
      if (soldier.health <= 0) receiverArmy.splice(index, 1);
    });
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survived another day...";
    else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
