// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if (this.health === 0) {
    return `${this.name} has died in act of combat`;
  } else {
    return `${this.name} has received ${damage} points of damage`;
  }
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;


  if (this.health === 0) {
    return `A Saxon has died in combat`;

  } else {
    return `A Saxon has received ${damage} points of damage`;
  }
};

// War
function War() {
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

  var saxon = this.saxonArmy [Math.floor((Math.random() * this.saxonArmy.length-1) + 1)]; 
  var viking = this.vikingArmy [Math.floor((Math.random() * this.vikingArmy.length-1) + 1)];  

    if(saxon.health <= viking.strength){
        this.saxonArmy.splice(0,1);  
    }

  return saxon.receiveDamage(viking.strength);

};



War.prototype.saxonAttack = function() {

    var saxon = this.saxonArmy [Math.floor((Math.random() * this.saxonArmy.length-1) + 1)]; 
    var viking = this.vikingArmy [Math.floor((Math.random() * this.vikingArmy.length-1) + 1)];  

    if(viking.health <= saxon.strength){
        this.vikingArmy.splice(0,1);  
    }

  return viking.receiveDamage(saxon.strength);
  };


War.prototype.showStatus = function() {
    if(this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    }else if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day..."

    }else{
        return "Vikings and Saxons are still in the thick of battle.";
    }
};
    