// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;

  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (damageArg) {
    this.health = this.health - damageArg;
  };

}

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function (damageArg) {
    this.health = this.health - damageArg;
    if(this.health > 0){
      return name + " has received " + damageArg + " points of damage";
    } else {
      return name + " has died in act of combat";
    }
  };

  this.battleCry = function (){
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function (damageArg) {
    this.health = this.health - damageArg;
    if(this.health > 0){
      return "A Saxon has received " + damageArg + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;




// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};


War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
} ;


War.prototype.vikingAttack = function () {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var theViking  = this.vikingArmy[vikingIndex];
  var theSaxon = this.saxonArmy[saxonIndex];

  var vresult = theSaxon.receiveDamage(theViking.attack());

  if(theSaxon.health <= 0) {
    this.saxonArmy.splice(saxonIndex, 1);
  }
  return vresult;
};

War.prototype.saxonAttack = function () {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var theViking  = this.vikingArmy[vikingIndex];
  var theSaxon = this.saxonArmy[saxonIndex];

  var sresult = theViking.receiveDamage(theSaxon.attack());

  if(theViking.health <= 0){
    this.vikingArmy.splice(vikingIndex, 1);
  }
  return sresult;
};

War.prototype.showStatus = function () {
var showStatus;
if(this.saxonArmy.length === 0){
  showStatus = "Vikings have won the war of the century!";
} else if (this.vikingArmy.length === 0) {
  showStatus = "Saxons have fought for their lives and survive another day...";
} else {
  showStatus = "Vikings and Saxons are still in the thick of battle.";
}

return showStatus;  
};
