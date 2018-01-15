'use strict';
// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function (){
    return this.strength;
  };
  this.receiveDamage = function (damage){
    this.health -= damage;
  };

}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    }
    else{
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function(){
    return "Odin Owns You All!";
  };
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.contructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    }
    else{
      return "A Saxon has died in combat";
    }
  };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.contructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  var vikingSoldier = new Viking();
  this.addViking = function(vikingSoldier){
    this.vikingArmy.push(vikingSoldier);
  };
  var saxonSoldier = new Saxon();
  this.addSaxon = function(saxonSoldier){
    this.saxonArmy.push(saxonSoldier);
  };
  this.vikingAttack = function(){
    var attackedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var attackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    attackedSaxon.receiveDamage(attackingViking.strength);
  };
}