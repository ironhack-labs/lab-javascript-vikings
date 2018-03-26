// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
function Viking (name, healthArg, strengthArg) {
  Soldier.Call(this, name, healthArg, strengthArg)
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (damage > 0){
    return this.name + " has received" + this.health + " points of damage"; 
  }
  else {
    return this.name + " has died in act of combat";
  }

}
Viking.prototype.battleCry = function (){
  this.battleCry = "Odin Owns You All!";
}


// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.Call(this, healthArg, strengthArg)
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (damage > 0){
    return  "A Saxon has received" + this.health + " points of damage"; 
  }
  else {
    return "A Saxon has died in act of combat";
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy= [];

}

War.prototype.addViking = function (viking){
 
    this.vikingArmy.push (viking)
    
  
}