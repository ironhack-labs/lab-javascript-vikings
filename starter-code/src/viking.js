

// --------------------Soldier--------------------------

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  this.length = 0;
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
}




// --------------Viking----------------------------------
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);


Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return this.name + " has received " + damage +  " points of damage"; 
  } else {
    return this.name + " has died in act of combat"; 
  }
};

Viking.prototype.battleCry = function (){
  return 'Odin Owns You All!';
};



// -----------------------------Saxon---------------------------

function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function (){
  return this.strength;
};


Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return "A Saxon has received " + damage +  " points of damage"; 
  } else {
    return "A Saxon has died in combat"; 
  }
};


//-------------------------------------------- WAR -----------------------------------------------

function War (){
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon){
  this.saxonArmy.push(saxon);
};


// VIKING ATTACK

War.prototype.vikingAttack = function (){
  var saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  var attackResult = saxonSoldier.receiveDamage(vikingSoldier.strength);

  if (saxonSoldier.health <= 0){
    this.saxonArmy.splice(saxonSoldier, 1);
  }
  return attackResult;
};

// SAXON ATTACK
War.prototype.saxonAttack = function(){
  var saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  var attackResult = vikingSoldier.receiveDamage(saxonSoldier.strength);

  if (vikingSoldier.health <= 0){
    this.vikingArmy.splice(vikingSoldier,1);
  } 
  return attackResult;
};


//WAR OUTCOME

War.prototype.showStatus =  function (){
  if (this.saxonArmy.length <= 0){
    return 'Vikings have won the war of the century!';

  } else if (this.vikingArmy.length <=0){
    return 'Saxons have fought for their lives and survive another day...';

  } else {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
};
