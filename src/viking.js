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
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
    super.attack()
  }
  

  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0){
      return (`${this.name} has received ${damage} points of damage`)
    } return (`${this.name} has died in act of combat`)
    }

    battleCry(){
      return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0){
      return (`A Saxon has received ${damage} points of damage`)
    } return ("A Saxon has died in combat")
    }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }


  addViking(Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let index = Math.floor((Math.random() * this.saxonArmy.length))
    // specific saxon
    let saxon = this.saxonArmy[index]
    //randomViking damage = strength of that viking
    let vikingStrength = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))].strength
    // saxon receives vikingDamage
    let message = saxon.receiveDamage(vikingStrength)

    if (saxon.health < 0){
      this.saxonArmy.splice(index, 1)
    }
    // return received Damage result
    return message

  }


  saxonAttack(){
    let index = Math.floor((Math.random() * this.vikingArmy.length))
    let viking = this.vikingArmy[index]
    let saxonStrength = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))].strength
    
    let message = viking.receiveDamage(saxonStrength)

    if (viking.health < 0){
      this.vikingArmy.splice(index, 1)
    } 
    return message
  }
  
  showStatus(){
    let index = Math.floor((Math.random() * this.attackedArmy.length))
    let atteckedSoldier = this.attackedArmy[index]
    //randomViking damage = strength of that viking
    let enemysStrength = this.enemyArmy[Math.floor((Math.random() * this.enemyArmy.length))].strength
    // saxon receives vikingDamage
    let message = attackedSoldier.receiveDamage(enemysStrength)

    if (attackedSoldier.health < 0){
      this.attackedArmy.splice(index, 1)
    }
    // return received Damage result
    return message
    // if saxons array is empty return 
    // if vikings array is empty return
  }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
