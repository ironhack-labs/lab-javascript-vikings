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
 Viking.prototype = Object.create(Soldier.prototype);

  function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name = name;
    this.receiveDamage = function(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
      }
      else if (this.health <= 0) {
        return this.name + " has died in act of combat";
      }
    };
    this.battleCry = function(){
      return "Odin Owns You All!";
    };
  }
  
  // Saxon
  
  Saxon.prototype = Object.create(Soldier.prototype);
  
  function Saxon(health, strength) {
    Soldier.call(this,health, strength);
    this.receiveDamage = function(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
      }
      else if (this.health <= 0) {
        return "A Saxon has died in combat";
      };
  }
  }

  //Bonus War
  function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) { 
this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon) {
this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function() {
var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
var randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));
var saxonDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);  
if (this.saxonArmy[randomSaxon].health <= 0) {
    this.saxonArmy.splice(randomSaxon, 1);
}
return saxonDamage;
}; 

War.prototype.saxonAttack = function() {
var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
var randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));
var vikingDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);  
if (this.vikingArmy[randomViking].health <= 0) {
    this.vikingArmy.splice(randomViking, 1);
}
return vikingDamage;
};

War.prototype.showStatus = function() { 
if (this.saxonArmy.length == 0 && this.vikingArmy.length == 0) {
    return "Both died";
}
if (this.saxonArmy.length == 0) {
    return "Vikings have won the war of the century!";
}
if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
}
return "Vikings and Saxons are still in the thick of battle.";
}
