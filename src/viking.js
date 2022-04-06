// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;    
  }

  receiveDamage(Damage){
    this.health = this.health - Damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(Damage){
    this.health = this.health - Damage;
    if(this.health > 0){
      return `${this.name} has received ${Damage} points of damage`;
    }
    else {
      return `${this.name} has died in act of combat`;
    }
  }
  
  battleCry(){
    return "Odin Owns You All!"
  }
} 

// Saxon
class Saxon extends Soldier{
  receiveDamage(Damage){
    this.health = this.health - Damage;
    if(this.health > 0){
      return `A Saxon has received ${Damage} points of damage`;
    }
    else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []; 
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    var saxonID = Math.floor(Math.random()*this.saxonArmy.length);
    var vikingID = Math.floor(Math.random()*this.vikingArmy.length);
   var returnMsg = this.saxonArmy[saxonID].receiveDamage(this.vikingArmy[vikingID].strength);
   
   
   if(this.saxonArmy[saxonID].health <= 0) {
    this.saxonArmy.splice(saxonID,1);     
   }
   return returnMsg;
   }

   saxonAttack(){
    var saxonID = Math.floor(Math.random()*this.saxonArmy.length);
    var vikingID = Math.floor(Math.random()*this.vikingArmy.length);
   var returnMsg = this.vikingArmy[vikingID].receiveDamage(this.saxonArmy[saxonID].strength);

   if(this.vikingArmy[vikingID].health <= 0) {
    this.vikingArmy.splice(vikingID,1);     
   }
   return returnMsg;
   }

   showStatus(){
     if (this.saxonArmy.length == 0){
       return "Vikings have won the war of the century!"
     }
     else if (this.vikingArmy.length == 0){
       return "Saxons have fought for their lives and survived another day..."
     }
     else {
       return "Vikings and Saxons are still in the thick of battle."
     }
   }
  }
  






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
