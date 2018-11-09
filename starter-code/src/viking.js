// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}
//Clono los métodos de Soldier y le digo que su constructor sea Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage){
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0){
   //The viking is still alive
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    //the viking is dead
    return this.name + " has died in act of combat";
  }
  
}

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
}



// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

//Clono los métodos de Soldier y le digo que su constructor sea Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  Soldier.prototype.receiveDamage.call(this, damage);  
  if (this.health > 0){
    //The saxon is still alive
     return "A Saxon has received " + damage + " points of damage";
    
   }
   else {
     //the saxon is dead
     return "A Saxon has died in combat";
   }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking){
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon){
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function (){
  var saxon = this.saxonArmy[Math.round(Math.random()*(this.saxonArmy.length))];
  var viking = this.vikingArmy[Math.round(Math.random()*(this.vikingArmy.length))];

  saxon.receiveDamage(viking.strength);
  
  

 
}

