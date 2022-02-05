// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health; 
    this.strength = strength; 
  }

  attack (){
    return this.strength
  }

  receiveDamage(theDamage){
    this.health -= theDamage; 
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strenght);
    this.name = name; 
  }

  receiveDamage(theDamageAmount){
    super.receiveDamage(theDamageAmount);
    if (this.health > 0) {
      return `${this.name} has received ${theDamageAmount} points of damage.`
    } else {
      `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {

receiveDamage(AmountofDamage){
  super.receiveDamage(theDamageAmount);
  if (this.health > 0){
    return `A Saxon has received ${AmountofDamage} points of damage`;
  } else {
    return `A Saxn has died in combat`;
  }
}


}

// War
class War {
  constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
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
