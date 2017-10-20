// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(attack) {
  this.health -= attack;
};


// Viking
function Viking (name, health, strength) {
  Soldier.call(this, name, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.name = function() {
  this.name = name;
  this.health = health;
};


// Saxon
function Saxon () {

}

// War
function War () {

}
