// Soldier
function Soldier(healthArg, strengthArg) {
  
  this.health = healthArg;
  this.strength = strengthArg;
};

Soldier.prototype.receiveDamage = function(theDamage){
  this.health -= theDamage;
}

Soldier.prototype.attack = function(){
  return this.strength;
};


// Viking
function Viking(vikingName, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = vikingName;
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(theDamage){
  this.health -= theDamage;
  
  if (this.health > 0) {
    return this.name + " has received " + theDamage + " points of damage"
  } else {
    return this.name + " has died in act of combat"
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!"
}


// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this,healthArg,strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(theDamage){
  this.health -= theDamage;
  
  if (this.health > 0) {
    return "A Saxon has received " + theDamage + " points of damage"
  } else {
    return "A Saxon has died in combat"
  }
}



// War
function War() {

  this.vikingArmy = [];
  this.saxonArmy = [];

  // var viking = new Viking("thor",100,100);
  // var saxon = new Saxon(100,100);
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function(){
  
  var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
    
  if(this.saxonArmy[0].health<=0){
    this.saxonArmy.splice(0,1);
  }
  return result;
}

War.prototype.saxonAttack = function(){
  
  var result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
    
  if(this.vikingArmy[0].health<=0){
    this.vikingArmy.splice(0,1);
  }
  return result;
}

War.prototype.showStatus = function(){

if (this.saxonArmy.length === 0){
  return "Vikings have won the war of the century!";
} else if (this.vikingArmy.length === 0){
  return "Saxons have fought for their lives and survive another day...";
} else {
  return "Vikings and Saxons are still in the thick of battle.";
}

}


var newWar = new War();
newWar.addSaxon();
newWar.addViking()
newWar.vikingAttack()
newWar.saxonAttack()
newWar.showStatus()