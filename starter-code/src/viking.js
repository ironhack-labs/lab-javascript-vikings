// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = health - damage;
  };
}

// viking should inherit from soldier
Viking.prototype = Object.create(Soldier.prototype);

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.attack = function() {    /// inherit from Soldier
    return strength;
  };
  this.receiveDamage = function(damage) {
    this.health = health - damage;
    console.log(this.health);

    if (damage < health) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  this.battleCry = function(){
    return `Odin Owns You All!`;
  }
}


Saxon.prototype = Object.create(Soldier.prototype);
// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function(){
    return strength;
  }




}













// War
function War() {}
