// Soldier
function Soldier(healthArg, strengthArg){
  this.health = healthArg;
  this.strength = strengthArg;

  this.attack = function(){
    return this.strength;
  };

  this.receiveDamage = function(theDamage){
    this.health -= theDamage;
  };
}

// Viking
function Viking(name, health, strength){
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function(theDamage){
    this.health -= theDamage;
    if (this.health > 0){
      return this.name + " has received " + theDamage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };

  this.battleCry = function(){
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength){
  Soldier.call(this, health, strength);

  this.receiveDamage = function(theDamage){
    this.health -= theDamage;
    if (this.health > 0){
      return "A Saxon has received " + theDamage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War(){
  this.vikingArmy = [];
  this.saxonArmy = [];

  War.prototype.addViking=function(aViking){
    this.vikingArmy.push(aViking);
  };

  War.prototype.addSaxon=function(aSaxon){
    this.saxonArmy.push(aSaxon);
  };

  War.prototype.vikingAttack=function(){
    var aRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var aRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var combatResult = this.saxonArmy[aRandomSaxon].receiveDamage(this.vikingArmy[aRandomViking].strength);

    //get rid of the unworthy Saxons
    var that = this;

    this.saxonArmy.forEach(function(eachSaxon){

      var index = that.saxonArmy.indexOf(eachSaxon);
      if(eachSaxon.health <= 0){
        that.saxonArmy.splice(index, 1);
        }

      });
      return combatResult;
    };
  }

  War.prototype.saxonAttack=function(){
    var aRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var aRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var combatResult = this.vikingArmy[aRandomViking].receiveDamage(this.saxonArmy[aRandomSaxon].strength);

    //get rid of the unworthy Vikings
    var that = this;

    this.vikingArmy.forEach(function(eachViking){

      var index = that.vikingArmy.indexOf(eachViking);
      if(eachViking.health <= 0){
        that.vikingArmy.splice(index, 1);
        }
      });
      return combatResult;
  };

War.prototype.showStatus=function(){
  while(War.this.saxonArmy == []){
    return "Vikings have won the war of the century!";
  }
  while(War.this.vikingArmy == []){
    return "Saxons have fought for their lives and survive another day...";
  }
  while (War.this.saxonArmy >= 1 || War.this.vikingArmy >= 1){
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
