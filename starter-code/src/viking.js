// Soldier
function Soldier(health, strength) {
  this.health   = health;
  this.strength = strength;
  this.attack   = function() {
    return strength;
  }
  this.receiveDamage = function(damage) {

    this.damage = damage;
    this.health -= damage;
  }

}

Soldier.prototype.receiveDamage = function(damage) {

  this.damage  =  damage;
  this.health -= damage;
}
Soldier.prototype.attack = function() {
  return this.strength;
}
// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.attack();
  this.name = name;
  this.battleCry = function(){
      return "Odin Owns You All!"
  }
  this.receiveDamage = function (damage) {
    this.damage = damage;
    this.health -= damage;
    
    if(this.health >  0){
      return `${name} has received ${damage} points of damage`
    } else {
      return `${name} has died in act of combat`
    }
    
  }
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.attack();
  this.receiveDamage = function (damage) {
    this.damage = damage;
    this.health = health - damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return "A Saxon has died in combat"
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  
  this.vikingArmy = [];
  this.saxonArmy  = [];

};


