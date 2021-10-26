// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health,
    this.strength = strength
  }
  attack(){
    
    return this.strength
  }

  receiveDamage(damage){
    
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength);
    this.name = name
    
  }
    receiveDamage(){

    }

    battleCry(){

    }
}

// Saxon
class Saxon {
  constructor (){}
}

// War
class War {
  constructor (){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
