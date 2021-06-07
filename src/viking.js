// Soldier
class Soldier {
  constructor(health,strength){
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength  
  }

  receiveDamage(theDamage){
    this.health = this.health - theDamage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
  super (health,strength)
  this.name=name
  }

  receiveDamage(theDamage){
    this.health = this.health-theDamage

    if(this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`

    }
    else {
      return`${this.name} has died in act of combat`
    }

    

    
  }

  battleCry(){
    return `Odin Owns You All!`
  }



}

// Saxon
class Saxon extends Soldier{

  receiveDamage(theDamage){
    this.health = this.health-theDamage

    if(this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`

    }
    else {
      return "A Saxon has died in combat"
    }

    

    
  }
}

// War
class War {
  constructor(){
    this.vikingArmy=[]
    this.saxonArmy=[]
  }
  
  

addViking(viking){
  this.vikingArmy.push(viking)
  
}
addSaxon(saxon){
  this.saxonArmy.push(saxon)
}
vikingAttack(){
  let aRandomforviking = Math.floor(Math.random()*this.vikingArmy.length)
  let aRandomforSaxon = Math.floor(Math.random()*this.saxonArmy.length)

  let theSaxon = this.saxonArmy[aRandomforSaxon]
  let theViking = this.vikingArmy[aRandomforviking]

  let battle  = theSaxon.receiveDamage(theViking.strength)
  
  
  if (theSaxon.health <= 0){
    this.saxonArmy.splice(aRandomforSaxon, 1);}


return battle
}

saxonAttack(){
  let aRandomforviking = Math.floor(Math.random()*this.vikingArmy.length)
  let aRandomforSaxon = Math.floor(Math.random()*this.saxonArmy.length)

  let theSaxon = this.saxonArmy[aRandomforSaxon]
  let theViking = this.vikingArmy[aRandomforviking]

  let battle = theViking.receiveDamage(theSaxon.strength)
  
  
  if (theViking.health <= 0){
    this.vikingArmy.splice(aRandomforviking, 1);
  }

  return battle
}

}


showStatus(){
  return status;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
