// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  //this.attack = function(){
  //  return this.strength;
  //}
  //this.receiveDamage = function(damage){
  //  this.health = this.health - damage;
  //}
}

Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return (this.name + " has received "  + this.damage + " points of damage");
  } else {
    return (this.name + " has died in act of combat");
  }
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.attack = function(strength){
    return this.strength;
  }
  this.receiveDamage = function(damage){
    this.damage = damage;
    this.health -= damage;
    if (this.health > 0) {
      return (this.name + " has received "  + this.damage + " points of damage");
    } else {
      return (this.name + " has died in act of combat");
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {}

