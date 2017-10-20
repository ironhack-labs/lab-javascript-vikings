// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
  };
}
//Añadimos las funciones al prototype de Soldier
Soldier.prototype.attack = function(){
  return this.strength;
};

//Definimos herencia
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking
function Viking (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    return this.health > 0 ? this.name + " has received " + damage + " points of damage":this.name + " has died in act of combat";
  };
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

// Saxon
function Saxon () {}

// War
function War () {}
