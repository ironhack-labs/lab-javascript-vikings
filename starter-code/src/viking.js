// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
  return strengthArg
  };
  this.receiveDamage = function (damage){
    this.health = this.health - damage;
    return 
  }
}


// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function (damage){
    this.health = this.health - damage;
      if (this.health > 0){
        return this.name + " has received " + damage + " points of damage"
      } else{
          return this.name + " has died in act of combat"
        }
     };
     this.battleCry = function (){
       return "Odin Owns You All!"
     }
 // this.battleCry;
}



// Saxon
function Saxon() {}

// War
function War() {}
