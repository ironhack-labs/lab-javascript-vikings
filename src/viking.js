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
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}
const matt = new Viking("Matt", 100, 40);
const dave = new Viking("Matt", 150, 32);
const scott = new Viking("Matt", 140, 16);
const nathan = new Viking("Matt", 130, 29);

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

const saxon1 = new Saxon (70, 20);
const saxon2 = new Saxon (71, 26);
const saxon3 = new Saxon (73, 25);
const saxon4 = new Saxon (75, 22);

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
  
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[saxonIndex];//choose random saxon

    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[vikingIndex];//choose random viking


    randomSaxon.receiveDamage = randomViking.strength;

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon);//if saxon health below zero, take that saxon outof the Array.pop?
    }
    return randomSaxon.damageReceived(randomViking.strength);//return a result of receive damage () of a saxon with strength of this.vikingArmy

  }
}

War.addViking(matt);
War.addViking(dave);
War.addViking(scott);
War.addViking(nathan);
War.addSaxon(saxon1);
War.addSaxon(saxon2);
War.addSaxon(saxon3);
War.addSaxon(saxon4);
