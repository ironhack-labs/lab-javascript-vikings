// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength;
  }
  receiveDamage (damage){
   this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(vikingName, vikingHealth, vikingStrength) {
    super(vikingHealth, vikingStrength);
    this.vikingName = vikingName;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.vikingName} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.vikingName} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
constructor(vikingArmy, saxonArmy){
  this.vikingArmy = vikingArmy
  this.saxonArmy = saxonArmy
}
addViking(Viking){
  this.vikingArmy += Viking;
}
addSaxon(Saxon){
this.saxonArmy += Saxon;
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
