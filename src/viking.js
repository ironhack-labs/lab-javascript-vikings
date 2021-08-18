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
    this.health -= theDamage;
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

    if (this.health > 0) {
      return this.name + ' has received ' + theDamage + ' points of damage';
    } else {
      return this.name + ' has died in act of combat';
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(theDamage) {

    super.receiveDamage(theDamage);

    if (this.health > 0) {
      return 'A Saxon has received ' + theDamage + ' points of damage';
    } else {
      return 'A Saxon has died in combat';
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
    const randomIndexV = Math.floor(Math.random() * this.vikingArmy.length);
    const randomIndexS = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[randomIndexV];
    const randomSaxon = this.saxonArmy[randomIndexS];
  
    const message = randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomIndexS, 1)
      }
      return message;
  }

  saxonAttack() {
    const randomIndexV = Math.floor(Math.random() * this.vikingArmy.length);
    const randomIndexS = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[randomIndexV];
    const randomSaxon = this.saxonArmy[randomIndexS];
    const message = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomIndexV, 1)
    }
    return message;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

const war = new War;
const viking = new Viking('Ragner', 50, 300);
const saxon = new Saxon(50, 200);

war.addViking(viking);
war.addSaxon(saxon);
war.saxonAttack();
console.log(war.vikingArmy);

