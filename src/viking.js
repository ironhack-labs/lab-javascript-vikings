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
    if (damage.length === 0) {damage = 0}
    let newHealth = this.health-damage
    if (newHealth <= 0) {return 0}
    this.health = newHealth

  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super (health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    if (damage.length === 0) damage = 0
    let newHealth = this.health-damage
    this.health = newHealth
    if (this.health > 0){return `${this.name} has received ${damage} points of damage`} else {return `${this.name} has died in act of combat`}
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){
    super (health, strength)
  }
  receiveDamage(damage){
    if (damage.length === 0) damage = 0
    let newHealth = this.health-damage
    this.health = newHealth
    if (this.health > 0){return `A Saxon has received ${damage} points of damage`} else {return `A Saxon has died in combat`}

  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
    let vicking = this.vikingArmy
  }
  addViking(Vicking){
    this.vikingArmy.push(Vicking)
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }
  vikingAttack(){
    let vikingArr = this.vikingArmy
    let saxonArr =  this.saxonArmy
    
    let vIndex = Math.floor(Math.random()*vikingArr.length)
    let sIndex = Math.floor(Math.random()*saxonArr.length)
    
    let resultVikAtt = saxonArr[sIndex].receiveDamage(vikingArr[vIndex].strength)

    if (saxonArr[sIndex].health <= 0){saxonArr.splice(sIndex,1)} 
    
    return resultVikAtt 
    
  }
  saxonAttack(){
    let vkIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let randomViking = this.vikingArmy[vkIndex]
    let sxIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[sxIndex]
    

    let resultSaxAtt = randomViking.receiveDamage(randomSaxon.strength)

    if (randomViking.health <= 0){this.vikingArmy.splice(vkIndex,1)}
    
    return resultSaxAtt
  }
  showStatus(){
    if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
