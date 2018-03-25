// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}
Soldier.prototype.attack = function() {
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
} 
// Soldier.prototype.attack = function(){
  
// }
// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if(this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  }else{
    return this.name + " has died in act of combat";
  }
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if(this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  }else{
    return "A Saxon has died in combat";
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function(){
  var saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  var result = saxon.receiveDamage(viking.strength);
  if(saxon.health <= 0){
    var index = this.saxonArmy.indexOf(saxon);
    if (index > -1) {
      this.saxonArmy.splice(index, 1);
    }
  }
  return result;

};
War.prototype.saxonAttack = function(){
  var saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  var result = viking.receiveDamage(saxon.strength);
  if(viking.health <= 0){
    var index = this.vikingArmy.indexOf(viking);
    if (index > -1) {
      this.vikingArmy.splice(index, 1);
    }
  }
  return result;
};
War.prototype.showStatus = function(){
  if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
  }else if(this.vikingArmy.length ===0){
    return "Saxons have fought for their lives and survive another day...";
  }else {
    return "Vikings and Saxons are still in the thick of battle."
  }
};