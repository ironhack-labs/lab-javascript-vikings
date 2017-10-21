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
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.name = function() {
  Soldier.call(this, name, health, strength);
};

Viking.prototype.attack = function() {
  return this.strength;
};

Viking.prototype.receiveDamage = function(attack) {
  this.health -= attack;

  if(this.health > 0) {
    return (this.name + " has received " + attack + " points of damage");
    } else {
      return (this.name + " has died in act of combat");
    }
};

Viking.prototype.battleCry = function() {
  return ("Odin Owns You All!");
};

// Saxon
function Saxon (health, strength) {
  this.health = health;
  this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype.receiveDamage = function(attack) {
  this.health -= attack;

  if(this.health > 0) {
    return ("A Saxon has received " + attack + " points of damage");
    } else {
      return ("A Saxon has died in combat");
    }
};




// War
function War () {

}
