// Soldier
class Soldier {
  // constructor method
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  // attack method
  attack() {
    return this.strength;
  }
  // receive damage method
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  // constructor
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  // receive damage method to override parent method
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    else {
      return `${this.name} has received ${damage} points of damage`
    }
  }
  // battlecry method
  battleCry() {
    return "Odin Owns You All!";
  }
}


// Saxon
class Saxon extends Soldier {
  // constructor method
  constructor(health, strength) {
    super(health, strength);
  }
  // receive damage method to override parent method
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health <= 0) {
      return `A Saxon has died in combat`;
    }
    else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  // constructor method
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  // add viking method
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  // add saxon method
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  // add viking attack
  vikingAttack() {
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var battleResult = randomSaxon.receiveDamage(randomViking.strength);
    if (battleResult === `A Saxon has died in combat`) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return battleResult;
  }
  // add saxon attacj
  saxonAttack() {
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var battleResult = randomViking.receiveDamage(randomSaxon.strength);
    if (battleResult === `${randomViking.name} has died in act of combat`) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return battleResult;

  }
  // add show status
  showStatus() {
    if (this.saxonArmy.length === 0) {return "Vikings have won the war of the century!"};
    if (this.vikingArmy.length === 0) {return "Saxons have fought for their lives and survive another day..."};
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
