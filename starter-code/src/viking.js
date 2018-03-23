// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  }

Soldier.prototype.attack = function() {
    return this.strength ;
};
Soldier.prototype.receiveDamage  = function (damage) {
    this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage  = function (damage) {
  this.health -=damage;

  if(this.health ==  0){
    return this.name + " has died in act of combat";   
  } else {
    return this.name + " has received " +damage+ " points of damage";
  }
};

Viking.prototype.battleCry  = function () {
    return "Odin Owns You All!"
};

// Saxon
function Saxon(health, strength) {
    this.health = health;
    this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage  = function (damage) {
  this.health -=damage;

  if(this.health ==  0){
    return "A Saxon has died in combat";
  } else {
    return "A Saxon has received " +damage+ " points of damage";
  }      
};


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {
  var s = Math.floor(Math.random() * this.vikingArmy.length);
  var v = Math.floor(Math.random() * this.saxonArmy.length);
  //console.log(s.health);
  //s.health = Saxon.prototype.receiveDamage(v.strength);
}

War.prototype.saxonAttack = function() {
  
}
War.prototype.showStatus = function() {
  
}