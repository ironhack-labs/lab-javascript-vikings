// Soldier

function Soldier(health,strength) {
  this.health = health;
  this.strength = strength;

}

//sacamos los métodos para que cada vez que hagamos una instancia de soldado
//no tenga como propiedad la función
Soldier.prototype.attack = function () {
   return this.strength;
};

Soldier.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
  }

console.log(Soldier);

// Viking => hereda de soldier
function Viking(name, health, strength){
  //Viking tendra las propiedades de soldier, healt & stregth, y además name
  this.name = name; 
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage){
  //necesita ser reescrita porque hace cosas diferentes de las que hay en soldier
  this.health = this.health - damage;
  if(this.health > 0 ){
   return this.name + " has received " + damage + " points of damage";
  }else{
   return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}


Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
  if(this.health > 0 ){
   return "A Saxon has received "+ damage+" points of damage";
  }else{
   return "A Saxon has died in combat";
  }
}


// War
function War() {}

