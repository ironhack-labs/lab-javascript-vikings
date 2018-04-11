 // Soldier
 function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}
Soldier.prototype.attack = function (){
return this.strength;
}
Soldier.prototype.receiveDamage = function (damage){
this.health -=  damage;
};




// Viking

function Viking(name,healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
  console.log(this.name);
  }
  Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;
  //var viking = new Viking (name, healthArg, strengthArg);
  
  var viking = new Viking (name, health, strength);
  console.log(viking);
  
  
  Viking.prototype.receiveDamage = function (damage) {
    viking.health -= damage;
    if (viking.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    }
    else {
      return this.name + " has died in act of combat";
    }
  }