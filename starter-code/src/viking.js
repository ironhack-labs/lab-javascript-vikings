// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
}

// Soldier.receiveDamage(undefined);

// Viking
function Viking () {
  var viking;
  var name     = "Harald";
  var strength = 150;
  var health   = 300;
}

Viking.prototype = Object.create(Soldier.prototype);

var myViking = new Viking(name, health, strength);



// var soldier = new Viking(name, he)

// Viking.prototype = .create

// Soldier.attack()

// Saxon
function Saxon () {}

// War
function War () {}
