// inheritance
// capsulation
// polymorphism
// 

// Soldier
class Soldier { // this is the "wildcard" function that creates soldiers for both armies
    constructor(health, strength) { // two parameters being passed inside the constructor to create the soldiers
      this.health = health;  
      this.strength = strength;
    }
    attack() { // function to push the strength of the charactor into the attack
      return this.strength; // returns the strength
    }
    receiveDamage(theDamage) { // to receive damage => health equals current health minus damage inflicted by attacker
      this.health = this.health - theDamage;
    }
  }
  
  // Viking
  class Viking extends Soldier { // class to replicate the soldier
    constructor(name, health, strength) {
      super(health, strength); // extends properties of the Soldier class
      this.name = name; // adds a new property into Viking class
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
    receiveDamage(theDamage) {
      super.receiveDamage(theDamage);
      if (this.health > 0)
        return `A Saxon has received ${theDamage} points of damage`;
      else return `A Saxon has died in combat`;
    }
  }
  
  // BONUS - War
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
    // get random saxon
    // get random viking
    // call receiveDamage() with random saxon taking damage from random viking
    //1.
    let randomS = Math.floor(Math.random() * this.saxonArmy.length); // generates a random saxon index
    let randomSax = this.saxonArmy[randomS]; // stores the the saxon that's fighting
    let randomV = Math.floor(Math.random() * this.vikingArmy.length);
    let randomVik = this.vikingArmy[randomV];
    let saxonSoldier = randomSax.receiveDamage(randomVik.attack()); // saxon receives damages that equals viking's strenght
    if (randomSax.health <= 0) {
      this.saxonArmy.splice(randomS, 1);
    }
    return saxonSoldier;
  };
  // opposite of above class
  saxonAttack() {
    let randomS = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSax = this.saxonArmy[randomS];
    let randomV = Math.floor(Math.random() * this.vikingArmy.length);
    let randomVik = this.vikingArmy[randomV];
    let vikingSoldier = randomVik.receiveDamage(randomSax.attack());
    if (randomVik.health <= 0) {
      this.vikingArmy.splice(randomV, 1);
    }
    return vikingSoldier;
  };
  // SUPER BONUS - Show results
  showStatus() {
    // if (this.vikingArmy <= 0)
    //   return "Saxons have fought for their lives and survived another day...";
    // else if (this.saxonArmy <= 0)
    //   return "Vikings have won the war of the century!";
    // else 
    //   return "Vikings and Saxons are still in the thick of battle.";
    // My solution is below --->>>
    if (this.saxonArmy.length === 0)
      return 'Vikings have won the war of the century!';
    else if (this.vikingArmy.length === 0)
      return 'Saxons have fought for their lives and survived another day...';
    else return 'Vikings and Saxons are still in the thick of battle.';
  }
};