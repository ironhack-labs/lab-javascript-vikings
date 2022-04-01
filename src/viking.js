// Soldier
//ignore the attack method github after doing it once, for the viking you just extend it 
class Soldier {
constructor(health, strength) {
  this.health = health;
  this.strength = strength;
}

attack(){
  return this.strength;
}

receiveDamage(thedamage){
  this.health -= damage;
} 
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){ 
  super(health,strength)
  this.name = name;
}
  attack (){
    return this.strength;
  }


}

// Saxon
class Saxon extends Soldier {
constructor(){

super()

}
  attack(){
    return this.strength;
  }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
