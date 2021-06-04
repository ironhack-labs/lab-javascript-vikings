// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }//hould return the strength property of the Soldier
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage;

  }
}
// Viking   constructor(nameValue, lastNameValue, ageValue, nickValue, livesValue, tokensValue) {
// super() connects to it's parent class constructor() mehtod
//super(nameValue, lastNameValue, ageValue)
//this.nick = nickValue
//this.lives = livesValue
//this.tokens = tokensValue


class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage;
      if(this.health === 0){
        return `${this.name} has died in act of combat`
      }
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage` 
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}





// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength)
 
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health === 0) {
      return `A Saxon has died in combat`
    }
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
  }
 }

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
