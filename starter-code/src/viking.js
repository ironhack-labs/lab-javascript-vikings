// Soldier
function Soldier(health , strength) {
  this.health = health;
  this.strength = strength;
}
  Soldier.prototype.attack = function (){
    return this.strength;
  };
  Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
  };


// Viking


function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  // this.health = health;
  // this.strength = strength;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function (){
    return this.strength;
  };
Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
  } else if (this.health <= 0){
    return `${this.name} has died in act of combat`;
  }
};
Viking.prototype.battleCry = function (){
    return `Odin Owns You All!`;
  };



// Viking.prototype.constructor = Viking;

// Saxon

function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function (){
    return this.strength;
  };
  this.receiveDamage = function (damage){
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0){
      return `A Saxon has died in combat`;
    }
  };
}
Saxon.prototype = Object.create(Soldier.prototype);
// Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function (viking){
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function (saxon){
    this.saxonArmy.push(saxon);
  };
  
  // this.addViking(Viking);
  // this.addSaxon(Saxon);
  this.vikingAttack = function (){
    Saxon.receiveDamage(Viking.strength);
  };

}



