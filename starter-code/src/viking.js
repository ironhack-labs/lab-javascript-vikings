// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}
 Soldier.prototype.attack = function (){
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  };


// Viking

function Viking (firstName, health, strength){
  this.name = firstName;
  Soldier.call(this, health, strength);
};

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.strength = function() {
  return this.strength;
};

Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  } else if (this.health <= 0){
    return this.name + " has died in act of combat";
  };
};
 Viking.prototype.battleCry = function(){
   return "Odin Owns You All!";
 };


// Saxon
function Saxon (health, strength){
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function(){
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  } else if (this.health <= 0){
    return "A Saxon has died in combat";
  };
};





// War
function War () {}
