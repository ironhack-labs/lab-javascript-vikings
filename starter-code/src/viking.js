// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;

}
Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
};

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
  if (this.health>0) {
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    return this.name + " has died in act of combat";
  }
};
  Viking.prototype.battleCry = function (){
    return "Odin Owns You All!";
  };
// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
  if (this.health>0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  else {
    return "A Saxon has died in combat";
  }
};


// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking){
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function (){
  var saxon_object = randomSelect(this.saxonArmy);
  var viking_object = randomSelect(this.vikingArmy);
  var saxon = saxon_object.item;
  var viking = viking_object.item;
  var hit = saxon.receiveDamage(viking.strength);

  if (saxon.health <= 0) {
    this.saxonArmy.splice(saxon_object.index, 1);
  }
  return hit;
};

War.prototype.saxonAttack = function(){
  var saxon_object = randomSelect(this.saxonArmy);
  var viking_object = randomSelect(this.vikingArmy);
  var saxon = saxon_object.item;
  var viking = viking_object.item;
  var hit = viking.receiveDamage(saxon.strength);

  if (viking.health <= 0) {
    this.vikingArmy.splice(viking_object.index,1);
  }
  return hit;
};

function randomSelect (array) {
  var index = Math.floor(Math.random() * array.length);

  return {
    item: array[index],
    index: index
  };
}

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  }
  else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
