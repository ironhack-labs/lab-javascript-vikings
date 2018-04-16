// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.damage = damage;
  this.health = this.health - this.damage;
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
  this.damage = damage;
  this.health = this.health - this.damage;
  if(this.health > 0){
    return this.name + " has received " + this.damage + " points of damage";
  }
  return this.name + " has died in act of combat";
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
  this.damage = damage;
  this.health = this.health - this.damage;
  if(this.health > 0){
    return "A Saxon has received " + this.damage + " points of damage";
  }
  return "A Saxon has died in combat";
}


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
  this.rdmAttack = Math.floor(Math.random()*this.vikingArmy.length);
  this.rdmDammage = Math.floor(Math.random()*this.saxonArmy.length);
  this.vikingRdm = this.vikingArmy[this.rdmAttack];
  this.saxonRdm = this.saxonArmy[this.rdmDammage];
  this.saxonHurt = this.saxonRdm.receiveDamage(this.vikingRdm.strength);

  if(this.saxonRdm.health < 1){
    this.saxonArmy.splice(this.rdmDammage, 1);
  }
  return this.saxonArmy, this.saxonHurt;
}

War.prototype.saxonAttack = function(){
  this.rdmAttack = Math.floor(Math.random()*this.saxonArmy.length);
  this.rdmDammage = Math.floor(Math.random()*this.vikingArmy.length);
  this.saxonRdm = this.saxonArmy[this.rdmAttack];
  this.vikingRdm = this.vikingArmy[this.rdmDammage];
  this.vikingHurt = this.vikingRdm.receiveDamage(this.saxonRdm.strength);

  if(this.vikingRdm.health < 1){
    this.vikingArmy.splice(this.rdmDammage, 1);
  }
  return this.vikingArmy, this.vikingHurt;
}

War.prototype.showStatus = function() {
  if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}