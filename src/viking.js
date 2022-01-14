// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength

  }
  attack() {
    let soldierStr
    soldierStr = this.strength
    return soldierStr
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage;
    if(damage < this.health){
      return `${this.name} has received ${damage} points of damage`
    } else if (damage > this.health){
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"

  }

  attack() {
    let vikingStr
    vikingStr = this.strength
    return vikingStr
  }

}

// Saxon
class Saxon extends Soldier { 
  constructor (health, strength) {
    super (health, strength) 
  }

  attack() {
    let saxonStr
    saxonStr = this.strength
    return saxonStr
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health<=0){
      return `A Saxon has died in combat`
    }
  }
    
}

// War
class War {
  constructor(){
    this.vikingArmy= []
    this.saxonArmy=[]

  }
  addViking(viking){
    this.vikingArmy.push(viking)

  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }


  vikingAttack(){}

  receiveDamage (){}

  saxonAttack(){}
  showStatus(){}


}

const war = new War();
const viking1 = new Viking('Judith', 10, 2)
war.addViking(viking1)

console.log(war)




  


 






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
