// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health,
    this.strength = strength
  }
  atack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}
// Viking
class Viking extends Soldier{
  constructor(health, strength, name){
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health >= 1){
      return `${this.name} has received ${damage} points of damage`
    }else {
      return `${this.name} has died in act of combat`
    }
  }
  battelCry(){
    return 'Odin Owns You All!'
  }
}
const viking1 = new Viking(130, 30, 'ragnar')
console.log(viking1)
// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
