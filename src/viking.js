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
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(viking) {
    this.vikingArmy.push(viking);
  };

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  };

  vikingAttack() {
    const randomNbSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomNbSaxon];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    if (randomSaxon.health < 1) {
      this.saxonArmy = this.saxonArmy.splice(randomNbSaxon, 1);
    }
    return randomSaxon.receiveDamage(randomViking.strength);
};

  saxonAttack() {
    const randomNbViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomNbViking];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    if (randomViking.health < 1) {
      this.vikingArmy = this.vikingArmy.splice(randomNbViking, 1);
    }
    return randomViking.receiveDamage(randomSaxon.strength);
  };}

 
