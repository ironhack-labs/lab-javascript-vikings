// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
return this.strength;
}

Soldier.prototype.receiveDamage = function(amountOfDamage){
this.health -= amountOfDamage;
}

//Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);//pass viking into this soldier prototype, and
  //bring in the health and strength properties from soldier here.
  this.name = name;
  
}

//resetting the prototype to ensure inheritance from Soldier

Viking.prototype =Object.create(Soldier.prototype);

Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {

  this.health -= damage;
  if (this.health > 0) {return `${this.name} has received ${damage} points of damage`
} else {return `${this.name} has died in act of combat`}
}

Viking.prototype.battleCry = function() {
return "Odin Owns You All!"
}



// Saxon

//Ask the TA's: Instead of copying data, should I do a function declaration
//to create a class from a class?

function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {return `A Saxon has received ${damage} points of damage`
} else {return `A Saxon has died in combat`}
}



// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (vikingToAdd) {
  this.vikingArmy.push(vikingToAdd); //Ask TA: HOW DOES THIS CREATE a viking. I know it pushes.
}

War.prototype.addSaxon = function(oneSaxon) {
  this.saxonArmy.push(oneSaxon);
}

War.prototype.vikingAttack = function(){
  var vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
  var saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
  var randViking = this.vikingArmy[vikIndex];
  var randSaxon = this.saxonArmy[saxIndex];


  var result = randSaxon.receiveDamage(randViking.attack())
  if(randSaxon.health <=0) {
    this.saxonArmy.splice(saxIndex, 1);
  }

  return result;
}



War.prototype.saxonAttack = function(){
  var vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
  var saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
  var randViking = this.vikingArmy[vikIndex];
  var randSaxon = this.saxonArmy[saxIndex];


  var result = randViking.receiveDamage(randSaxon.attack())
  if(randViking.health <=0) {
    this.vikingArmy.splice(vikIndex, 1);
  }

  return result;
}


War.prototype.showStatus = function() {
  if(this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day..."
  }
  if(this.saxonArmy.length ===0){
    return "Vikings have won the war of the century!"
  }

  return "Vikings and Saxons are still in the thick of battle.";
}




//property means add property so war will be added to the viking class.