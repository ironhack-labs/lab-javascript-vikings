// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return super.attack();
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
  }

  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {

  attack(){
    return super.attack();
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(){
  }
  addSaxon(){
  }
  vikingAttack(){

  }
  saxonAttack(){

  }
  showStatus(){

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
