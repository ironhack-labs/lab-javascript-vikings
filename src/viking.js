// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;     
  }
  attack(){
    return (this.strength);
  }
  receiveDamage(theDamage){
  }
}


// Viking
class Viking extends Soldier{
  constructor(name, health, strength ){
    super(health,strength);
    this.name = name;
  };

  attack(){
    return (this.strength);
  }

  /*receiveDamage(theDamage){
    if(this.health <= 0){
      return (`${this.name} has died in act of combat`)
    }
  }*/

  battleCry(){
    return ("Odin Owns You All!");
  };

};

// Saxon
class Saxon extends Soldier {
  
  
}

// War
class War {
  constructor(army){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){

  }
  addSaxon(saxon){

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
