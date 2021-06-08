// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`
    return `${this.name} has died in act of combat`
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage (damage) {
    this.health -= damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vik) {
    this.vikingArmy.push(vik);
  }

  addSaxon(sax) {
    this.saxonArmy.push(sax);
  }

  attack (attacker) {
    if (this.showStatus() === 'Vikings and Saxons are still in the thick of battle.') {
      let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
      let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
      let message = '';

      if (attacker === 'Viking') {
        message = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        if (this.saxonArmy[randomSaxon].health <= 0) this.saxonArmy.splice(randomSaxon,1);
      }
      else {
        message = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        if (this.vikingArmy[randomViking].health <= 0) this.vikingArmy.splice(randomViking,1);
      }
      return message;
    }
    return this.showStatus();
  }

  vikingAttack() {
    return this.attack('Viking');
  }
  
  saxonAttack() {
    return this.attack('Saxon');
  }

  showStatus() {
    if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle."
  }
}

let viking1 = new Viking('Ragnar Lothbrok', 100, 80);
let viking2 = new Viking('Bjorn Ironside', 100, 70);
let viking3 = new Viking('Erik the Red', 100, 75);
let viking4 = new Viking('Leif Erikson', 100, 85);
let viking5 = new Viking('Ivar the Boneless', 100, 90);
let viking6 = new Viking('Rollo Sigurdsson', 100, 95);

let saxon1 = new Saxon(100, 60);
let saxon2 = new Saxon(100, 65);
let saxon3 = new Saxon(100, 70);
let saxon4 = new Saxon(100, 75);
let saxon5 = new Saxon(100, 55);
let saxon6 = new Saxon(100, 50);

let war1 = new War();
war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);
war1.addViking(viking4);
war1.addViking(viking5);
war1.addViking(viking6);

war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);
war1.addSaxon(saxon4);
war1.addSaxon(saxon5);
war1.addSaxon(saxon6);

console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());

console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());
console.log(war1.saxonAttack());



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
