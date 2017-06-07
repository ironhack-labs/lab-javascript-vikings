// Soldier
function Soldier (healthParam, strengthParam) {
this.health = healthParam;
this.strength = strengthParam;
}

Soldier.prototype.attack = function (){
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damageParam){
  this.health = this.health - damageParam;
  };

Soldier.prototype.battleCry = function() {
    return "Odin Owns You All!";
  };

// Viking
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
} else if (this.health <= 0) {
  return this.name + " has died in act of combat";
  }
};




// Saxon
function Saxon () {
}

// War
function War () {}
