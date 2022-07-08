// Soldier

class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack () {
    return this.strength;
  }

  receiveDamage (theDamage){
    this.health -= theDamage;
    }
}



// Viking
class Viking extends Soldier {
   constructor (name, health, strength){
    super (health, strength);
    this.name = name;
   }
   receiveDamage (theDamage){
    this.health -= theDamage;
    if (this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`;
    }
    else {
      return `${this.name} has died in act of combat`;
    }
    }

    battleCry () {
      return "Odin Owns You All!";
    }
}

// Saxon

class Saxon extends Soldier {
   constructor (health,strength){
    super(health, strength);
   } 

   receiveDamage (theDamage){
    this.health -= theDamage;
    if (this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`;
    }
    else {
      return `A Saxon has died in combat`;
    }
    }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vicking) {
    this.vikingArmy.push(vicking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  
  vikingAttack() {
    
    (this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]).receiveDamage((this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]).attack());
    

    /* for (i=0; i<this.saxonArmy.length; i++){
      if (this.saxonArmy[i].health <= 0) {
        this.saxonArmy.splice(this.saxonArmy[i],1);
      } */
  
  }

  saxonAttack() {

  }
  showStatus() {

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
