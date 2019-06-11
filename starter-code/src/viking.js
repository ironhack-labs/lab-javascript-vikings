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
    console.log(super.attack());
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

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  attack() {
    return super.attack();
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let vikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
    let viking = this.vikingArmy[vikingIndex];
    let saxon =  this.saxonArmy[saxonIndex];
    let result = saxon.receiveDamage(viking.strength);
    if (result == "A Saxon has died in combat") {
      this.saxonArmy.splice(saxonIndex, 1);
    };
    console.log(this.saxonArmy);
    return result;
  }

  saxonAttack() {
    let vikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
    let viking = this.vikingArmy[vikingIndex];
    let saxon =  this.saxonArmy[saxonIndex];
    let result = viking.receiveDamage(saxon.strength)
    if (result.match(/has died in act of combat$/)) {
      this.vikingArmy.splice(vikingIndex, 1);
    };
    console.log(this.saxonArmy);
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    } 
  }
}
