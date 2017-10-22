

//Definimos herencia
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


// Soldier-----------------------
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

//Añadimos funciones de Soldier al prototype de Soldier
Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
};
Soldier.prototype.attack = function(){
  return this.strength;
};

// Viking-------------------------
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

//Añadimos funciones de Viking a prototype
Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  return this.health > 0 ? this.name + " has received " + damage + " points of damage":this.name + " has died in act of combat";
};
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
}

//Añadimos funciones de Saxon a prototype
Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  return this.health > 0 ? "A Saxon has received " + damage + " points of damage":"A Saxon has died in combat";
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

//Función para elegir aleatoriamente a una unidad
function chooseRandom(army){
  return Math.floor(Math.random() * army.length);
}

//Añadimos al prototype de War
War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function(){
  var saxonUnit = chooseRandom(this.saxonArmy);
  var vikingUnit = chooseRandom(this.vikingArmy);
  var result = this.saxonArmy[saxonUnit].receiveDamage(this.vikingArmy[vikingUnit].attack());
  this.saxonArmy.splice(saxonUnit, 1);
  return result;
};
War.prototype.saxonAttack = function(){
  var saxonUnit = chooseRandom(this.saxonArmy);
  var vikingUnit = chooseRandom(this.vikingArmy);
  var result = this.vikingArmy[vikingUnit].receiveDamage(this.saxonArmy[saxonUnit].attack());
  if(this.vikingArmy[vikingUnit].health <= 0)this.vikingArmy.splice(vikingUnit, 1);
  return result;
};
War.prototype.showStatus = function(){
  if(this.saxonArmy.length == 0){
    return "Vikings have won the war of the century!";
  } else if(this.vikingArmy.length == 0){
    return "Saxons have fought for their lives and survive another day...";
  } else{
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
