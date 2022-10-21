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

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;

    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
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

  vikingAttack() {
    const viking =
      this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length - 1))];
    const sax =
      this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length - 1))];
    const damage = sax.receiveDamage(viking.strength);
    const deadSax = [];

    for (let s in this.saxonArmy) {
      if (this.saxonArmy[s].health <= 0) {
        this.saxonArmy.splice(deadSax[s], 1);
      }
    }

    return damage;
  }

  saxonAttack() {
    const viking =
      this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length - 1))];
    const sax =
      this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length - 1))];
    const damage = viking.receiveDamage(sax.strength);
    const deadVikings = [];

    for (let v in this.vikingArmy) {
      if (this.vikingArmy[v].health <= 0) {
        this.vikingArmy.splice(deadVikings[v], 1);
      }
    }

    return damage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
