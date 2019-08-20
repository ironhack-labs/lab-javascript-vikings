// Soldier
class Soldier {
  constructor(healthArg, strengtArg) {
    this.health = healthArg;
    this.strength = strengtArg;
  }

  attack() {
    return (this.strength = this.strength);
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
    return (this.strength = this.strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    console.log(this.health);
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
  constructor(health, strength) {
    super(health, strength);
  }

  attack() {
    return this.strength;
  }

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
    const randVik = Math.floor(Math.random() * this.vikingArmy.length);

    const randSax = Math.floor(Math.random() * this.saxonArmy.length);

    const vikingAttacker = this.vikingArmy[randVik];

    const saxonDefender = this.saxonArmy[randSax];

    let message = saxonDefender.receiveDamage(vikingAttacker.strength);

    if (saxonDefender.health <= 0) {
      this.saxonArmy.splice(randSax, 1);
      return message;
    } else {
      return message;
    }
  }
  saxonAttack() {
    const randVik = Math.floor(Math.random() * this.vikingArmy.length);

    const randSax = Math.floor(Math.random() * this.saxonArmy.length);

    const vikingDefender = this.vikingArmy[randVik];

    const saxonAttacker = this.saxonArmy[randSax];

    let message = vikingDefender.receiveDamage(saxonAttacker.strength);

    if (vikingDefender.health <= 0) {
      this.vikingArmy.splice(randSax, 1);
      return message;
    } else {
      return message;
    }
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }
    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survive another day...";
    }
    if (this.vikingArmy !== [] && this.saxonArmy !== []) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
