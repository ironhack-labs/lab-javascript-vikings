// Soldier
class Soldier{
  constructor(health,strength){
    this.health = health,
    this.strength = strength
    this.attack = function(){
      return this.strength
    }
    this.receiveDamage = function(Damage){
      this.health -=  Damage
    }
  }
}


// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
    this.name = name 
    this.receiveDamage = function(Damage){
      this.health -= Damage
      if(this.health > 0){
        return`${this.name} has received ${Damage} points of damage`
    } else{
      return`${this.name} has died in act of combat`
    }
    
    }
    this.attack=function(){
      return this.strength
    }

 
    this.battleCry = function(){
      return "Odin Owns You All!"
    }
  }
 
  
  
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health,strength)
    
    this.attack = function(){
      return this.strength
    }
    this.receiveDamage=function(Damage){
      this.health -= Damage
      if(this.health > 0){
        return `A Saxon has received ${Damage} points of damage`
      } else{
        return `A Saxon has died in combat`
      }
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
    const SelectRandomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    const SelectRandomSaxonArmy =  this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    this.saxonArmy = this.saxonArmy.filter(saxon=>{
      if(saxon.health<=0){
        this.saxonArmy.pop(saxon)
        return saxon
      }
    })
    return SelectRandomSaxonArmy.receiveDamage(SelectRandomViking.strength)
    
  }

  saxonAttack(){
    const SelectSaxonArmy = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    const SelectVikingArmy = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    const Fight=SelectVikingArmy.receiveDamage(SelectSaxonArmy.strength);

    if(SelectVikingArmy.health<=0){
       const deleteViking = this.vikingArmy.includes(SelectVikingArmy);
       this.vikingArmy.pop(deleteViking);
    } 
    return Fight;
    
  }

  showStatus(){
    if (this.saxonArmy<=0) {
      return "Vikings have won the war of the century!"

    } else if (this.vikingArmy<=0) {
      return "Saxons have fought for their lives and survived another day..."

    } else if (this.saxonArmy.length === this.vikingArmy.length) {

      return "Vikings and Saxons are still in the thick of battle."
    }

  }
  

}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

