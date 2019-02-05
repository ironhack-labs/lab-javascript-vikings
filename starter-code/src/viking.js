// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  }
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    };
  };
  this.battleCry = function(){
    return "Odin Owns You All!";
  }
};

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    };
  };
};

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.addViking = function(nameArg, healthArg, strengthArg){
    this.vikingArmy.push(new Viking(nameArg, healthArg, strengthArg));
  }
};
