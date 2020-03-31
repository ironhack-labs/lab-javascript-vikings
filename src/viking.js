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
  attack() {
    return super.attack();
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  attack() {
    return super.attack();
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let health = this.saxonArmy[indexSaxon].receiveDamage(
      this.vikingArmy[indexViking].attack()
    );
    if (this.saxonArmy[indexSaxon].health <= 0) {
      this.saxonArmy.splice(indexSaxon);
    }
    return health;
  }

  saxonAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let health = this.vikingArmy[indexViking].receiveDamage(
      this.saxonArmy[indexSaxon].attack()
    );
    if (this.vikingArmy[indexViking].health <= 0) {
      this.vikingArmy.splice(indexViking);
    }
    return health;
  }
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
