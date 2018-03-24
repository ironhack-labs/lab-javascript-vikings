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
Viking.prototype.constructie = Viking;

Viking.prototype.receiveDamage  = function (damage) {
  this.health -=damage;

  if(this.health <=  0){
    return this.name + " has died in act of combat";   
  } else {
    return this.name + " has received " +damage+ " points of damage";
  }
};

Viking.prototype.battleCry  = function () {
    return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
    this.health = health;
    this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage  = function (damage) {
  this.health -=damage;

  if(this.health <=  0){
    return "A Saxon has died in combat";
      } else {
    return "A Saxon has received " +damage+ " points of damage";
  }      
};


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
};

War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {

    var vikingNum = Math.floor(Math.random() * this.vikingArmy.length );
    var saxonNum = Math.floor(Math.random() * this.saxonArmy.length );

    var viking = this.vikingArmy[vikingNum];
    var saxon = this.saxonArmy[saxonNum];

    var resultado = saxon.receiveDamage(viking.attack());

    if(saxon.health <= 0) {
      this.saxonArmy.splice(saxonNum, 1);
    }
    return resultado;

};
    


War.prototype.saxonAttack = function() {
  var vikingNum = Math.floor(Math.random() * this.vikingArmy.length );
  var saxonNum = Math.floor(Math.random() * this.saxonArmy.length );

  var viking = this.vikingArmy[vikingNum];
  var saxon = this.saxonArmy[saxonNum];
  
  var resultado = viking.receiveDamage(saxon.attack());

  if(viking.health <=0) {
    this.vikingArmy.splice(vikingNum, 1);
  }
  return resultado;
};

War.prototype.showStatus = function() {
  if(this.saxonArmy.length == 0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};