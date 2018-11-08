// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  }
  this.receiveDamage = function (damage) {
    this.health = health - damage;
  }
  
}


// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call (this, health, strength);
  this.receiveDamage = function (damage) {
    this.health = health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    }
    else {
      return this.name + " has died in act of combat";
    }
  }
  this.battleCry = function () {
    return "Odin Owns You All!"
  }    
  
}

Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon(health, strength) {
  Soldier.call (this, health, strength);
  this.attack = function () {
    return this.strength;
  }
  this.receiveDamage = function (damage) {
    this.health = health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    }
    else {
      return "A Saxon has died in combat";
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
var viking = new Viking('Harald',300,150);

var saxon = new Saxon(200,150);

// War
function War() {  
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function (viking) {
    this.vikingArmy.push(viking);
  }
  this.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
  }
  this.vikingAttack = function () {
    
    return this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    this.saxonArmy = saxonArmy.filter(function(soldier) {
      return soldier.health > 0;
    });    
  }

  this.saxonAttack = function () {
    return this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    this.vikingArmy = vikingArmy.filter(function(soldier) {
      return soldier.health > 0;
    });
  }

  this.showStatus = function () {
   if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
     return "Vikings have won the war of the century!"
   } 
   else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
     return "Saxons have fought for their lives and survive another day..."
   }
   else {
     return "Vikings and Saxons are still in the thick of battle."
   }
  }
}
