// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health,
    this.strength= strength,
    this.attack = function(){
      return this.strength;
    },
    this.receiveDamage = function(damage){
      this.health -= damage
    }
  }
}
// Viking
class Viking extends Soldier{
  constructor(name, health, strenght){
    super(health,strenght); 
    this.name = name;
  }
  receiveDamage = function(damage){
    this.health -= damage
    if ( this.health <= 0){
      return `${this.name} has died in act of combat`
    }else{
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry = function(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage = function(damage){
    this.health -= damage
    if ( this.health <= 0){
      return `A Saxon has died in combat`
    }else{
      return `A Saxon has received ${damage} points of damage`
    }
  }
}



// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
