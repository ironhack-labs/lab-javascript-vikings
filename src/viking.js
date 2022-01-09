// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
    
    //method recieveDamage
    receiveDamage(damage){
      this.health = this.health - damage;
    };
    
    //method attack
    attack(){
      return this.strength
    }; 
}


// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    
    super(health, strength);
    this.name = name;
  }
  //method recieve Damage
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage"
    }else {
      return this.name + " has died in act of combat"
    } 
  }

  //method battle cry
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return "A Saxon has received " + damage + " points of damage"
    }else {
      return "A Saxon has died in combat"
    } 

  }

}

// War
class War {
  constructor(){
  this.vikingArmy = []
  this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.unshift(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.unshift(saxon)
  }

  vikingAttack(){


  }

  saxonAttack(){


  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
