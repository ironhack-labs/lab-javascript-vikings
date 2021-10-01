// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }

}

// Viking
class Viking extends Soldier {

constructor (name, health, strength) {
  super(health, strength);
  this.name=name;
}

receiveDamage(damage) {
  this.health -= damage
  if(this.health >0) {
    return `${this.name} has received ${damage} points of damage`
  }
  return `${this.name} has died in act of combat`
}

battleCry(){
  return (`Odin Owns You All!`)
}

}

// Saxon
class Saxon extends Soldier {

  attack() {
    return super.attack()
  }

  receiveDamage(damage) {
    this.health -= damage
    if(this.health >0) {
      return `A Saxon has received ${damage} points of damage`
    }
    return `A Saxon has died in combat`
  }
}

// War
class War {

constructor() {
  this.vikingArmy= []
  this.saxonArmy=[]
}

addViking(viking) {
this.vikingArmy.push(viking)
}

addSaxon(saxon) {
  this.saxonArmy.push(saxon)
}

vikingAttack() {

  let saxonIndex=Math.random()*(this.saxonArmy.length-1)
  let saxon=this.saxonArmy[saxonIndex]
  let vikingIndex=Math.random()*(this.vikingArmy.length-1)
  let viking=this.vikingArmy[vikingIndex]

  let damageViking=viking.strength
  let auxSaxon= saxon.receiveDamage(damageViking)

const saxonAlive = this.saxonArmy.filter( (saxon)=> saxon.health >0 )

this.saxonArmy=saxonAlive

return auxSaxon


}

saxonAttack() {

  let saxonIndex=Math.random()*(this.saxonArmy.length-1)
  let saxon=this.saxonArmy[saxonIndex]
  let vikingIndex=Math.random()*(this.vikingArmy.length-1)
  let viking=this.vikingArmy[vikingIndex]

  let damageSaxon=saxon.strength
  let auxViking= viking.receiveDamage(damageSaxon)

const vikingAlive = this.vikingArmy.filter( (viking)=> viking.health >0 )

this.vikingArmy=vikingAlive

return auxViking

}

showStatus() {

 if (!this.saxonArmy.length) {
   return "Vikings have won the war of the century!"
 }

 if(!this.vikingArmy.length) {
   return "Saxons have fought for their lives and survived another day..."
}

return "Vikings and Saxons are still in the thick of battle."

}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
