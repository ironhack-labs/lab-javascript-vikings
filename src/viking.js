// Soldier
//---ITERATION 01----
class Soldier {
  constructor(strength, health) {
    this.strength = 150;
    this.health = 300;
  }
  attack() { return this.strength }
  receiveDamage(damage) { this.health - damage }
}

let Soldier1 = new Soldier

console.log(Soldier1)
console.log(Soldier1.attack())
/* console.log(Soldier1.receiveDamage(100)) */

// Viking
//---ITERATION 02----
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    if((this.health - damage)>0) {
      return `${this.name} has received ${damage} points of damage. Ele é forte, não morre não!`}
      return `${this.name} has died in act of combat.`
  }
  battleCry() { return `Odin Owns You All!`}
}

let Viking1 = new Viking(`Ragnarok`)

console.log(Viking1)
console.log(Viking1.attack())
console.log(Viking1.receiveDamage(100))
console.log(Viking1.battleCry())

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super (health, strength)
  }
  receiveDamage(damage) {
    if((this.health - damage)>0) {
      return `A Saxon has received ${damage} points of damage.`}
      return `A Saxon has died in combat.`
 }
}

let Saxon1 = new Saxon

console.log(Saxon1)
console.log(Saxon1.receiveDamage(400))

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
