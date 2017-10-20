// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(dmg){
  this.health -= dmg;
};

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(dmg){
  this.health -= dmg;
  if(this.health > 0){
    return this.name + " has received " + dmg + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }

};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};


// Saxon
function Saxon (health,strenght) {
  Soldier.call(this,health,strenght);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(dmg){
  this.health -= dmg;
  if(this.health > 0){
    return "A Saxon has received " + dmg + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};
// War
function War () {}
