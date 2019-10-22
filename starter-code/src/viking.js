// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(amount) {
    this.health -= amount;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
   this.name = name;
  }
  receiveDamage(amount) {
    this.health -= amount;
    if (this.health > 0) {
      return (`${this.name} has received ${amount} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry() {
    return (`Odin Owns You All!`)
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(amount) {
    this.health -= amount;
    if (this.health > 0) {
      return `A Saxon has received ${amount} points of damage`;
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
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const attackResult = randomSaxon.receiveDamage(randomViking.strength);
    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health <= 0) {
        this.saxonArmy.splice(i, 1);
      }
    }
    return attackResult;
  }
  saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const attackResult = randomViking.receiveDamage(randomSaxon.strength);
    for (let i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i].health <= 0) {
        this.vikingArmy.splice(i, 1);
      }
    }
    return attackResult;
  }
  showStatus(){
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } 
    else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
