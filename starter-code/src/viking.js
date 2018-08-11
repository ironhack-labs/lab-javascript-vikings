// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(dmg){
  this.health -= dmg
}

Viking.prototype = Object.create(Soldier.prototype)

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}



// Saxon
function Saxon() {}

// War
function War() {}

// Viking
// should inherit from Soldier
// constructor function
// should receive 3 arguments (name, health & strength)
// should receive the name property as its 1st argument
// should receive the health property as its 2nd argument
// should receive the strength property as its 3rd argument
// attack() method
// should be a function
// should receive 0 arguments
// should return the strength property of the Viking
// receiveDamage() method
// should be a function
// should receive 1 argument (the damage)
// should remove the received damage from the health property
// should return "NAME has received DAMAGE points of damage", if the Viking is still alive
// should return "NAME has died in act of combat", if the Viking dies
// battleCry() method
// should be a function
// should receive 0 arguments
// should return "Odin Owns You All!"