// Soldier
function soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (damage){
     this.health -= damage;
  };
}

// Viking
function viking (name, health, strength) {
  soldier.call(this, health, strength, attack());
  this.name = name;
  this.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return name + " has received " + damage + " points of damage";
    } else {
      return name  + " has died in act of combat";
    }
  };
  this.battleCry = function () {
    return "Odin Owns You All!";
  };
}

// Saxon
function saxon (health, strength) {
  soldier.call(this, health, strength, attack);
  this.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in act of combat";
    }
  };
}

// War
function War () {
  function addViking (viking) {
    vikingArmy.push(viking);
  }

  function addSaxon (saxon) {
    saxonArmy.push(saxon);

  }
  function vikingAttack () {
    var vikingAttacker = math.floor(math.random()*vikingArmy.length-1);
    var saxonDefender = math.floor(math.random()*saxonArmy.length-1);
    saxonDefender.receiveDamage(vikingAttacker.attack);
    if (saxonDefender.health <=0) {
      saxonArmy.splice(saxonDefender,1);
    }
  }

  function saxonAttack () {
    var saxonAttacker = math.floor(math.random()*saxonArmy.length-1);
    var vikingDefender = math.floor(math.random()*vikingArmy.length-1);
    vikingDefender.receiveDamage(saxonAttacker.attack);
    if (vikingDefender.health <=0) {
      vikingArmy.splice(vikingDefender,1);
    }
  }
  function showStatus () {
    if (saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    else if (vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    else {
      return "Viking and Saxons are still in the thick of battle";
    }
  }
  var vikingArmy = [];
  var saxonArmy = [];
}

var viking1 = new viking ("Ryan", 500, 100);
var viking2 = new viking ("Michael", 500, 100);
var viking3 = new viking ("John", 500, 100);
var saxon1 = new saxon (400, 50);
var saxon2 = new saxon (400, 50);
var saxon3 = new saxon (400, 50);

var worldWar = new War ();
