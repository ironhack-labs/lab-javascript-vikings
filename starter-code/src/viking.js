// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function(){
    return this.strength;
  }

  this.receiveDamage = function(damage){
    this.health -= damage;
  }
}

// Viking
function Viking(name, health, strength) {
  this.n
}

// Saxon
function Saxon() {}

// War
function War() {}
