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

Soldier.prototype.receiveDamage = function(health, strength) {
  this.damage = damage;
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    Viking.health -= damage;
    if (Viking.health === 0) {
      return Viking.name + " has died in act of combat";
    } else {
      return Viking.name + " has received " + damage + " points of damage";
    }
  };


let newViking = new Viking("Bard", 100, 50);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health === 0) {
      return "A Saxon has died in combat";
    } else {
      return "A Saxon has received " + damage + " points of damage";
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

let newSaxon = new Saxon(100, 60);


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(newViking){
    this.vikingArmy.push(newViking);
};

War.prototype.addSaxon = function(newSaxon){
    this.saxonArmy.push(newSaxon);
};

War.prototype.vikingAttack = function(){
    Saxon.receiveDamage(Viking.strength)
        if(Saxon.health === 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(Viking),1);
        }
    return
}
War.prototype.saxonAttack = function(){}
War.prototype.showStatus = function(){}
