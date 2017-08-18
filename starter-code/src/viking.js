// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function (){
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
};

// Viking
function Viking (name, health, strength) {
  Soldier.call (this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
};

Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return (this.name + " has received " + damage + " points of damage");
  }
  else {
    return (this.name + " has died in act of combat");
  }
};

// Saxon
function Saxon (health, strength) {
  Viking.call (this, "", health, strength);
  delete this.name;
}

Saxon.prototype = Object.create(Viking.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return ("A Saxon has received " + damage + " points of damage");
  }
  else {
    return ("A Saxon has died in combat");
  }
};


// War
function War () {
  vikingArmy = [];
  saxonArmy = [];
}

War.prototype.addViking = function (viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon= function (){
};

War.prototype.vikingAttack = function (){
};

War.prototype.saxonAttack = function (){
};

War.prototype.showStatus = function (){
};
