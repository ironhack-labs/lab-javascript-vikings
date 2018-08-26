// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
};

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
  return;
};

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
};
//assign prototype from soldier and viking constructor
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  };
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this,health,strength);
  };
//we assign solder prototype and Saxon constructor
Saxon.prototype= Object.create(Soldier.prototype);
Saxon.prototype.constructor= Saxon;

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0) {
    //alive
    return "A Saxon has received " + damage + " points of damage";
  } else {
    //dead
    return "A Saxon has died in combat";
  };
};

// War
function War() {
  //empty arrays
  this.vikingArmy=[];
  this.saxonArmy=[];
}

War.prototype.addViking = function(Viking){
  //push to new arrays
  this.vikingArmy.push(Viking);
};
//push to new arrays
War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length-1));
 var randomViking = Math.floor(Math.random() * (this.vikingArmy.length-1));
 var choosenSaxon = this.saxonArmy[randomSaxon];
 var choosenViking = this.vikingArmy[randomViking];
 var result = choosenSaxon.receiveDamage(choosenViking.strength);  
 if (choosenSaxon.health <= 0) {
  this.saxonArmy.splice(randomSaxon, 1);
 }
  return result;
}
War.prototype.saxonAttack = function() {
  var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length-1));
  var randomViking = Math.floor(Math.random() * (this.vikingArmy.length-1));
  var choosenSaxon = this.saxonArmy[randomSaxon];
  var choosenViking = this.vikingArmy[randomViking];
  var result = choosenViking.receiveDamage(choosenSaxon.strength);  
  if (choosenViking.health <= 0) {
    this.vikingArmy.splice(randomViking, 1);
 }
  return result;
}
War.prototype.showStatus = function() {
  return this.saxonArmy.length == 0 ? "Vikings have won the war of the century!" : this.vikingArmy.length == 0 ? "Saxons have fought for their lives and survive another day..." : "Vikings and Saxons are still in the thick of battle.";
}
