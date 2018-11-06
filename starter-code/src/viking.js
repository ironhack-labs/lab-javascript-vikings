// Soldier
function Soldier() {} //creo un objeto soldier vacio para que no me devulva nada en demage
function Soldier(health, strength) {
    this.strength = strength;
    this.health = health;
 }
 
Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking
function Viking() {} //Creamos el objeto vacio

Viking.prototype = Object.create(Soldier.prototype); // le decimos que este objeto es heredero de Soldier

function Viking(name, health, strength) {
  this.name = name,
  Soldier.call(this, health, strength)
}

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received" + damage + "points of damage"
  }
    return this.name + "  has died in act of combat"
  
}

// Saxon
function Saxon() {}

// War
function War() {}
