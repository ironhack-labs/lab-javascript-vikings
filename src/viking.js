// Soldier
class Soldier {
  constructor(health, strength){
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
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage){
    this.health -= damage
    
    if(this.health <= 0){
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
    
  }
  battleCry(){
  return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health <= 0){
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
    }
}

// War
class War {
  constructor([], []){
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

    let saxonNum = this.saxonArmy.length
    let randomNum = Math.random() * saxonNum
    let floorNum = Math.floor(randomNum)
    let randomSaxon = this.saxonArmy[floorNum]
  
    let vikingNum = this.vikingArmy.length
    let randomNum2 = Math.random() * vikingNum
    let floorNum2 = Math.floor(randomNum2)
    let randomViking = this.vikingArmy[floorNum2]

    return randomSaxon.receiveDamage(randomViking.strength)
  

  }

  saxonAttack(){

    let vikingNum = this.vikingArmy.length
    let randomNum2 = Math.random() * vikingNum
    let floorNum2 = Math.floor(randomNum2)
    let randomViking = this.vikingArmy[floorNum2]

    let saxonNum = this.saxonArmy.length
    let randomNum = Math.random() * saxonNum
    let floorNum = Math.floor(randomNum)
    let randomSaxon = this.saxonArmy[floorNum]

    return randomViking.receiveDamage(randomSaxon.strength)
  
  }
  showStatus(){

    if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!"  
    } else if( this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
  removeSoldier(arrArmy, soldier){
    let index = arrArmy.indexOf(soldier)
    let newArmy = arrArmy.splice(index, 1)
    arrArmy = newArmy
    return arrArmy
  }

}


let saxon = new Saxon(100, 20)
let viking = new Viking("Pepe" ,110, 30)

// Test viking
// console.log(viking)
// console.log(viking.name)
// console.log("Viking strength", viking.attack())
// console.log("Viking has", viking.health)
// console.log(viking.name)
// console.log(viking.battleCry())
//viking.receiveDamage(40)
// console.log(viking.health)

// Test saxon
// console.log(saxon)
// console.log("Saxon strength", saxon.attack())
// console.log("Viking has", saxon.health)
//saxon.receiveDamage(40)
// console.log(saxon.health)

// Test war
let war = new War([], [])
console.log(war)
war.addSaxon(saxon)
war.addViking(viking)

war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
console.log(war)

war.saxonAttack()
war.saxonAttack()

console.log(war.showStatus())

//if(randomSaxon.health <= 0){
    // Seguir después aquí
//  }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
