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
  
  vikingArmy = [];
  saxonArmy = [];
 
  addViking (viking ) {
    this.vikingArmy.push (viking); 
  }
  addSaxon(saxon){
    this.saxonArmy.push (saxon)
  }
  vikingAttack(){

    const vikingIndex=  Math.floor( this.vikingArmy.length * Math.random() )
    const saxonIndex=Math.floor(Math.random()*this.saxonArmy.length)
    let saxonHealth = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength)
    
    if (saxonHealth <= 0){
      return this.saxonArmy.splice(this.saxonArmy[this.saxonIndex],1)
    }
    
    return saxonHealth
  }
  saxonAttack(){
    const vikingIndex=  Math.floor( this.vikingArmy.length * Math.random() )
    const saxonIndex=Math.floor(Math.random()*this.saxonArmy.length)
    let vikingHealth = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength)
    
    if (vikingHealth <= 0){
      return this.vikingArmy.splice(this.vikingArmy[this.vikingIndex],1)
    }
    
    return vikingHealth

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
