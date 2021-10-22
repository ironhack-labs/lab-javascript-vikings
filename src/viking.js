// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    console.log(this.strength);
    return this.strength;
  }

  receiveDamage (damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier{
  constructor ( name, health, strength){
    super (health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      console.log(this.name, "has received", damage, "points of damage");
      return `${this.name} has received ${damage} points of damage`;
    } else {
      console.log(this.name, "has died in act of combat");
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry () {
    console.log("Odin Owns You All!");
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      console.log("A Saxon has received", damage, "points of damage");
      return `A Saxon has received ${damage} points of damage`;
    } else {
      console.log("A Saxon has died in combat");
      return `A Saxon has died in combat`;
    }
  }

}

// War
class War {

  addViking() {

  }

  addSaxon() {

  }

  vikingAttack() {

  }

  saxonAttack () {

  }

  showStatus () {
    
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
