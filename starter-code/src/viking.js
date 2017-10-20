// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function (){
    return this.strength;
  };
  this.receiveDamage = function(damage){
    this.health -= damage;
  };
}
// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name,health,strength) {
  Soldier.call(this,health,strength);
  this.name = name;
  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health>0){
      return this.name + " has received " + damage + " points of damage";
    }else{
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function(){
    return "Odin Owns You All!";
  };
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health,strength) {
  this.health = health;
  this.strength = strength;
  Soldier.call(this,health,strength);
  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health>0){
      return "A Saxon has received " + damage + " points of damage";
    }else{
      return "A Saxon has died in combat";
    }
  };
}
// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(vikingObject){
    this.vikingArmy.push(vikingObject);
  };

  this.addSaxon = function(saxonObject) {
    this.saxonArmy.push(saxonObject);
  };

  this.vikingAttack = function() {
    var randomViking= Math.floor(Math.random()*this.vikingArmy.length);
    var randomSaxon= Math.floor(Math.random()*this.saxonArmy.length);
    var algo = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
    if (this.saxonArmy[randomSaxon].health <=0){
      this.saxonArmy.splice(randomSaxon,1);
    }
    return algo;
  };

  this.saxonAttack = function() {
    var randomViking= Math.floor(Math.random()*this.vikingArmy.length);
    var randomSaxon= Math.floor(Math.random()*this.saxonArmy.length);
    var algo = this.vikingArmy[randomSaxon].receiveDamage(this.saxonArmy[randomViking].attack());
    if (this.vikingArmy[randomSaxon].health <=0){
      this.vikingArmy.splice(randomSaxon,1);
    }
    return algo;
  };

  this.showStatus = function() {
    if (this.vikingArmy.length == 0){
      return 'Saxons have fought for their lives and survive another day...';
    }else if(this.saxonArmy.length == 0){
      return 'Vikings have won the war of the century!';
    }else{
      return 'Vikings and Saxons are still in the thick of battle.';
    }

  };

}
