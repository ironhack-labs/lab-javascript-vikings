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

    return this.health <= 0
      ? `${this.name} has died in act of combat`
      : `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    return this.health <= 0
      ? `A Saxon has died in combat`
      : `A Saxon has received ${damage} points of damage`;
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
    const targetIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const target = this.saxonArmy[targetIndex];
    const attacker =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const attackResult = target.receiveDamage(attacker.strength);

    if (target.health <= 0) {
      this.saxonArmy.splice(targetIndex, 1);
    }

    return attackResult;
  }

  saxonAttack() {
    const targetIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const target = this.vikingArmy[targetIndex];
    const attacker =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const attackResult = target.receiveDamage(attacker.strength);

    if (target.health <= 0) {
      this.vikingArmy.splice(targetIndex, 1);
    }

    return attackResult;
  }
}

const viking = new Viking("Thor", 100, 10);
const saxon = new Saxon(50, 5);

const war = new War();

war.addViking(viking);
war.addSaxon(saxon);

war.vikingAttack();
