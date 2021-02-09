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
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` 
           : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` 
    : `A Saxon has died in combat`;
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


  // random : Math.floor(Math.random() * Math.floor(arr.length)
  vikingAttack() {
    let saxonWarrior = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let vikingWarrior = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    saxonWarrior.receiveDamage(vikingWarrior.strength);
    if (saxonWarrior.health <= 0) this.saxonArmy.splice(saxonWarrior);
  }

  saxonAttack() {
    let saxonWarrior = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let vikingWarrior = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    vikingWarrior.receiveDamage(saxonWarrior.strength);
    if (vikingWarrior.health <= 0) this.vikingArmy.splice(vikingWarrior);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) "Vikings have won the war of the century!";
    else if (this.vikingArmy.length === 0) "Saxons have fought for their lives and survived another day...";
    else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) "Vikings and Saxons are still in the thick of battle.";
  }
}
