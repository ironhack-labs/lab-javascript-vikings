class Soldier{
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  };
  receiveDamage (damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage (damage) {
    this.health = this.health - damage;
   
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  
  battleCry () { 
    return "Odin Owns You All!";
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) { 
    super(health, strength)
  }
  receiveDamage(damage) {
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
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(Viking) {    
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {    
    // express random indexes for Saxon and Viking arrays.
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);    
    // random saxon warrior.
    let randomSaxonWarrior = this.saxonArmy[randomIndexSaxon];
    // random viking warrior.
    let randomVikingWarrior = this.vikingArmy[randomIndexViking];
    // random saxon --> receiveDamage() equal to strength of Viking.
    let damageResult = randomSaxonWarrior.receiveDamage(randomVikingWarrior.strength);
    // express life as a difference saon health against viking strength.
    let saxonLife = randomSaxonWarrior.health - randomVikingWarrior.strength;
    // test life with condition // negative life = death. and
    // remove saxon from array. 
    if (saxonLife <= 0) {
      this.saxonArmy.splice(randomIndexSaxon,1);
    }
    return damageResult;
   }

  saxonAttack() {
    // express random indexes for Saxon and Viking arrays.
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);    
    // random saxon warrior.
    let randomSaxonWarrior = this.saxonArmy[randomIndexSaxon];
    // random viking warrior.
    let randomVikingWarrior = this.vikingArmy[randomIndexViking];
    // random saxon --> receiveDamage() equal to strength of Saxon.
    let damageResult = randomVikingWarrior.receiveDamage(randomSaxonWarrior.strength);
    // express life as a difference saon health against viking strength.
    let vikingLife = randomVikingWarrior.health - randomSaxonWarrior.strength;
    // test life with condition // negative life = death and 
    // remove viking from array.
    if (vikingLife <= 0) {
      this.vikingArmy.splice(randomIndexViking,1);
    }
    return damageResult;
  }

  // genericAttack(warriorType) {
  //   // express random indexes for Saxon and Viking arrays.
  //   let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  //   let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);    
  //   // random saxon warrior.
  //   let randomSaxonWarrior = this.saxonArmy[randomIndexSaxon];
  //   // random viking warrior.
  //   let randomVikingWarrior = this.vikingArmy[randomIndexViking];

  //   if (warriorType === "viking") {
  //     // random saxon --> receiveDamage() equal to strength of Saxon.
  //     let damageResult = randomVikingWarrior.receiveDamage(randomSaxonWarrior.strength);
  //     // express life as a difference saon health against viking strength.
  //     let vikingLife = randomVikingWarrior.health - randomSaxonWarrior.strength;
  //     // test life with condition // negative life = death and 
  //     // remove viking from array.
  //     if (vikingLife <= 0) {
  //       this.vikingArmy.splice(randomIndexViking,1);
  //     }
  //   } else if (warriorType === "saxon") {
  //     // random saxon --> receiveDamage() equal to strength of Saxon.
  //     let damageResult = randomVikingWarrior.receiveDamage(randomSaxonWarrior.strength);
  //     // express life as a difference saon health against viking strength.
  //     let vikingLife = randomVikingWarrior.health - randomSaxonWarrior.strength;
  //     // test life with condition // negative life = death and 
  //     // remove viking from array.
  //     if (vikingLife <= 0) {
  //       this.vikingArmy.splice(randomIndexViking,1);
  //     }
  //   } 
  //   return damageResult;
  // }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  } 

}

// create a war.
let war1 = new War();

// adding warriors to array's army.
const thor = new Viking("thor", 100, 10);
const loki = new Viking("loki", 100, 7);
const arthur = new Saxon(100, 10);
const galahad = new Saxon(100, 8);

war1.addViking(thor);
war1.addViking(loki);
war1.addSaxon(arthur);
war1.addSaxon(galahad);

// for (let i=0; i < 20; i++) {
//   war1.vikingAttack();
//   war1.saxonAttack();
// }

war1.vikingAttack();
war1.saxonAttack();

// war1.showStatus();

console.log(war1);


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
