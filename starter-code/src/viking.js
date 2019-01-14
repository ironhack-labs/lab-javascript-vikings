// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if(this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
  }
};

Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!';
};
 
// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if(this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  } else {
    return `A Saxon has died in combat`;
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {
  return attack(this.vikingArmy, this.saxonArmy);
};

War.prototype.saxonAttack = function() {
  return attack(this.saxonArmy, this.vikingArmy);
}

function attack(attacker, defender) {
  var randomDefender = pickRandomSoldier(defender)
  var randomAttacker = pickRandomSoldier(attacker);
  var result = defender[randomDefender].receiveDamage(attacker[randomAttacker].strength);

  clearDeadSoldiers(defender, randomDefender);
  return result;
}

function pickRandomSoldier(soldier) {
  return Math.floor(Math.random()* soldier.length);
}

function clearDeadSoldiers(defenderArray, randomDefender) {
  for(var soldier of defenderArray) {
    if(soldier.health <= 0 ) {
      defenderArray.splice(randomDefender, 1);
    }
  }
}

War.prototype.showStatus = function() {
  if(this.saxonArmy.length <= 0) {
    return 'Vikings have won the war of the century!';
  } else if(this.vikingArmy.length <= 0) {
    return 'Saxons have fought for their lives and survive another day...';
  } else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}

function generateViking () {
  var name     = "Harald";
  var strength = 60;
  var health   = 100;

  return new Viking(name, health, strength);
}

function generateSaxon () {
  var health   = 60;
  var strength = 25;

  return new Saxon(health, strength);
}

var war = new War();

function createArmies() {
  for(var i = 0; i < 10; i++) {
    war.addSaxon(generateSaxon());
    war.addViking(generateViking());  
  }
  console.log(war.saxonArmy);
  console.log(war.vikingArmy);
}

function play() {
  createArmies();
  while(war.saxonArmy.length > 0 
    && war.vikingArmy.length > 0) {
      console.log(war.vikingAttack());
      console.log(war.showStatus());
      console.log(war.saxonAttack());
      console.log(war.showStatus());
  }
}





