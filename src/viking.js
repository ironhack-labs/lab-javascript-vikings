// Soldier
class Soldier { 
  constructor (health, strength){
     this.health = health;
    this.strength = strength;
  }

  attack (){
    
    return this.strength
  }
  receiveDamage (damage){
    this.health -= damage
   }

}

const soldado = new Soldier( 10, 20);

console.log(soldado.strength)



console.log(this.strength)





// Viking
class Viking extends Soldier{
  constructor(name, health,strength){
    super(strength)
    this.name = name; 
    this.health = health;
    this.strength = strength;
  }
  receiveDamage (damage){
    this.health -= damage
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }

      return `${this.name} has died in act of combat`
    

  }
  battleCry(){
    return "Odin Owns You All!"
  }
   
     
}
  

  
 

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){
   super(strength)
    this.health = health;
   this.strength = strength;
 }
  receiveDamage (damage){
    this.health -= damage
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
  }

      return 'A Saxon has died in combat'
  
  }
}

// War
class War  {
constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
}

  addViking(Viking){
    this.vikingArmy.push(Viking)

  }
  addSaxon(Saxon){
    //(a) => this.saxonArmy.push(Saxon)
    this.saxonArmy.push(Saxon)
  }
  vikingAttack(){
  
  
    
  
  }
  saxonAttack(){}
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

