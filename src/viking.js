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
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
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
    const indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const saxonRandom = this.saxonArmy[indexRandomSaxon];
    const vikingRandom =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const resultDamage = saxonRandom.receiveDamage(vikingRandom.strength);
    if (saxonRandom.health <= 0) {
      this.saxonArmy.splice(indexRandomSaxon, 1);
    }
    return resultDamage;
  }
  saxonAttack() {
    const indexRandomViking = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const vikingRandom = this.vikingArmy[indexRandomViking];
    const saxonRandom =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const resultDamage = vikingRandom.receiveDamage(saxonRandom.strength);
    if (vikingRandom.health <= 0) {
      this.vikingArmy.splice(indexRandomViking, 1);
    }
    return resultDamage;
  }
  showStatus() {
    if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";

  }else if(this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survived another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  } 

  }
}
