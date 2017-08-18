// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function (){
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
};

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this,health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function (){
  return this.strength;
};

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat.";
  }
};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};
// Saxon
function Saxon (health, strength) {
  Soldier.call(health, strength);
  this.health = health;
  this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function(){
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War () {
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
  var vattack = this.vikingArmy[0].attack();
  this.saxonArmy[0].receiveDamage(vattack);
  this.saxonArmy.shift();
  return;
};

War.prototype.saxonAttack = function(){
  var sattack = this.saxonArmy[0].attack();
  this.vikingArmy[0].receiveDamage(sattack);
  for (var i = 0; i < 12; i += 1) {
  this.vikingArmy.shift();}
  return;
};
