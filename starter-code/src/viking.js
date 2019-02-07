// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
};

Soldier.prototype.attack = function () { //should return the strength property of the Soldier
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage; // removes the received damage from the health property
}
// call Soldier constructor
//var soldier = new Soldier(10, 20) 


////////////////////////
// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype); // viking gets 'a copy'/inherit of Soldier proto, specially methods

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage"
  } else {
    return this.name + "has died in act of combat ";
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!"
}


//var vikingFighter = new Viking("Fighter", 10, 50);
//console.log(vikingFighter.receiveDamage(4));


//////////////
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage"
  } else {
    return "A Saxon has died in combat"
  }
};
var saxonFighter = new Saxon(12, 12);
console.log(saxonFighter)
console.log(saxonFighter.receiveDamage(10))

//////////// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (vikingUnit) { //should add the received Viking to the army
  this.vikingArmy.push(vikingUnit); //Adds 1 Viking to the vikingArmy. 
};
War.prototype.addSaxon = function (saxonUnit) {
  this.saxonArmy.push(saxonUnit);
};
War.prototype.vikingAttack = function () {
  var randVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
  var randViking = this.vikingArmy[randVikingIndex] //random Viking fighter
  var randSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
  var randSaxon = this.saxonArmy[randSaxonIndex];

  var randSaxonHealth = randSaxon.health - randViking.strength;

  var vikingAttackingSaxon = randSaxon.receiveDamage(randViking.strength); // Attacking random Saxon
  if (randSaxon.health <= 0) {
    this.saxonArmy.splice(randSaxonIndex, 1); // Find the index of "randSaxon", then remove element from that position                                                            
  }
  return vikingAttackingSaxon;
}

/////


War.prototype.saxonAttack = function () {
  var randVikingIndex = Math.random(()*this.vikingArmy.length);
  var randViking = this.vikingArmy[randVikingIndex];
  var randSaxonIndex = Math.random(this.saxonArmy.length);
  var randSaxon = this.saxonArmy[randSaxonIndex];

  var randSaxonHealth = randSaxon.health - randViking.strength;

  var saxonAttackingViking = randViking.receiveDamage(randSaxon.strength);
  if (randViking.health <= 0) {
    this.vikingArmy.splice(randVikingIndex, 1);
  }
  return saxonAttackingViking;
}

War.prototype.showStatus = function () {}
  var v1 = new Viking("Viking1", 20, 34);
  var v2 = new Viking("Viking2", 44, 12);
  var v3 = new Viking("Viking3", 44, 12)
  var s1 = new Saxon(44, 12);
  var s2 = new Saxon(11, 40);
  
  new War.addViking(v1);
  new War.addViking(v2);
  new War.addViking(v3);
  new War.addViking(s1);
  new War.addViking(s2);

  function warStarts(){
  if (this.saxonArmy.length == 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  if (this.saxonArmy.length >= 1 && this.vikingArmy.length) {
    return "Vikings and Saxons are still in the thick of battle."
  }
};
/*
3. Get random elements from array

function generateRandomNumber(min_value , max_value) {
    
   let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
}
function randomElementInArray(array) {
    return array[generateRandomNumber(0,array.length)];
}*/