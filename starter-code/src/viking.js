// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function (){
    return this.strength;
  };

  this.receiveDamage = function (damage) {
    this.health -= damage;
  }
}

// Viking
function Viking() {}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function (damage){
    this.health -= damage;

    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else{
      return `A Saxon has died in combat`;
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {}
