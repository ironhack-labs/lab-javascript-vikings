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
    this.health = this.health - damage;
  }
}



// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  battleCry() {
    return "Odin Owns You All!"
  }


  receiveDamage(damage) {
    let newHealth = this.health - damage;
    this.health = newHealth;
    if (newHealth > 0) { return `${this.name} has received ${damage} points of damage` }
    else { return `${this.name} has died in act of combat` }
  }
}
// Saxon
class Saxon extends Soldier {
  //
  receiveDamage(damage) {
    let newHealth = this.health - damage;
    this.health = newHealth;
    if (newHealth > 0) { return `A Saxon has received ${damage} points of damage` }
    else { return `A Saxon has died in combat` }
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

    return this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)].Viking.strength);


  }






}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
