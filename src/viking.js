// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health,strength)
    this.name = name
  }
  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health-=damage
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  //the argument viking bellow is an object
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  
  }

  vikingAttack(){
    //now we have to declare a random saxon
     let diceSaxon =  Math.floor(this.saxonArmy.length * Math.random())
     let randomSaxon = this.saxonArmy[diceSaxon]
     let diceViking = Math.floor(this.vikingArmy.length * Math.random())
     let randomViking = this.vikingArmy[diceViking]
     let result = randomSaxon.receiveDamage(randomViking.strength)
     //and now should remove dead saxons
     
     this.saxonArmy.sort(function(a,b){
      return a.health - b.health
     })
     for (let i = 0; i< this.saxonArmy.length; i++)
     {
      if (this.saxonArmy[i].health<=0){
        this.saxonArmy.shift()
      }
     }
     return result
  }




  saxonAttack(){
     let diceSaxon =  Math.floor(this.saxonArmy.length * Math.random())
     let randomSaxon = this.saxonArmy[diceSaxon]
     let diceViking = Math.floor(this.vikingArmy.length * Math.random())
     let randomViking = this.vikingArmy[diceViking]
     let result = randomViking.receiveDamage(randomSaxon.strength)
     //and now should remove dead saxons
     
     this.vikingArmy.sort(function(a,b){
      return a.health - b.health
     })
     for (let i = 0; i< this.vikingArmy.length; i++)
     {
      if (this.vikingArmy[i].health<=0){
        this.vikingArmy.shift()
      }
     }
     return result

  }
  showStatus(){
    if(this.saxonArmy.length===0){
      return 'Vikings have won the war of the century!'
    }
    if(this.vikingArmy.length===0){
      return 'Saxons have fought for their lives and survived another day...'
    }
    return 'Vikings and Saxons are still in the thick of battle.'
  }




}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
