// Soldier
class Soldier {
  constructor(health, strength) {
    this.health=health;
    this.strength=strength;
    
  } // -- constructor
attack (){
  return this.strength
}
receiveDamage(damage){
  this.health = this.health - damage
  return 
}
} // -- class
// let damage
const instancia = new Soldier(10, 22);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name=name;
  }
  battleCry(){
    return "Odin Owns You All!"
  }
  receiveDamage(damage){
    this.health = this.health - damage

    if (this.health>0){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`

    } 
  }
  
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }
  
  receiveDamage(damage){
    this.health = this.health - damage
    if (this.health>0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return "A Saxon has died in combat"
      
    } 
  }
}


// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  
  addViking(viking){
    this.vikingArmy.push(viking)   
    return 
    
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
    return 
    
  }
  //---------------------------------
  vikingAttack(){
    //Saxon.health=Viking.strength
      //Saxon=receiveDamage(vikingAttack())
      if (saxon.health<=0)
      
      return receiveDamage
      }
    
    
    
    /*A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to 
    the strength of a Viking (also chosen at random). This should only perform a single attack and 
    the Saxon doesn't get to attack back.

should be a function
should receive 0 arguments
should make a Saxon receiveDamage() equal to the strength of a Viking
should remove dead saxons from the army
should return result of calling receiveDamage() of a Saxon with the strength of a Viking
*/
  }
  //saxonAttack(){

  //}
 // showStatus(){
//if the Saxon array is empty, should return "Vikings have won the war of the century!"
//if (this.saxonArmy==0){
 // return `Vikings have won the war of the century!`
//} else if (this.vikingArmy==0) {
 // return "Saxons have fought for their lives and survived another day..."
  
//} 
//else
//return  "Vikings and Saxons are still in the thick of battle."

 // }
  
//}
/*



*/


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
