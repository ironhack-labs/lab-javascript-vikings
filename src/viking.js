// Soldier
class Soldier {
  constructor(health, strength) {
  this.health = health;
  this.strength = strength;
  }

  attack() {
    return this.strength

  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, length)
    this.name = name;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } 
    
    if(this.health <= 0) { 
      return `${this.name} has died in act of combat`;
    };
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}


// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } 
    if (this.health <= 0) {
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

  addViking(armyViking) {
    this.vikingArmy.push(armyViking);
  }

  addSaxon(armySaxon) {
    this.saxonArmy.push(armySaxon);
  }

  receiveDamage(damage) {
  }

  vikingAttack() {
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const damage = randomViking.strength;
    const result = randomSaxon.receiveDamage(damage);

    if (randomSaxon.health <= 0) {
      const index = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(index, 1);
    }

    return result;
  }

  saxonAttack() {
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const damage = randomSaxon.strength;
    const result = randomViking.receiveDamage(damage);

    if (randomViking.health <= 0) {
      const index = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy.splice(index, 1);
    }

    return result;
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
