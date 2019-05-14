// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack() {
      return this.strength;
    }
    receiveDamage(thedamage) {
      this.health -= thedamage;
    }
  }
  
  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    receiveDamage(thedamage) {
      //this.health -= thedamage;
      super.receiveDamage(thedamage);
      if (this.health < 1) {
        return `${this.name} has died in act of combat`;
      }
      return `${this.name} has received ${thedamage} points of damage`;
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
    receiveDamage(thedamage) {
      //this.health -= thedamage;
      super.receiveDamage(thedamage);
      if (this.health < 1) {
        return `A Saxon has died in combat`;
      }
      return `A Saxon has received ${thedamage} points of damage`;
    }
  }
// War
class War {}
