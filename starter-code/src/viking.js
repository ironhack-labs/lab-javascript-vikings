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

function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}

// War
War.prototype = Object.create(Viking.prototype);
War.prototype.constructor = War;
War.prototype = Object.create(Saxon.prototype);
War.prototype.constructor = War;

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  };
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  };
  this.vikingAttack = function() {
    var randSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
    var randVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    var randSaxon = this.saxonArmy[randSaxonNum];
    var randViking = this.vikingArmy[randVikingNum];

    var fightClub = randSaxon.receiveDamage(randViking.attack());
    
    if (randSaxon.health <= 0){
      this.saxonArmy.splice(randSaxonNum, 1);
    }
    
    return fightClub;
  }

  this.saxonAttack = function() {
    var randSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
    var randVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    var randSaxon = this.saxonArmy[randSaxonNum];
    var randViking = this.vikingArmy[randVikingNum];

    var fightClub = randViking.receiveDamage(randSaxon.attack());
    
    if (randViking.health <= 0){
      this.vikingArmy.splice(randVikingNum, 1);
    }
    
    return fightClub;
  }
  this.showStatus = function() {
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day...";
    }
    else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
