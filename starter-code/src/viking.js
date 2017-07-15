// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.strength -= damage;
};


// Viking
function Viking (name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  else {
      return this.name  + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};

// Saxon
function Saxon (healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    }
    else {
      return "A Saxon has died in act of combat";
    }
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function () {
  var vikingAttacker = Math.floor(Math.random()*this.vikingArmy.length);
  var saxonDefender = Math.floor(Math.random()*this.saxonArmy.length);
  this.saxonArmy[saxonDefender].receiveDamage(this.vikingArmy[vikingAttacker].attack());
  if (this.saxonArmy[saxonDefender].health <= 0) {
    this.saxonArmy.splice(saxonDefender, 1);
  }

  console.log("Viking " +this.vikingArmy[vikingAttacker].name+ " has attacked a Saxon ");

  return this.showStatus();
};

War.prototype.saxonAttack = function () {
  var saxonAttacker = Math.floor(Math.random()*this.saxonArmy.length);
  var vikingDefender = Math.floor(Math.random()*this.vikingArmy.length);
  this.vikingArmy[vikingDefender].receiveDamage(this.saxonArmy[saxonAttacker].receiveDamage());
   if (this.vikingArmy[vikingDefender].health <= 0) {
    this.vikingArmy.splice(vikingDefender, 1);
  }

  console.log("A Saxon has attacked Viking "+this.vikingArmy[vikingDefender].name);

  return this.showStatus();
};

War.prototype.showStatus = function showStatus () {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century";
  }
  else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  else if ((this.saxonArmy === 1) && (this.vikingArmy === 1)) {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};

var Ryan = new Viking("Ryan", 10, 5);
var Geoffrey = new Viking("Geoffrey", 10, 5);
var a = new Saxon(10, 2);
var b = new Saxon (10, 2);

var ironHackWar = new War ();

ironHackWar.addViking(Ryan);
ironHackWar.addViking(Geoffrey);
ironHackWar.addSaxon(a);
ironHackWar.addSaxon(b);


console.log("Iron Hack War Begins");

console.log("-------------------------");

ironHackWar.vikingAttack();

console.log("-------------------------");

console.log(ironHackWar);

console.log("-------------------------");

ironHackWar.saxonAttack();

console.log("-------------------------");

console.log(ironHackWar);

console.log("-------------------------");

ironHackWar.vikingAttack();

console.log("-------------------------");

console.log(ironHackWar);

console.log("-------------------------");

ironHackWar.saxonAttack();

console.log("-------------------------");

console.log(ironHackWar);

console.log("-------------------------");

ironHackWar.vikingAttack();

console.log("-------------------------");

console.log(ironHackWar);

console.log("-------------------------");

ironHackWar.saxonAttack();

console.log("-------------------------");

console.log(ironHackWar);

console.log("-------------------------");

ironHackWar.vikingAttack();

console.log("-------------------------");

console.log(ironHackWar);

console.log("-------------------------");

ironHackWar.saxonAttack();

console.log("-------------------------");
