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
    if(this.health > 0)
    return `${this.name} has received ${theDamage} points of damage`;
    else
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if(this.health > 0)
    return `A Saxon has received ${theDamage} points of damage`;
    else
    return `A Saxon has died in combat`;
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
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let ranSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let ranViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let attackResult = ranSaxon.receiveDamage(ranViking.strength);

    // if the saxon is dead remove it from the army
    if(ranSaxon.health <= 0)
    this.saxonArmy.splice(this.saxonArmy.indexOf(ranSaxon, 1));

    return attackResult;
  }
  saxonAttack() {
    let ranSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let ranViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let attackResult = ranViking.receiveDamage(ranSaxon.strength);

    // if the viking is dead remove it from the army
    if(ranViking.health <= 0)
    this.vikingArmy.splice(this.vikingArmy.indexOf(ranViking, 1));
    
    return attackResult;
  }
  /* generic attacking method */
  attacking() {
    let ranSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let ranViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

    if(aSoldier === Viking) {
      let attackResult = ranSaxon.receiveDamage(ranViking.strength);

      // if the saxon is dead remove it from the army
      if(ranSaxon.health <= 0)
      this.saxonArmy.splice(this.saxonArmy.indexOf(ranSaxon, 1));

      return attackResult;
    }
    else if(aSoldier === Saxon) {
      let attackResult = ranViking.receiveDamage(ranSaxon.strength);

      // if the viking is dead remove it from the army
      if(ranViking.health <= 0)
      this.vikingArmy.splice(this.vikingArmy.indexOf(ranViking, 1));
      
      return attackResult;
    }
  }

  showStatus() {
    if(this.saxonArmy.length === 0)
    return "Vikings have won the war of the century!";
    else if(this.vikingArmy.length === 0)
    return "Saxons have fought for their lives and survived another day...";
    else 
    return "Vikings and Saxons are still in the thick of battle.";
  }
}

/**********Test Code**********/
let warOf1600 = new War;

let viking0 = new Viking("Juan", 100, 85);
let viking1 = new Viking("Nick", 100, 65);
let viking2 = new Viking("Masaki", 100, 70);
let viking3 = new Viking("Grant", 100, 30);
let viking4 = new Viking("Pradeepa", 100, 99);
let viking5 = new Viking("Julian", 100, 55);

warOf1600.vikingArmy.push(viking0);
warOf1600.vikingArmy.push(viking1);
warOf1600.vikingArmy.push(viking2);
warOf1600.vikingArmy.push(viking3);
warOf1600.vikingArmy.push(viking4);

let saxon0 = new Saxon(100, 85);
let saxon1 = new Saxon(100, 65);
let saxon2 = new Saxon(100, 70);
let saxon3 = new Saxon(100, 30);
let saxon4 = new Saxon(100, 99);

warOf1600.saxonArmy.push(saxon0);
warOf1600.saxonArmy.push(saxon1);
warOf1600.saxonArmy.push(saxon2);
warOf1600.saxonArmy.push(saxon3);
warOf1600.saxonArmy.push(saxon4);

console.log(warOf1600.vikingArmy);
console.log(warOf1600.saxonArmy);


