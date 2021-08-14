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
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon  has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
    // console.log(this.vikingArmy);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
    // console.log(this.saxonArmy);
  }

  vikingAttack() {
    // evaluates to a number example : 8
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    // evaluates to a viking from the viking army array
    let randomViking = this.vikingArmy[randomVikingIndex];

    // evaluates to a number example : 8
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // evaluates to a saxon from the saxon army array
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    let fightMessage = randomSaxon.receiveDamage(randomViking.strength);
    // console.log(fightMessage);
    // console.log('Received damage', randomSaxon);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
      // console.log('Removing Saxon', this.saxonArmy);
    }

    return fightMessage;
  }

  saxonAttack() {
    // evaluates to a number example : 8
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // evaluates to a saxon from the saxon army array
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    // evaluates to a number example : 8
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    // evaluates to a viking from the viking army array
    let randomViking = this.vikingArmy[randomVikingIndex];

    let fightMessage = randomViking.receiveDamage(randomSaxon.strength);
    // console.log(fightMessage);
    // console.log('Received damage', randomViking);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
      // console.log('Removing Viking', this.vikingArmy);
    }

    return fightMessage;
  }

  showStatus() {
    if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";

    } else if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";

    }else{
      return "Vikings and Saxons are still in the thick of battle.";

    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

const viking1 = new Viking('Candela', 10, 2);
const viking2 = new Viking('Adrian', 10, 2);
const viking3 = new Viking('Alvin', 10, 2);
const viking4 = new Viking('Andriw', 10, 2);
// console.log(viking1);

const saxon1 = new Saxon(8, 1);
// console.log(saxon1);

const war = new War();
war.addSaxon(saxon1);
war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addViking(viking4);
war.saxonAttack();
war.saxonAttack();
war.saxonAttack();
war.saxonAttack();
war.vikingAttack();
