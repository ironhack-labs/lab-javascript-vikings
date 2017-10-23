// Soldier
function Soldier (health, strength) {
this.health = health;
this.strength = strength;
}

Soldier.prototype.attack = function (){
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

// Viking

function Viking (name, health, strength) {
  Soldier.call (this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create (Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function (){
  return this.strength;
};


Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    return this.name + " has died in act of combat";
  }

};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};
// Saxon
Saxon.prototype = Object.create (Soldier.prototype);

function Saxon (health, strenght) {
  Soldier.call(this, health, strenght);
}

Saxon.prototype.attack = function (){
  return this.strength;
};

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0){
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

War.prototype.addViking= function (viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon= function (saxon){
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack= function (){
  Saxon.prototype.receiveDamage(Viking.prototype.strength);
  if(Saxon.prototype.health == 0){
    War.saxonArmy.remove(0);
  }

};

War.prototype.saxonAttack= function (){
};

War.prototype.showStatus= function (){
};
