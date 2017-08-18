// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
};

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  }else{
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

// Saxon
function Saxon (health,strength) {
  Soldier.call(this,health,strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  var result = "A Saxon has died in combat";
  if (this.health > 0){
    result = "A Saxon has received "+damage+" points of damage";
  }
  return result;
};


// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function(){
    var rand1 = parseInt(Math.random()*((this.saxonArmy).length));
    var rand2 = parseInt(Math.random()*((this.vikingArmy).length));
    this.saxonArmy[rand1].health -= this.vikingArmy[rand2].strength;

    var result = this.saxonArmy[rand1].name + " has received " + this.vikingArmy[rand2].strength + " points of damage";
    if(this.saxonArmy[rand1].health<=0){
      this.saxonArmy.splice(rand1,1);
      result = "A Saxon has died in combat";
      return result;
    }
};

War.prototype.saxonAttack = function(){
    var rand1 = parseInt(Math.random()*((this.saxonArmy).length));
    var rand2 = parseInt(Math.random()*((this.vikingArmy).length));
    this.vikingArmy[rand1].health -= this.saxonArmy[rand2].strength;

    var result = this.vikingArmy[rand1].name + " has received " + this.saxonArmy[rand2].strength + " points of damage";
    if(this.vikingArmy[rand1].health<=0){
      this.vikingArmy.splice(rand1, 1);
    }
    return result;
};

War.prototype.showStatus = function(){
    var result;
    if (this.saxonArmy.length === 0){
      result = "Vikings have won the war of the century!";
    }else if (this.vikingArmy.length === 0) {
      result= "Saxons have fought for their lives and survive another day...";
    }else{
      result= "Vikings and Saxons are still in the thick of battle.";
    }
    return result;
};
