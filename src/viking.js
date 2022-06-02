// Soldier
class Soldier {
  constructor(health, strength) {
    this.health=health;
    this.strength=strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health-=damage

  }
}

// Viking
class Viking extends Soldier {
    constructor (name,health,strength){
    super (health,strength);
    this.name = name;
  }
  battleCry(){
    return 'Odin Owns You All!';
  }
  receiveDamage(damage){
    this.health-=damage
    if (this.health <=0){
      return `${this.name} has died in act of combat`
    }
    return `${this.name} has received ${damage} points of damage`
  }
 


}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(damage){
    this.health-=damage
    if (this.health <=0){
      return `A Saxon has died in combat`
    }
    return `A Saxon has received ${damage} points of damage`
  }
  
}

// War
class War {
  
  vikingArmy= [];
  saxonArmy =[];
  
  addViking(viking) {

    //viking = new Viking (this.name,this.health,this.strength);
    this.vikingArmy.push (viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push (saxon)
  }
  vikingAttack(){

    
    let vikingIndex= 1+Math.floor(Math.random()*this.vikingArmy.length)
    let saxonIndex=1+ Math.floor(Math.random()*this.saxonArmy.length)
    let saxonHealth = this.saxonArmy[this.saxonIndex].this.health
    
    if (this.saxonHealth.this.health <= 0){
      return this.saxonArmy.splice(this.saxonArmy[saxonIndex],1)
    }
    // return call receiveDamage!!! buscar
    return this.saxonHealth-=receiveDamage(this.vikingArmy[vikingIndex].this.strength)
  }
  saxonAttack(){


  }
  showStatus(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }else if (this.vikingArmy.length === 0){
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
