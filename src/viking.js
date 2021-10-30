// Soldier
class Soldier {
    constructor(health, strength){
      this.health=health;
      this.strength=strength;
      
    }
    attack(){
      return this.strength
    }
    receiveDamage(damage){
      this.health -= damage;
    }
      
  }

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(name,health,strength)
    this.name=name
    this.health=health;
    this.strength=strength;
  }
  receiveDamage(damage){
    this.health -= damage;

    return this.health===0 ? `${this.name} has died in act of combat`:`${this.name} has received ${damage} points of damage`
    
  }
  battleCry(){
    return "Odin Owns You All!"
     }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
      super(health,strength)
        this.health= health;
        this.strength=strength;
  }
  receiveDamage(damage){
      this.health -=damage;
      return this.health===0 ? `A Saxon has died in combat`:`A Saxon has received ${damage} points of damage`
  }
}

// War
class War {
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
    
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    // let strengthVik=this.vikingArmy.forEach(function(elem){ return elem.strength})
    
    // receiveDamage(strengthVik)
  }
  saxonAttack(){}
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
