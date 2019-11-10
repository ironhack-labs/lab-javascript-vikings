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
    this.health = this.health - theDamage;
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
    if (this.health > 0)
      return `${this.name} has received ${theDamage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health > 0)
      return `A Saxon has received ${theDamage} points of damage`;
    else return `A Saxon has died in combat`;
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
    // get random saxon
    // ret random viking
    // call receivedamage with random saxon taking damage from random viking

    //1.
    let randomS = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSax = this.saxonArmy[randomS];
    let randomV = Math.floor(Math.random() * this.vikingArmy.length);
    let randomVik = this.vikingArmy[randomV];

    let saxonSoldier = randomSax.receiveDamage(randomVik.strength);
    if (randomSax.health <= 0) this.saxonArmy.splice(randomS, 1);
    return saxonSoldier;
  }
  saxonAttack() {
    let randomS = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSax = this.saxonArmy[randomS];
    let randomV = Math.floor(Math.random() * this.vikingArmy.length);
    let randomVik = this.vikingArmy[randomV];

    let vikingSoldier = randomVik.receiveDamage(randomSax.strength);
    if (randomVik.health <= 0) this.vikingArmy.splice(randomV, 1);
    return vikingSoldier;
  }
  showStatus() {
    if (this.vikingArmy <= 0)
      return 'Saxons have fought for their lives and survived another day...';
    else if (this.saxonArmy <= 0)
      return 'Vikings have won the war of the century!';
    else return 'Vikings and Saxons are still in the thick of battle.';

    // // My solution is below --->>>
    // if (this.saxonArmy.length === 0)
    //   return `Vikings have won the war of the century!`;
    // else if (this.vikingArmy.length === 0)
    //   return `Saxons have fought for their lives and survived another day...`;
    // else return `Vikings and Saxons are still in the thick of battle.`;
  }
}

// const newWar = new War();
// newWar.vikingAttack();
// console.log('Output for: newWar.vikingAttack()', newWar.vikingAttack());
// const saxon1 = new Saxon(100, 100);
// const saxon2 = new Saxon(200, 200);
// const saxon3 = new Saxon(300, 300);
// newWar.addSaxon(saxon1, saxon2, saxon3);
// const viking1 = new Viking('Ash', 100, 100);
// const viking2 = new Viking('Kev', 200, 200);
// const viking3 = new Viking('Sam', 300, 300);
// newWar.addViking(viking1, viking2, viking3);
