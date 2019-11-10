
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
      super.receiveDamage(theDamage);
      if (this.health > 0)
        return `${this.name} has received ${theDamage} points of damage`;
      else return `${this.name} has died in act of combat`;
    }
    battleCry() {
      return `Odin Owns You All!`;
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
    receiveDamage(theDamage) {
      super.receiveDamage(theDamage);
      if (this.health > 0)
        return `A Saxon has received ${theDamage} points of damage`;
      else return `A Saxon has died in combat`;
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
      // get random saxon
      // ret random viking
      // call receivedamage with random saxon taking damage from random viking
      let randomNum1 = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSax = this.saxonArmy[randomNum1];
      let randomNum2 = Math.floor(Math.random() * this.vikingArmy.length);
      let randomVik = this.saxonArmy[randomNum2];
  
      randomSax.receiveDamage(randomVik.strength);
  
      // randomSax.health = randomSax.health - randomVik.strength;
    }
    saxonAttack() {}
    showStatus() {}
  }
  
  