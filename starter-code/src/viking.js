// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => this.strength;
  receiveDamage = damage => {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage = damage => {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry = () => {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage = damage => {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = vikingObj => {
    this.vikingArmy.push(vikingObj);
  };
  addSaxon = saxonObj => {
    this.saxonArmy.push(saxonObj);
  };
  vikingAttack = () => {
    const selectedSaxon = randomIndex(this.saxonArmy.length);
    const selectedViking = randomIndex(this.vikingArmy.length);
    const result = this.saxonArmy[selectedSaxon].receiveDamage(this.vikingArmy[selectedViking].strength);
    if (this.saxonArmy[selectedSaxon].health <= 0) {
      this.saxonArmy.splice(selectedSaxon, 1);
    }
    return result;
  };
  saxonAttack = () => {
    const selectedSaxon = randomIndex(this.saxonArmy.length);
    const selectedViking = randomIndex(this.vikingArmy.length);
    const result = this.vikingArmy[selectedViking].receiveDamage(this.saxonArmy[selectedSaxon].strength);
    if (this.vikingArmy[selectedViking].health <= 0) {
      this.vikingArmy.splice(selectedViking, 1);
    }
    return result;
  };

  showStatus = () => {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}

const randomIndex = maxValue => Math.floor(Math.random() * maxValue);
