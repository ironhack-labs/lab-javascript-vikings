// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
};

Viking.prototype = Object.create(Soldier.prototype);

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;

  this.receiveDamage = function(damage) {
    this.health = health - damage;
    console.log(this.health);

    if (damage < health) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  this.battleCry = function() {
    return `Odin Owns You All!`;
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function(damage) {
    this.health = health - damage;

    if (health > damage) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

// War
function War() {
  Saxon.call(this,)
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
  
  



  this.saxonArmy.pop(Saxon);
  
   
};




War.prototype.saxonAttack = function() {

  this.vikingArmy.pop(Viking);
};


War.prototype.showStatus = function() {

  if(this.saxonArmy === undefined || this.saxonArmy.length == 0){
    return `Vikings have won the war of the century!`;
  }else if (this.vikingArmy  === undefined || this.vikingArmy.length == 0){
    return `Saxons have fought for their lives and survive another day...`;
  }else{
    return `Vikings and Saxons are still in the thick of battle.`;
  }

};
