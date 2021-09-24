// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack (){
   return this.strength
  }

  receiveDamage(damage){
    //logic without return
  }
}

// Viking
class Viking extends Soldier {
 constructor (vikingName, health, strength){
   super ();
   this.name = vikingName;
   this.health = health;
   this.strength = strength;
 }

 receiveDamage(damage) {
   if (Viking === 'alive') {
     return `${this.name} has received ${this.damage} points of damage`
   } else if (Viking === 'dies') {
    return `${this.name} has died in act of combat`
   }
 }

 battleCry() {
   return 'Odin Owns You All!'
 }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
   if (saxon = "alive"){
     return 'a Saxon has received damage points of damage'
   } else {
     return 'a Saxon has died in combat'
   }
 }
}

// War
class War {
  constructor () {
    super();
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking){
    this.vikingArmy.push(this.name)
  };

  addSaxon(Saxon){
    this.saxonArmy.push(this.name)
  };

  vikingAttack(){
    
  };

  saxonAttack(){

  };
  
  showStatus();
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
