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
class Viking extends Soldier {

  constructor(name, health, strength){
    super(health, strength)
    this.name = name;

  
  }

  battleCry(){
    return "Odin Owns You All!"
 }

 receiveDamage(damage){  
  this.health -= damage
  if(this.health > 0){
    return `${this.name} has received ${damage} points of damage`
  }else{
    return `${this.name} has died in act of combat`
  }
}


}

// Saxon
class Saxon extends Soldier{

    constructor(health, strength){
      super(health, strength)
    }

    receiveDamage(damage){
      this.health -= damage
      if(this.health > 0){
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

  addViking(viking){
    this.vikingArmy.push(viking)

  }

  addSaxon(saxon){
      this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    
    let status = randomSaxon.receiveDamage(randomViking.strength)
    this.saxonArmy = this.saxonArmy.filter((saxon) => {
      if(saxon.health > 0){
        return saxon
      }
    })
    return status

  }

  saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  
    let status = randomViking.receiveDamage(randomSaxon.strength)
      this.vikingArmy = this.vikingArmy.filter((viking) => {
        if(viking.health > 0){
          return viking
        }
      })
      return status
  }

  showStatus(){
    
    if(this.saxonArmy == 0){
      return "Vikings have won the war of the century!"
    }else if(this.vikingArmy == 0){
      return "Saxons have fought for their lives and survived another day..."
    }else{
      return "Vikings and Saxons are still in the thick of battle."
    }

   
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
