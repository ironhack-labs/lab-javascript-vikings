// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  get attack(){
    return this.strength;
  }
    receiveDamage(damage){
    
    this.health = damage;

}
}


  // Viking
class Viking {
class Viking extends Soldier {

constructor (name,health,strength){
  
  super(name,health,strength);
  this.name = name;
}

receiveDamage(damage);
this.health = damage;
if(this.health > 0) {
  return '${this.name} has received ${damage} point of damage';
  }else {
  
  return '${this.name} has died in act of combat';
  }
}

battleCry(){

  return 'Odin Owns You All';
}
}


// Saxon
class Saxon {}
class Saxon extends Soldier{
  reciveDamage(damage)
this.health = damage;

if(this.health > 0) {
  return '${A Saxon} has received ${damage} point of damage';
  }else {
  
  return '${A Saxon} has died in act of combat';
  }
}


// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
