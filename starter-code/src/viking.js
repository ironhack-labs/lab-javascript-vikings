// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

}

// Soldier Method
Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}


// Viking
function Viking(name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = name;
}

// Esto conecta el constructor hijo con el padre
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking Method
Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received "+ damage + " points of damage";
  }else{
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this,health,strength);
}

// Esto conecta el constructor hijo con el padre
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

//Method Saxon
Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return "A Saxon has received "+ damage + " points of damage";
  }else{
    return "A Saxon has died in combat";
  }
}



// War
function War() {
  this.vikingArmy = new Array();
  this.saxonArmy = new Array();

}

// War Method
War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
}
War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
}
  

War.prototype.vikingAttack = function(){
  var numberSaxon = Math.floor(Math.random(this.saxonArmy.length));
  var numberViking = Math.floor(Math.random(this.vikingArmy.length));

  var resultado = this.saxonArmy[numberSaxon].receiveDamage(this.vikingArmy[numberViking].strength);
  
  // Aquí comprobamos si la salud del Saxon para ver si lo quitamos del array
  if(this.saxonArmy[numberSaxon].health <= 0){
    this.saxonArmy.splice(numberSaxon,1);
  }

   return resultado;
}

War.prototype.saxonAttack = function(){
  var numberSaxon = Math.floor(Math.random(this.saxonArmy.length));
  var numberViking = Math.floor(Math.random(this.vikingArmy.length));

  var resultado = this.vikingArmy[numberViking].receiveDamage(this.saxonArmy[numberSaxon].strength);
  
  // Aquí comprobamos si la salud del Viking para ver si lo quitamos del array
  if(this.vikingArmy[numberViking].health <= 0){
    this.vikingArmy.splice(numberViking,1);
  }

   return resultado;
}

War.prototype.showStatus = function(){
  if (!this.saxonArmy.length){
   // console.log("Saxon Vacio "+this.saxonArmy.length);
    return "Vikings have won the war of the century!";
  }else if (!this.vikingArmy.length){
   // console.log("Vikings Vacio "+this.vikingArmy.length);
    return "Saxons have fought for their lifes and suvived another day...";
  } else if ((this.saxonArmy.length >= 1) && (this.vikingArmy.length >= 1)) {
  //  console.log("Lucha Saxon "+this.saxonArmy.length);
 //   console.log("Lucha Viking "+this.vikingArmy.length);
    return "Vikings and Saxons are still in the thick of battle."
  }




}

