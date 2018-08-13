// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
Soldier.prototype.attack = function (){
  return this.strength
  };
Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};
};


// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
};
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = 

Viking.prototype.receiveDamage = function (damageArg){
  this.health -= damageArg;
  if (this.health >= 1) {
    return this.name + " has received " + damageArg + " points of damage";
  }
    else {
      return this.name + " has died in act of combat";
    }
  };

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!"
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damageArg){
  this.health -= damageArg;
  if (this.health >= 1) {
    return "A Saxon has received " + damageArg + " points of damage" ;
  }
    else {
      return "A Saxon has died in combat";
    }
};

// War
function War() {
  this.vikingArmy = [ ],
  this.saxonArmy = [ ]
  };

War.prototype.addViking = function (viking){
  vikingArmy.forEach(function (viking){
    this.vikingArmy.push(Viking (name, health, strength));
  });
};

  War.prototype.addSaxon = function (saxon){
    saxonArmy.forEach(function (saxon){
      saxonArmy.push("Saxon");
    });
  };

  War.prototype.vikingAttack = function (){};
  War.prototype.saxonAttack = function (){};
  War.prototype.showStatus = function (){};
