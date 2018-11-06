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

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health.length > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    return this.name + "  has died in act of combat";
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!"
}

// Saxon
function Saxon() {}

Saxon.prototype = Object.create(Soldier.prototype); // le decimos que este objeto es heredero de Soldier

function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}

Saxon.prototype.attack = function(){
  return Soldier.prototype.attack.call(this);
}

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health.length > 0) {
    return "A Saxon has received " + demage + " points of damage";
  }
  else {
    return "A Saxon has died in combat";
  }
}

// War
function War() {}

function War () {
  this.vikingArmy = [],
  this.saxonArmy = []
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking)
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon)
}

War.prototype.vikingAttack = function () {
 //deberia crear un prototipo aparte para hacer los random de armas en Saxon y Vikin
}

War.prototype.saxongAttack = function () {
  
}

War.prototype.showStatus = function () {
  if ( this.saxonArmy.length === 0 ) {
    return 'Vikings have won the war of the century!';
  } 
  else if ( this.vikingArmy.length === 0 ) {
    return 'Saxons have fought for their lives and survive another day...';
  } else {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}