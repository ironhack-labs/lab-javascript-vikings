// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){

 this.health -= damage;
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damage){

  this.health -= damage;

  if(this.health <= 0){
      return this.name + " has died in act of combat";
  } else { return this.name + " has received "+ damage +" points of damage"}
}

Viking.prototype.battleCry = function(){
  return 'Odin Owns You All!'
}

function Viking(name, health, strength){
  Soldier.call(this, health, strength);
  this.name = name;
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function(damage){

  this.health -= damage;

  if(this.health <= 0){
      return "A Saxon has died in combat";
  } else { return  "A Saxon has received "+ damage +" points of damage"}
}

function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
}

// BONUS: WAR!!
function War() {
  this.vikingArmy= [];
  this.saxonArmy = [];
}

War.prototype.addViking= function (viking){
  this.vikingArmy.push(viking)
};

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon)
}


War.prototype.vikingAttack= function(){

  var randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];//random index of saxonArmy
  var randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];//random index of vikingArmy

  var vikingAttackReturn = randomSaxon.receiveDamage(randomViking.strength);

  this.saxonArmy = this.saxonArmy.filter(function(saxon){
          return saxon.health > 0;
  });
  return vikingAttackReturn;
  }

  War.prototype.saxonAttack = function (){

      randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      
      var saxonAttackReturn = randomViking.receiveDamage(randomSaxon.strength);
      
      this.vikingArmy = this.vikingArmy.filter(function(viking){
          return viking.health > 0;
      });
      return saxonAttackReturn;
  }
  
  War.prototype.showStatus = function () {

      if(this.saxonArmy.length === 0 ){
           return "Vikings have won the war of the century!";
          } else if  (this.vikingArmy.length === 0){
              return "Saxons have fought for their lives and survive another day...";
          } else {
               return "Vikings and Saxons are still in the thick of battle.";
      }
  }