// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else if (this.health <= 0) {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0) {
          return "A Saxon has received " + damage + " points of damage";
        } else if (this.health <= 0) {
          return "A Saxon has died in combat";
        }
      };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function (viking){
        this.vikingArmy.push(viking);
    }
    this.addSaxon = function (saxon){
      this.saxonArmy.push(saxon);
    }
    this.vikingAttack = function (){
     var randomSaxon =  this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
     var randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
     var devol =  randomSaxon.receiveDamage(randomViking.strength);
     this.saxonArmy = this.saxonArmy.filter( function (e){
       return e.health > 0;
     })
     return devol;
    }
    this.saxonAttack = function (){
      var randomSaxon =  this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      var randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      var devol1 =  randomViking.receiveDamage(randomSaxon.strength);
      this.vikingArmy = this.vikingArmy.filter( function (e){
        return e.health > 0;
      })
      return devol1;
     }
     this.showStatus= function(){
       if (this.saxonArmy == 0){
         return "Vikings have won the war of the century!";
       } else if (this.vikingArmy == 0){
       return "Saxons have fought for their lives and survive another day...";
     } if (this.saxonArmy > [] && this.vikingArmy > []){
       return "Vikings and Saxons are still in the thick of battle.";
    }
  }  
}

