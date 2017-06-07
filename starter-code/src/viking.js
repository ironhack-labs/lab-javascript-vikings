// Soldier
function Soldier (healthParam, strengthParam) {
  this.health = healthParam;
  this.strength = strengthParam;
}

Soldier.prototype.attack = function(){
    return this.strength;

};

Soldier.prototype.receiveDamage = function(damageParam){
    this.health = this.health - damageParam;

};

Soldier.prototype.battleCry = function(){
  return 'Odin Owns You All!';

};

function Viking (nameParam, healthParam, strengthParam) {
  Soldier.call(this, healthParam, strengthParam);
  this.name = nameParam;
  this.health = healthParam;
  this.strength = strengthParam;
}
Viking.prototype = Object.create(Soldier.prototype);

 Viking.prototype.receiveDamage = function(damageParam) {
   this.health = this.health - damageParam;
if (this.health > 0) {
    return this.name + " has received " + damageParam + " points of damage";
} else {
  this.health = damageParam;
  return this.name + " has died in act of combat";
  }
};


// Saxon
function Saxon (healthParam, strengthParam) {
  Soldier.call(this, healthParam, strengthParam);
  this.name = 'Saxon';
  this.health = healthParam;
  this.strength = strengthParam;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damageParam) {
  this.health = this.health - damageParam;
if (this.health > 0) {
   return 'A ' + this.name + " has received " + damageParam + " points of damage";
} else {
 this.health = damageParam;
 return 'A ' +  this.name + " has died in combat";
 }
};


// War
function War () {}
