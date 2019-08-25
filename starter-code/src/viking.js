// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
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
    return `Odin Owns You All!`;
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
function randomInt(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === max) {
    randomNumber--;
  }
  return randomNumber;
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
    let saxonAttackedIdx = randomInt(0, this.saxonArmy.length);
    let vikingAttackerIdx = randomInt(0, this.vikingArmy.length);
    let vikingAttackResult = this.saxonArmy[saxonAttackedIdx].receiveDamage(
      this.vikingArmy[vikingAttackerIdx].attack()
    );
    if (this.saxonArmy[saxonAttackedIdx].health < 0) {
      this.saxonArmy.splice(saxonAttackedIdx, 1);
    }
    return vikingAttackResult;
  }
  saxonAttack() {
    let vikingAttackedIdx = randomInt(0, this.vikingArmy.length);
    let saxonAttackerIdx = randomInt(0, this.saxonArmy.length);
    let saxonAttackResult = this.vikingArmy[vikingAttackedIdx].receiveDamage(
      this.saxonArmy[saxonAttackerIdx].attack()
    );
    if (this.vikingArmy[vikingAttackedIdx].health < 0) {
      this.vikingArmy.splice(vikingAttackedIdx, 1);
    }
    return saxonAttackResult;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    }
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}
}
