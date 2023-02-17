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

const soldier = new Soldier(50, 100);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return super.attack();
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

const viking = new Viking(50, 100, 10);

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
const saxon = new Saxon(50, 20);
saxon.receiveDamage(5);

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
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxonArmy[saxonRandom].receiveDamage(
      this.vikingArmy[vikingRandom].strength
    );
    if (this.saxonArmy[saxonRandom].health <= 0) {
      this.saxonArmy.splice(saxonRandom, 1);
      return `A Saxon has died in combat`;
    }
  }

  saxonAttack() {
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    this.vikingArmy[vikingRandom].receiveDamage(
      this.saxonArmy[saxonRandom].strength
    );
    if (this.vikingArmy[vikingRandom].health <= 0) {
      this.vikingArmy.splice(vikingRandom, 1);
      return `A Viking has died in act of combat`;
    } else {
      return `${this.vikingArmy[vikingRandom].name} has received ${this.saxonArmy[saxonRandom].strength} points of damage`;
    }
  }
  showStatus() {}
}

const saxonas = new War();
saxonas.addViking(new Viking(50, 10, 10));
saxonas.addSaxon(new Saxon(10, 10));
saxonas.saxonAttack();
