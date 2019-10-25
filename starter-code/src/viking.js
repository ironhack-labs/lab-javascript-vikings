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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }

  receiveDamage(damage){
    this.health = this.health - damage;
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
    // call viking from array
    const damage = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())].strength;
    const ranSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    // Fist attempt -- sloppy!
    // if (ranSaxon.health - damage <= 0) {
    //   this.saxonArmy.splice([ranSaxon], 1);
    // }
    const attack = ranSaxon.receiveDamage(damage);
    if (ranSaxon.health - damage <= 0) {
      this.saxonArmy.splice([ranSaxon], 1);
    }
    return attack;
  }

  saxonAttack() {
    const damage = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())].strength;
    const ranViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    const attack = ranViking.receiveDamage(damage);
    if (ranViking.health <= 0) {
      this.vikingArmy.splice([ranViking], 1);
    }
    return attack;
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
