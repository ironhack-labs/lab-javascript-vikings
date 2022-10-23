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
    const { sax, viking } = this.#castFighters();

    const damage = sax.receiveDamage(viking.strength);

    if (sax.health <= 0) {
      this.saxonArmy.splice(sax, 1);
    }

    return damage;
  }

  saxonAttack() {
    const { sax, viking } = this.#castFighters();

    const damage = viking.receiveDamage(sax.strength);

    if (viking.health <= 0) {
      this.vikingArmy.splice(viking, 1);
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

  #castFighters() {
    const sax = this.#randomize(this.saxonArmy);
    const viking = this.#randomize(this.vikingArmy);

    return {
      sax,
      viking,
    };
  }

  #randomize(army) {
    return army[Math.floor(Math.random() * army.length)];
  }
}
