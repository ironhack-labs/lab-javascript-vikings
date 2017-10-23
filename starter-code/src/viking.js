// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
}
  Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
};

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call( this, health, strength);
}
//
// this.receiveDamage = function(damage) {
//   this.health =this.health - damage;
//
//   if(this.health < 0) {
//     return (name + ' has received ' + damage + ' points of damage');
//   }
//
// };

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;

  if (this.health > 0 ){
    return this.name + ' has received ' + damage + ' points of damage';

  }
  else {
    return this.name + ' has died in act of combat';
  }
};

Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!'
};



// Saxon
function Saxon () {}

// War
function War () {}

var fighter = new Soldier(300, 50);
