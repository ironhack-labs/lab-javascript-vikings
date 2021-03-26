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
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health !== 0) {
      return `${this.name} has received ${theDamage} points of damage`;
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
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health !== 0) {
      return `A Saxon has received ${theDamage} points of damage`;
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
    let randSax = Math.floor(Math.random() * this.saxonArmy.length);
    let saxSold = this.saxonArmy[randSax];
    let randVik = Math.floor(Math.random() * this.vikingArmy.length);
    let vikSold = this.vikingArmy[randVik];
    let damage = saxSold.receiveDamage(vikSold.strength);
    if (saxSold.health <= 0) {
      this.saxonArmy.splice(randSax);
    }
    return damage;
  }
  saxonAttack() {
    let randSax = Math.floor(Math.random() * this.saxonArmy.length);
    let saxSold = this.saxonArmy[randSax];
    let randVik = Math.floor(Math.random() * this.vikingArmy.length);
    let vikSold = this.vikingArmy[randVik];
    let damage = vikSold.receiveDamage(saxSold.strength);
    if (vikSold.health <= 0) {
      this.vikingArmy.splice(randVik);
    }
    return damage;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
