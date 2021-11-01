// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(theDam){
    this.health -= theDam;
  }
}

// Viking
class Viking  extends Soldier{
  constructor(name, health, strength) {
    super (name, health, strength)
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(theDam){
    this.health -= theDam;
    if (this.health > 0) {
      return `${this.name} has received ${theDam} points of damage`      
    } else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(theDam){
    this.health -= theDam;
    if (this.health > 0) {
      return `A Saxon has received ${theDam} points of damage`      
    } else{
      return `A Saxon has died in combat`
    }
}
}

// War
class War {
  
  vikingArmy = [];
  saxonArmy = [];

  addViking (viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon (saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack () {
    receiveDamage (saxon) {
      this.saxon.health == this.viking.health;
      if (saxon.health = 0) {
        this.saxonArmy.pop (saxon);
      }
      return 
    };
  }

  saxonAttack () {

  }

  showStatus () {

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
