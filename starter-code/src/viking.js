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

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype.receiveDamage = function (damage){
    this.health -= damage;
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    }
    else {
      return this.name + " has died in act of combat";
    }
};

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
};

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  }
  else{
    return "A Saxon has died in combat";
  }
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}


War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function(){
  var damageByVik = this.vikingArmy[0].attack();
  this.saxonArmy[0].receiveDamage(damageByVik);
  this.saxonArmy.shift();
  return;
};

War.prototype.saxonAttack = function (){
  var damageBySax = this.saxonArmy[0].attack();
  this.vikingArmy[0].receiveDamage(damageBySax);
  this.vikingArmy.shift();
  return;
};

War.prototype.showStatus = function(){
     var result;
     if (this.saxonArmy.length === 0){
       result = "Vikings have won the war of the century!";
     }else if (this.vikingArmy.length === 0) {
       result = "Saxons have fought for their lives and survive another day...";
     }else{
       result = "Vikings and Saxons are still in the thick of battle.";
     }
     return result;
 };
