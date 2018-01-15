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
    var saxonStatus = attackedSaxon.receiveDamage(attackingViking.strength);
    if(attackedSaxon.health <= 0){
      var index = this.saxonArmy.indexOf(attackedSaxon);
      this.saxonArmy.splice(index, 1);
    }
    return saxonStatus;
  };
  this.saxonAttack = function(){
    var attackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var attackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var vikingStatus = attackedViking.receiveDamage(attackingSaxon.strength);
    if(attackedViking.health <= 0){
      var index = this.vikingArmy.indexOf(attackedViking);
      this.vikingArmy.splice(index, 1);
    }
    return vikingStatus;
  };
  this.showStatus = function(){
    if(this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    }
    else if(this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}