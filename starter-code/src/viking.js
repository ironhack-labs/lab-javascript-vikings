// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(receiveDamage) {
  this.health -= receiveDamage;
} 

// Viking
function Viking(name,health,strength) {
  this.name = name;
  Soldier.call(this,health,strength);
}

Viking.prototype = Object.create( Soldier.prototype);
Viking.prototype.constructor = Viking; 

Viking.prototype.receiveDamage = function(Damage) {
  this.health -= Damage;
  if(this.health > 0) {
    return `${this.name} has received ${Damage} points of damage`;
  } else{
    return `${this.name} has died in act of combat`;
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!"
}

// Saxon
function Saxon(health,strength) {
  Soldier.call(this,health,strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(Damage) {
  this.health -= Damage;
  if(this.health > 0) {
    return `A Saxon has received ${Damage} points of damage`;
  } else{
    return `A Saxon has died in combat`;
  }
}



// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack= function() {
  var viking = Math.floor(Math.random() * this.vikingArmy.length);
  var saxon = Math.floor(Math.random() * this.saxonArmy.length);
  var result = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].strength);
  if(this.saxonArmy[saxon].health < 0) {
    this.saxonArmy.splice(saxon,1);
  }
  return result;
};

War.prototype.saxonAttack= function() {
  var viking = Math.floor(Math.random() * this.vikingArmy.length);
  var saxon = Math.floor(Math.random() * this.saxonArmy.length);
  var result = this.vikingArmy[viking].receiveDamage(this.saxonArmy[saxon].strength);
  if(this.vikingArmy[viking].health < 0) {
    this.vikingArmy.splice(viking,1);
  }
  return result;
};


War.prototype.showStatus() = function() {
  
};