// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

//sacamos los métodos para que cada vez que hagamos una instancia de soldado
//no tenga como propiedad la función
Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
};

console.log(Soldier);

// Viking => hereda de soldier
function Viking(name, health, strength) {
  //Viking tendra las propiedades de soldier, healt & stregth, y además name
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

//asi guardamos como constructor del viking el viking y no el soldier (por herencia saldria eso)
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  //necesita ser reescrita porque hace cosas diferentes de las que hay en soldier
  this.health = this.health - damage;

  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
  //escoge un saxon aleatoriamente
  //escoge un viking aleatoriamente
  //le resta al saxon.health el valor de viking.strength => esto ya lo tengo definido en receive damage

  var aleatorioViking = Math.trunc(Math.random() * this.vikingArmy.length);
  var viking = this.vikingArmy[aleatorioViking];

  var aleatorioSaxon = Math.trunc(Math.random() * this.saxonArmy.length);
  var saxon = this.saxonArmy[aleatorioSaxon];
  //guardar el aleatorio en una variable

  var returnReceiveDamage = saxon.receiveDamage(viking.strength);
  if (saxon.health <= 0) {
    this.saxonArmy.splice(aleatorioSaxon, 1);
  } else {
  }
  return returnReceiveDamage;
};


War.prototype.saxonAttack = function() {
  //escoge un saxon aleatoriamente
  //escoge un viking aleatoriamente
  //le resta al saxon.health el valor de viking.strength => esto ya lo tengo definido en receive damage

  var aleatorioViking = Math.trunc(Math.random() * this.vikingArmy.length);
  var viking = this.vikingArmy[aleatorioViking];

  var aleatorioSaxon = Math.trunc(Math.random() * this.saxonArmy.length);
  var saxon = this.saxonArmy[aleatorioSaxon];
  //guardar el aleatorio en una variable

  var returnReceiveDamage = viking.receiveDamage(saxon.strength);
  if (viking.health <= 0) {
    this.vikingArmy.splice(aleatorioViking, 1);
  } else {
  }
  return returnReceiveDamage;
};

War.prototype.showStatus = function() {

  if(this.saxonArmy.length == 0 ){
    //han muerto todos los saxon (o no había)
   return  "Vikings have won the war of the century!";
  }

  if(this.vikingArmy.length == 0 ){
    //han muerto todos los vikings (o no había)
   return  "Saxons have fought for their lives and survive another day...";
  }

  if(this.saxonArmy.length != 0  && this.vikingArmy.length != 0 ){
    //todavia queda 1 saxon y 1 viking
   return "Vikings and Saxons are still in the thick of battle."
  }
}

