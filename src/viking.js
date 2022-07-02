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
  constructor(vikingArmy, saxonArmy){
  this.vikingArmy = vikingArmy
  this.saxonArmy = saxonArmy
  }
  addViking(viking){
  this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){

    if(this.saxonArmy.length === 0){
      return "No hay saxones"
    }

    let saxonNum = this.saxonArmy.length
    let randomNum = Math.random() * saxonNum
    let floorNum = Math.floor(randomNum)
    let randomSaxon = this.saxonArmy[floorNum]
  
    let vikingNum = this.vikingArmy.length
    let randomNum2 = Math.random() * vikingNum
    let floorNum2 = Math.floor(randomNum2)
    let randomViking = this.vikingArmy[floorNum2]

    if(randomSaxon.health <= 0){
    let index = this.saxonArmy.indexOf(randomSaxon)
    this.saxonArmy.splice(index, 1)
    }
    return randomSaxon.receiveDamage(randomViking.strength)
  
  }

  saxonAttack(){

    if(this.vikingArmy.length === 0){
      return "No hay vikingos"
    }

    let vikingNum = this.vikingArmy.length
    let randomNum2 = Math.random() * vikingNum
    let floorNum2 = Math.floor(randomNum2)
    let randomViking = this.vikingArmy[floorNum2]

    let saxonNum = this.saxonArmy.length
    let randomNum = Math.random() * saxonNum
    let floorNum = Math.floor(randomNum)
    let randomSaxon = this.saxonArmy[floorNum]

    if(randomViking.health <= 0){
      let index = this.vikingArmy.indexOf(randomViking)
      this.vikingArmy.splice(index, 1)

      return `${randomViking.name} ha muerto`
    }

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

}


let saxon = new Saxon(100, 60)
let saxon2 = new Saxon(70, 60)
let saxon3 = new Saxon(130, 60)

let viking = new Viking("Pepe" ,110, 60)
let viking2 = new Viking("Mike" ,70, 60)
let viking3 = new Viking("Caca" ,60, 60)

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
war.addSaxon(saxon2)
war.addSaxon(saxon3)

war.addViking(viking)
war.addViking(viking2)
war.addViking(viking3)

war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
war.vikingAttack()
console.log(war.saxonArmy)

war.saxonAttack()
war.saxonAttack()
war.saxonAttack()
war.saxonAttack()
war.saxonAttack()
war.saxonAttack()
war.saxonAttack()
war.saxonAttack()
war.saxonAttack()
war.saxonAttack()
console.log(war.saxonAttack())
console.log(war.vikingArmy)


//if(randomSaxon.health <= 0){
    // Seguir después aquí
//  }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
