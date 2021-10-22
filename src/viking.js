// Soldier
class Soldier {
constructor(health, strength){
  this.health = health
  this.strength = strength
}

attack(){
return this.strength

}

receiveDamage(thedamage){
  this.health = this.health - thedamage




}


}

  
// Viking
class Viking extends Soldier{
  constructor (name,health,strength){
super(name,health,strength)  
this.name=name 
this.health=health
this.strength=strength

}

attack(){
  return this.strength


}

receiveDamage(thedamage){
  this.health = this.health - thedamage

  
}


battleCry (){
return "Odin Owns You All!"

}


}

// Saxon
class Saxon extends Soldier{
  
  }
  
  
  
  





// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
