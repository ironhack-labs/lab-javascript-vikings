// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function (){
    return this.strength;
  }
  this.receiveDamage = function(damage){
     this.health -= damage;
  }
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength)
}



Viking.prototype = Object.create(Soldier.prototype);
var Viking = new Soldier(health, strength);


// Saxon
function Saxon() {}

// War
function War() {}
