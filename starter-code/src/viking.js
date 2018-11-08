// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  }

  Soldier.prototype.attack = function() {
    return this.strength;
  }

  Soldier.prototype.receiveDamage = function(damage) {
     this.health -= damage
  }

  
// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function() {
  return this.strength;
}


Viking.prototype.receiveDamage = function(damage) {
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + this.damage + " points of damage"
  } 
  
  
  
  // return name + 'has received' +  damage + 'points of damage'; }
// if(Viking.prototype.health > 0) {
//   return Viking.prototype.name + " has received " + damage + " points of damage"
// } else if (Viking.prototype.health < 0) {
//   return  Viking.prototype.name + " has received " + damage + " points of damage"
// }
 
}

// Saxon
function Saxon() {}

// War
function War() {}
