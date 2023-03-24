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
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return (`${this.name} has received ${damage} points of damage`);
    } else {
      return (`${this.name} has died in act of combat`);
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
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return (`A Saxon has received ${damage} points of damage`);
    } else {
      return ("A Saxon has died in combat");
    }
  }
}
class War {
    constructor() {
        this.saxonArmy = []
        this.vikingArmy = []
    }
    addViking (Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy(1 + Math.floor(Math.random()))
        let randomViking = this.vikingArmy(1 + Math.floor(Math.random()))
        if (this.saxonArmy[randomSaxon].health <= 0) {
         this.saxonArmy.splice(randomSaxon,1) }
        
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy(this.saxonArmy * Math.floor(Math.random()))
        let randomViking = this.vikingArmy(this.vikingArmy * Math.floor(Math.random()))
    }
}
// // War
// class War { }
// //josh
