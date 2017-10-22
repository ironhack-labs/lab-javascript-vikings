// Soldier
function Soldier (health, strength) {
 this.health = health;
 this.strength = strength;
 }

Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = "Harald";

}
Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health>=1){
    return this.name + " has received " + damage + " points of damage";
  }else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function (battle) {
  return "Odin Owns You All"
}


// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if(this.health >= 1) {
    return  "A Saxon has received " + damage + " points of damage";
  } else {
     return  "A Saxon has died in combat";
   }
 }

// War

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
    var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 0)) + 0;
    var randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 0)) + 0;
    this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(0, 1);
      return "A Saxon has died in combat";
    }
  return "A Saxon has received " + this.vikingArmy[randomViking].strength + " points of damage";
  }


  War.prototype.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 0)) + 0;
    var randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 0)) + 0;
    this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(0, 1);
      return "A Viking has died in combat";
    }
    return this.vikingArmy[randomViking].name + " has received " + this.saxonArmy[randomSaxon].strength + " points of damage";
  }

  War.prototype.showStatus = function() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
