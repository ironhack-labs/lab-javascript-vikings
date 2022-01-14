// Soldier
class Soldier {
  constructor(health, strength) { //
    this.health = health; //
    this.strength = strength //
  }
  
  //methods
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health-damage
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength){ 
  super(health, strength);
  this.name = name;
  }
  receiveDamage(damage) { //takes health and subtracts damage
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}


// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}


// War
class War {
  constructor(){
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
  let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let statement = this.saxonArmy[randomSaxon].receiveDamage(
    this.vikingArmy[randomViking].attack()
  );
  if (this.saxonArmy[randomSaxon].health <= 0) {
    this.saxonArmy.splice(randomSaxon);
  }
  return statement;
}
saxonAttack() {
  let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let statement = this.vikingArmy[randomViking].receiveDamage(
    this.saxonArmy[randomSaxon].attack()
  );
  if (this.vikingArmy[randomViking].health <= 0) {
    this.vikingArmy.splice(randomViking);
  }
  return statement;
}

genericAttack(whoAttacks) {
  // whoAttacks is string with "vikingArmy" or "saxonArmy"
  let whoReceives = whoAttacks === 'vikingArmy' ? 'saxonArmy' : 'vikingArmy';

  let randomAttacker = Math.floor(Math.random() * this[whoAttacks].length);
  let randomRecipient = Math.floor(Math.random() * this[whoReceives].length);

  let attacker = this[whoAttacks][randomAttacker];
  let recipient = this[whoReceives][randomRecipient];
  let armyToCheck = this[whoReceives];
  let indexToCheck = randomRecipient;

  let statement = recipient.receiveDamage(attacker.attack());
  if (recipient.health <= 0) {
    armyToCheck.splice(indexToCheck);
  }
  return statement;
}

showStatus() {
  if (!this.saxonArmy.length && this.vikingArmy.length) {
    return 'Vikings have won the war of the century!';
  } else if (this.saxonArmy.length && !this.vikingArmy.length) {
    return 'Saxons have fought for their lives and survived another day...';
  } else if (this.saxonArmy.length && this.vikingArmy.length) {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}













// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
