// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  /*this.attack = function(){
    return this.strength;
  }
  this.receiveDamage = function (damage){
    this.health -= damage;
  }*/
}

Soldier.prototype.attack = function(){
  return this.strength;
};
Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this,health, strength);
  this.name = name;
  this.receiveDamage = function(damage){
    this.health -= damage;
    if( this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  this.battleCry = function(){
    return "Odin Owns You All!"
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking

// Saxon
function Saxon(health, strength) {
  Soldier.call(this,health, strength);
  this.receiveDamage = function (damage){
    this.health -= damage;
    if(this.health>0){
      return "A Saxon has received " + damage + " points of damage"
    } else{
      return "A Saxon has died in combat";
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon

// War


function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(viking){
    this.vikingArmy.push(viking);
  }
  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
  }
  this.vikingAttack = function(){
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var randomSaxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
    var randomSaxon = this.saxonArmy[randomSaxonPosition];
    var saxonStatus = randomSaxon.receiveDamage(randomViking.strength);
    if (saxonStatus === "A Saxon has died in combat"){
      this.saxonArmy.splice(randomSaxonPosition,1);
    }
    return saxonStatus
  }
  this.saxonAttack = function(){
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var randomVikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
    var randomViking = this.vikingArmy[randomVikingPosition];
    var vikingStatus = randomViking.receiveDamage(randomSaxon.strength);
    if (vikingStatus === randomViking.name + " has died in act of combat"){
      this.vikingArmy.splice(randomVikingPosition,1);
    }
    return vikingStatus
  }
  this.showStatus = function(){
    if(this.saxonArmy.length <= 0){
      return "Vikings have won the war of the century!"
    } else if(this.vikingArmy.length <= 0){
      return "Saxons have fought for their lives and survive another day..."
    } else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
