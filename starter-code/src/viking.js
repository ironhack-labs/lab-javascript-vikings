// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength=strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
}


// Viking
let viking ;
let name = "Harald";

function Viking(name, health, strength) {
  Soldier.call(this, health, strength); //CALL
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype); //Para inherar tenemos que hacer el call, igualar los prototypes (esta linea) 
Viking.prototype.constructor = Viking; // AQUI HAY QUE DECIRLE QUE EL PROTOTYPE APLIQUE AL CONSTRUCTOR DE VIKING PARA QUE NO SE VAYA A SOLDIER CUANDO SEA LLAMADO. Apuntes!!!
Viking.prototype.receiveDamage = function (damage){ //Aqui le hacemos heredar el receiveDamade pero le añadimos las frases que nos pide el enunciado.
  this.health -= damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
  }
} 
Viking.prototype.battleCry = function(){
  return 'Odin Owns You All!';
}

// Saxon

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.health=health;
  this.strength=strength;
}
Saxon.prototype=Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  } else {
    return `A Saxon has died in combat`;
  }
}


// War
function War() {}
