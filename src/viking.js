// Soldier
class Soldier {
    constructor (health, strength) {
      this.health = health;
      this.strength = strength;  
    }
  attack(){
      return this.strength; 
    }
  receiveDamage(damage) {
    this.health -= damage;
    }
  }
  const soldier = new Soldier (200, 60);
  console.log(`The initial health of soldier: ${soldier.health}`);
  console.log(`The initial strength of solider: ${soldier.strength}`);

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(name, health, strength)
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
attack () {
  return this.strength;
  }
receiveDamage(damage) {
  this.health -= damage;

  if (this.health > 0) {
  return `${this.name} has received ${damage} points of damage`;
  }

  else {
  return `${this.name} has died in act of combat`;
  }
  }
}

// Saxon
class Saxon {}

// War
class War {}
