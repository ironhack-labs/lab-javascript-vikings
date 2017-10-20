// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking (name,health,strength){
  this.name = name
  Soldier.call(this,health,strength);
}

Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(damage){
    var sms = this.name + " has received " + damage + " points of damage"
    return sms;
  }
}


// Saxon
function Saxon () {}

// War
function War () {}
