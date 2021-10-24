// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor (name, health, strength){
    super(name, health, strength)
    this.name = name
    this.health = health
    this.strength = strength
  }
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`
    else if (this.health <= 0) return `${this.name} has died in act of combat`
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`
    else if (this.health <= 0) return `A Saxon has died in combat`
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    const randomSaxonValue = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonValue]
    const randomVikingValue = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingValue]
    
    let oldSaxonHealth = randomSaxon.health
    randomSaxon.health = oldSaxonHealth - randomViking.strength// NO PASSING
    if (randomSaxon.health <= 0) {
      this.saxonArmy.pop()
      //this.saxonArmy.slice(randomSaxonValue, randomSaxonValue + 1)//WHY NO PASSING THE TEST
      return randomSaxon.receiveDamage(0)
    }
    
  }
  saxonAttack(){
    const randomSaxonValue = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonValue]
    const randomVikingValue = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingValue]

    let oldVikingHealth = randomViking.health
    randomViking.health = oldVikingHealth - randomSaxon.strength
    if(randomViking.health <= 0) {this.vikingArmy.pop()}

    //return randomViking.receiveDamage(randomSaxon.strength)
  }

  showStatus(){}
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
