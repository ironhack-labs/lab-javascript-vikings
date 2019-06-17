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
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
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
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
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
    let chosenSaxon = this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))];
    let chosenViking = this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))];
    let result = chosenSaxon.receiveDamage(chosenViking.attack()); 
    if (result.includes('died')) {
      this.saxonArmy.splice(chosenSaxon, 1);
    }
    return result;
  }
  saxonAttack() {
    let chosenSaxon = this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))];
    let chosenViking = this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))];
    let result = chosenViking.receiveDamage(chosenSaxon.attack());
    if (result.includes('died')) {
      this.vikingArmy.splice(chosenViking, 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
let war = new War();
// war.addViking({name:'asdf', health:'20', strength:'150'});
// war.addSaxon({health:'60', strength:'10'});
// war.saxonAttack();
