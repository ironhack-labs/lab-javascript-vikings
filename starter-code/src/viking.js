// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function(){
  return this.strength;
};
//the damage won't be written out, it's a secret so I don't use return
Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
};

var soldier1 = new Soldier(132, 50);

console.log(soldier1);



// Viking
function Viking (nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

var viking1 = new Viking ("Vidar", 200, 70);
console.log(viking1);

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health <= 0){
    return this.name + " has died in act of combat";
  }
  else {
    return this.name + " has recevied " + damage + " points of damage.";
  }
};
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

// Saxon
function Saxon (healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

var saxon1 = new Saxon(100, 40);
console.log(saxon1);

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health <= 0){
    return "A Saxon has died in combat";
  }
  else {
    return "A Saxon has recevied " + damage + " points of damage.";
  }
};



// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}



War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
};

//this is to randomly pick the Viking being attcked and the Saxon attacking
War.prototype.saxonAttack = function () {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var theViking = this.vikingArmy[vikingIndex];
  var theSaxon = this.saxonArmy[saxonIndex];

  var result = theViking.receiveDamage(theSaxon.attack());

  //this is to take away the dead viking from the array
  if (theViking.health <= 0) {
    this.vikingArmy.splice(vikingIndex, 1);
  }

  return result;
};

//this is to randomly pick the Saxon being attcked and the Viking attacking
War.prototype.vikingAttack = function () {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var theViking = this.vikingArmy[vikingIndex];
  var theSaxon = this.saxonArmy[saxonIndex];

  var result = theSaxon.receiveDamage(theViking.attack());

  //this is to take away the dead saxon from the array
  if (theSaxon.health <= 0) {
    this.saxonArmy.splice(saxonIndex, 1);
  }

  return result;
};

//this is to check if the war is over
War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!';
  }
  else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
