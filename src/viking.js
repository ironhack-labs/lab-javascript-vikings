//Ways to debug in console:
// let testSoldier = new Soldier(10,20)
// let mario = new Viking('Mario',100,200)
// mario.attack

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
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  //constructor(name, strength){} //Not needed since will inherit
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
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
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    return randomSaxon.receiveDamage(randomViking.attack());
  }
  saxonAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    return randomViking.receiveDamage(randomSaxon.attack());
  }
  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.saxonArmy.length == 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length == 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
  }
}

let Bjorn = new Viking('Bjorn', 3000, 1500)
let Erik = new Viking('Erik', 2000, 900)
let Halfdan = new Viking('Halfdan', 1000, 800)
let Gorm = new Viking('Gorm', 900, 550)
let Hilderinc = new Saxon(1500, 650)
let Alfred = new Saxon(1200, 550)
let Hama = new Saxon(1100, 450)
let Ingeld = new Saxon(1000, 350)
let fight = new War()
console.log(Bjorn,Erik,Halfdan,Gorm,Hilderinc,Alfred,Hama,Ingeld)
fight.addViking(Bjorn)
fight.addViking(Erik)
fight.addViking(Halfdan)
fight.addViking(Gorm)
fight.addSaxon(Hilderinc)
fight.addSaxon(Alfred)
fight.addSaxon(Hama)
fight.addSaxon(Ingeld)
fight.saxonAttack()
fight.vikingAttack()
console.log(fight.showStatus())
console.log(Bjorn,Erik,Halfdan,Gorm,Hilderinc,Alfred,Hama,Ingeld)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
