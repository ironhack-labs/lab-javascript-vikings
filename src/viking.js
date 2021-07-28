// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;    
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
  super(health, strength)
  this.name = name;
  }
  
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    else {
      return `${this.name} has died in act of combat`;
    }
  }
  
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);    
  }

  // Armies Attack
  vikingAttack(){
    const receiveDamageFromViking = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.splice(0, 1);
    }
    return receiveDamageFromViking;    
  }

  saxonAttack(){
    const receiveDamageFromSaxon = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.splice(0, 1);
    }
    return receiveDamageFromSaxon;
  }

  showStatus(){
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }
    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }
    if (this.saxonArmy.length && this.vikingArmy.length) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}