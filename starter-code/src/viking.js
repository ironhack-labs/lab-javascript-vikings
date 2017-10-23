// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};


// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype.constructor = Viking;
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return (this.name + " has received " + damage + " points of damage");
  } else {
    return (this.name + " has died in act of combat");
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype.constructor = Saxon;
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function() {
  return this.strength;
};


Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return ("A Saxon has received " + damage + " points of damage");
  } else {
    return ("A Saxon has died in combat");
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
  var vRandom = Math.floor(Math.random() * this.vikingArmy.length);
  var sRandom = Math.floor(Math.random() * this.saxonArmy.length);
  //console.log(this.vikingArmy);
  //console.log(this.saxonArmy);
  var oneViking = this.vikingArmy[vRandom];
  var oneSaxon = this.saxonArmy[sRandom];
  //console.log("HOLA", oneViking, oneSaxon);
  // Console Log for Debugging
  var Result = this.saxonArmy[sRandom].receiveDamage(this.vikingArmy[vRandom].strength);
  if (this.saxonArmy[sRandom].health <= 0) {
    this.saxonArmy.splice(sRandom, 1);
    return "A Saxon has died in combat";
  }
else{
return Result;
}
};
//Nos de error y no conseguimos averiguar por que.


War.prototype.saxonAttack = function() {
  var vRandom = Math.floor(Math.random() * this.vikingArmy.length);
  var sRandom = Math.floor(Math.random() * this.saxonArmy.length);
  var Result = this.vikingArmy[sRandom].receiveDamage(this.saxonArmy[vRandom].strength);
  if (this.vikingArmy[sRandom].health <= 0) {
    this.vikingArmy.splice(sRandom, 1);
  }
   return Result;

};
War.prototype.showStatus =  function (){
  if(this.saxonArmy.length==0){
    return "Vikings have won the war of the century!";
  }
  else if (his.vikingArmy.length==0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  else{
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
