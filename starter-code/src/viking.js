// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack =
function() {
  return this.strength;
}

Soldier.prototype.receiveDamage =
function(damage){
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype)

Viking.prototype.receiveDamage =
function(damage) {
  this.health -= damage;
  if (this.health <= 0){
    return `${this.name} has died in act of combat`;
  } else {
    return `${this.name} has received ${damage} points of damage`;
  }
}

Viking.prototype.battleCry =
function() {
  return "Odin Owns You All!"
};


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  name = "Saxon;"
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage =
function(damage) {
  this.health -= damage;
  if (this.health <= 0){
    return "A Saxon has died in combat";
  } else {
    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking =
function (viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon =
function (saxon){
  this.saxonArmy.push(saxon);
};

function random (array){
  randomNum = Math.floor(Math.random() * array.length);
  return randomNum
}

War.prototype.vikingAttack =
function (){
  var random1 = Math.floor(Math.random() * this.vikingArmy.length);
  var random2 = Math.floor(Math.random() * this.saxonArmy.length);

  var aViking = this.vikingArmy[random1]

  var aSaxon = this.saxonArmy[random2]

  var result = aSaxon.receiveDamage(aViking.strength);

  if (aSaxon.health <= 0){
    this.saxonArmy.splice(random2, 1);
  }
  return result;
};

War.prototype.saxonAttack =
function (){
  var randomViking = random(this.vikingArmy);

  var randomSaxon = random(this.saxonArmy);
  console.log(randomViking);
  var aViking = this.vikingArmy[randomViking];
  var aSaxon = this.saxonArmy[randomSaxon];

  var result = aViking.receiveDamage(aSaxon.strength);

  if (aViking.health <= 0){
    this.vikingArmy.splice(randomViking, 1);
  }
  return result
};

War.prototype.showStatus =
function (){
  if (this.saxonArmy.length == 0){
    return "Vikings have won the war of the century!";
  }
  if (this.vikingArmy.length == 0){
    return "Saxons have fought for their lives and survive another day...";
  }
  if (this.vikingArmy.length == 1 && this.saxonArmy.length == 1){
    return "Vikings and Saxons are still in the thick of battle.";
  }
};