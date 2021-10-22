// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
  }
}
// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
  super(name, health, strength)
  this.name = name
  this.health = health
  this.strength = strength
  }
  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health <=0) { return `${this.name} has died in act of combat`}
    else { return `${this.name} has received ${damage} points of damage`}
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage){
    this.health = this.health - damage
    
    if(this.health <= 0) { return `A Saxon has died in combat`}
    else { return `A Saxon has received ${damage} points of damage`}
  }
}
// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(newViking){ 
    this.vikingArmy.push(newViking) 
  }
  addSaxon(newSaxon){ 
    this.saxonArmy.push(newSaxon) 
  }
  vikingAttack(){
    let randomViking = this.getRandom(this.vikingArmy)
    let randomSaxon = this.getRandom(this.saxonArmy)
    return this.atackTheEnemy(randomViking, randomSaxon, this.saxonArmy)
  }
  saxonAttack(){
    let randomViking = this.getRandom(this.vikingArmy)
    let randomSaxon = this.getRandom(this.saxonArmy)
    return this.atackTheEnemy(randomSaxon, randomViking, this.vikingArmy)
  }
  getRandom(army){
    return army[Math.floor(Math.random((army.length-1)+1))]
  }
  atackTheEnemy (atack, defend, army){  
    let resultOfAtack = defend.receiveDamage(atack.strength, defend)
    if(defend.health <= 0){army.splice(defend, 1)}
    return resultOfAtack
  }
  showStatus(){
    if(!this.saxonArmy.length){ return "Vikings have won the war of the century!"}
    else if(!this.vikingArmy.length){ return "Saxons have fought for their lives and survived another day..."}
    else{return "Vikings and Saxons are still in the thick of battle."}
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

let war = new War()
let david = new Viking("David", 1000, 1000)
let fucker = new Saxon(500, 25)
war.addViking(david)
war.addSaxon(fucker)
war.vikingAttack()

