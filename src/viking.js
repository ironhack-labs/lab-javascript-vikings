// Soldier
class Soldier {
  constructor(health, strength){
    this.health=300
    this.strength=150
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health-=damage
    
  }
  
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super (health, strength)
    this.name='Harald'
  }
  battleCry(){
    return "Odin Owns You All!"
  }
  receiveDamage(damage){
    this.health-=damage
    if(this.health >0){
      let returnStr=this.name +' has received ' +damage + ' points of damage'
      return returnStr
    }
    return this.name +' has died in act of combat'
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
      super (health,strength)
      this.health=60
      this.strength=25
  }
  receiveDamage(damage){
    this.health-=damage
    if(this.health >0){
      return 'A Saxon has received ' +damage +' points of damage' 
    }
    return 'A Saxon has died in combat'
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
    //get the ID of the saxon in the army, that is going to be hit
    let saxId=Math.floor(Math.random()*this.saxonArmy.length)
    
    const attack=this.saxonArmy[saxId].receiveDamage(this.vikingArmy[0].strength)
    for( let i=0; i<this.saxonArmy.length; i++){
      if (this.saxonArmy[i].health<=0){
        this.saxonArmy.splice(i)
      }
    }
    return attack
  }
  saxonAttack(){
    //get the ID of the saxon in the army, that is going to be hit
    let vikingToAttack=Math.floor(Math.random()*this.vikingArmy.length)
    const attack=this.vikingArmy[vikingToAttack].receiveDamage(this.saxonArmy[0].strength)
    
    for( let i=0; i<this.vikingArmy.length; i++){
      if (this.vikingArmy[i].health<=0){
        this.vikingArmy.splice(i)
      }
    }
  return attack
  }
  showStatus(){
    if(this.vikingArmy.length===0){
      return 'Saxons have fought for their lives and survived another day...'
    } else if (this.saxonArmy.length===0){
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length >0 && this.saxonArmy.length>0){
    return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
