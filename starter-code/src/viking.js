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
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
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

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
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
    let randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));
    let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));

    let attackVarViking = this.vikingArmy[randomViking].attack();

    let xVar = this.saxonArmy[randomSaxon].receiveDamage(attackVarViking);

    if (
      this.vikingArmy[randomViking].attack() >=
      this.saxonArmy[randomSaxon].health
    ) {
      this.saxonArmy.splice(randomSaxon, 1);
    }

    return xVar;
  }

  saxonAttack() {
    let randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));
    let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));

    let attackVarSaxon = this.saxonArmy[randomSaxon].attack();

    let yVar = this.vikingArmy[randomViking].receiveDamage(attackVarSaxon);

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }

    return yVar;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
