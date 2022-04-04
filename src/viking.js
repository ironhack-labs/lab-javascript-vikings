// Soldier
class Soldier {

  constructor(health, strength){
    this.health=health;
    this.strength=strength;
  }
  
  attack(){
    return this.strength;
  }
  
receiveDamage(thedamage){
    
      this.health= this.health - theDamage;
      return "Soldiers never dies";
      
        
      }
  };



// Viking
class Viking extends Soldier  {
   
    // TODO
    constructor(name,health,strength){
      super(health,strength);
   this.name = name;
      
    }
    
    takenDamage(theDamage) {
      this.health = this.health - theDamage;
    if (this.health > 0 ) {
      return `${this.name} has received ${theDamage} points of damage`;}
     else {
      return `${this.name} has died in act of combat`;
      } 
    }
    battleCry() {
      return "Odin Owns you All!";
    }
    }

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage){
    this.health = this.health - theDamage;
    if (health > 0)
      return 'A Saxon has received ${theDamage} points of damage';
    else
     return 'A Saxon has died in act of combat';
  }
    }
  


// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
