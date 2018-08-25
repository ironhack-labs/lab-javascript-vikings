// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
};

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
  return;
};

// Viking
function Viking(name, health,strength) {
  this.name = name;
  Soldier.call(this, health,strength);
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health>0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  };
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this,health,strength);
  };

Saxon.prototype= Object.create(Soldier.prototype);
Saxon.prototype.constructor= Saxon;

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health>0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  };
};

// War
function War() {
  this.vikingArmy=[];
  this.saxonArmy=[];
}

War.prototype.addViking = function(vikingObj){
  this.vikingArmy.push(vikingObj);
};

War.prototype.addSaxon = function(saxonObj){
  this.saxonArmy.push(saxonObj);
};

War.prototype.vikingAttack= function(){
  attacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  receiver = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var msg = receiver.receiveDamage(attacker.strength);
  if (msg.includes("died")) {
    this.saxonArmy.splice(this.saxonArmy.indexOf(receiver),1);
  };
  return msg;
};

War.prototype.saxonAttack = function(){
  attacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  receiver = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  var msg = receiver.receiveDamage(attacker.strength);
  if (msg.includes("died")) {
    this.vikingArmy.splice(this.vikingArmy.indexOf(receiver),1);
  };
  return msg;  
  };

War.prototype.showStatus = function(){
  if (this.saxonArmy.length==0){
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length==0) {
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
};





