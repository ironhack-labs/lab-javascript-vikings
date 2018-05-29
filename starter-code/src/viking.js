// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
  //return this.health;
}

// Viking------------------------------------------------------------------------//
function Viking(name, health, strength) {
  //call to the father
  Soldier.call(this,health,strength);
  //diferences with the father, viking has a name parameter
  this.name = name;
}

//attack method is equal to the father, so is not necessary to do a new method for the child
Viking.prototype = Object.create(Soldier.prototype); 

//reciveDamage method is different, so is necessary to do new method
Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0){
    return this.name + ' has received ' + damage + ' points of damage';
  } else {
    return this.name + ' has died in act of combat';
  }
}

//and the child has new method
Viking.prototype.battleCry = function(){
  return 'Odin Owns You All!'; 
}

// Saxon------------------------------------------------------------------------//
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0){
    return 'A Saxon has received ' + damage + ' points of damage';
  } else {
    return 'A Saxon has died in combat';
  }
}

// War------------------------------------------------------------------------//
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(vikingSoldierObj){ //creating vikings
  this.vikingArmy.push(vikingSoldierObj);
}

War.prototype.addSaxon = function(saxonSoldierObj){ //creating saxons
  this.saxonArmy.push(saxonSoldierObj);
}

//attack of vikings
War.prototype.vikingAttack = function(){
  var currentSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var currentViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  //random saxon is attacked by random viking. The argument is the viking strength
  var resultOfAttack = currentSaxon.receiveDamage(currentViking.strength);

  //remove dead saxons from the army
  if (currentSaxon.health <= 0){
    this.saxonArmy.splice(currentSaxon, 1);
  }
  return resultOfAttack;
}

//attack of saxons
War.prototype.saxonAttack = function () { 
  var currentSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var currentViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

  var resultOfAttack = currentViking.receiveDamage(currentSaxon.strength);

  if (currentViking.health <= 0) {
    this.vikingArmy.splice(currentViking, 1);
  } 
  return resultOfAttack;
} 

War.prototype.showStatus= function(){ //battle result
  if ((this.saxonArmy.length > 0) && (this.vikingArmy.length > 0)) {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
  if(this.saxonArmy.length <= 0){
    return 'Vikings have won the war of the century!';
  }
  else if(this.vikingArmy.length <= 0){
    return 'Saxons have fought for their lives and survive another day...';
  } 
 
}
