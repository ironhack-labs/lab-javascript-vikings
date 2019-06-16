// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength; 
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } 
    return "A Saxon has died in combat";
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
    let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    let theFinalSaxon = saxon.receiveDamage(viking.attack());
    if (saxon.health < 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return theFinalSaxon;
  }

  saxonAttack() {
    let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    let theFinalViking = viking.receiveDamage(saxon.attack());
    if (viking.health < 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return theFinalViking;
  }

  showStatus() {
    if (this.saxonArmy.length !== 0 && this.vikingArmy !==0) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else {
    return "Saxons have fought for their lives and survive another day...";
    } 
  }
}



