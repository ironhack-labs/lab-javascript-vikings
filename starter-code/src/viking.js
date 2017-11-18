// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  return;
};

function Viking(name, health, strength){
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);


Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return this.name +" has received " + damage + " points of damage";
  }else if(this.health <= 0){
    return this.name+ " has died in act of combat";
  }
};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  } else if(this.health <= 0){
    return "A Saxon has died in combat";
  }
};


// War
function War(){
  this.vikingArmy = [];
  this.saxonArmy = [];
//no entiendo porque tengo que igualar a cero la longitud
  this.length = 0;
}

War.prototype.addViking = function(viking){
  vikingArmy.push(viking);
  return;
};
War.prototype.addSaxon = function(saxon){
  saxonArmy.push(saxon);
  return;
};

War.protorype.vikingAttack = function(){
  var attackResult = this.saxonArmy[0].receiveDamage(this.vikingArmy.strength[0]);
  if(this.saxonArmy[0] < 0){
    this.saxonArmy.splice(0,1);
  }
  return attackResult;
};

War.protorype.saxonAttack = function(){
  var attackResult = this.vikingArmy[0].receiveDamage(this.saxonArmy.strength[0]);
  if(this.vikingArmy[0] < 0){
    this.vikingArmy.splice(0,1);
  }
  return attackResult;
};
