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
    this.health-= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage){
    this.health-= damage
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength)
  }
  receiveDamage(damage){
    this.health-= damage
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return 'A Saxon has died in combat'
    }
  }
}

// War BONUS 4
class War {
  constructor(){  
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(newViking){
   this.vikingArmy.push(newViking);
  }
  addSaxon(newSaxon){
    this.saxonArmy.push(newSaxon);
   }
  vikingAttack(){
      let saxonAttacked = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      let vikingAttacking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      let battleResult=saxonAttacked.receiveDamage(vikingAttacking.strength);
      
      if(saxonAttacked.health<=0){
        let deleteSaxon = this.saxonArmy.indexOf(saxonAttacked);
         this.saxonArmy.splice(deleteSaxon);
      } return battleResult;
  }
  saxonAttack(){
    let saxonAttacking = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingAttacked = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let battleResult=vikingAttacked.receiveDamage(saxonAttacking.strength);
    
    if(vikingAttacked.health<=0){
      let deleteViking = this.vikingArmy.indexOf(vikingAttacked);
       this.vikingArmy.splice(deleteViking);
    } return battleResult;
  }



}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
