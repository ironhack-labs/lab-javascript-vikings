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
    } else if (this.health <= 0) {
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
    } else if (this.health <= 0) {
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
    const randomSaxonIndice = Math.floor(Math.random() * this.saxonArmy.length);
    const soldierSaxon = this.saxonArmy[randomSaxonIndice];

    const randomVikingIndice = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const soldierViking = this.vikingArmy[randomVikingIndice];

    const msg = soldierSaxon.receiveDamage(soldierViking.attack());
    if (soldierSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndice, 1);
    }

    return msg;
  }
  saxonAttack() {
    const randomSaxonIndice = Math.floor(Math.random() * this.saxonArmy.length);
    const soldierSaxon = this.saxonArmy[randomSaxonIndice];

    const randomVikingIndice = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const soldierViking = this.vikingArmy[randomVikingIndice];

    const msg = soldierViking.receiveDamage(soldierSaxon.attack());
    if (soldierViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndice, 1);
    }

    return msg;
  }
  showStatus() {}
}
