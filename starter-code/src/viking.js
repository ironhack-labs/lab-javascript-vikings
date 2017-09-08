// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength= strengthArg;
}
Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
};


// Viking
function Viking (name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health>0){
    return this.name + " has received "+ damage + " points of damage";
  }
    return this.name +" has died in act of combat";
};


Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

// Saxon
function Saxon (healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health>0){
    return "A Saxon has received "+ damage + " points of damage";
  }
    return "A Saxon has died in combat";
};

// War
function War () {
  this.vikingArmy=[];
  this.saxonArmy=[];
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(viking);
};

War.prototype.vikingAttack = function(){
  Saxon.prototype.receiveDamage(this.strength);
};

War.prototype.saxonAttack = function(){
  Viking.prototype.receiveDamage(this.strength);
};

War.prototype.showStatus = function(){
  if (this.saxonArmy.length <= 0 && this.vikingArmy.length > 0) {
    return "Vikings have won the war of the century!";
  } else if (this.saxonArmy.length > 0 && this.vikingArmy.length <=0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
