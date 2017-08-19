// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.strength;
  };

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

//Viking

var vikNames = ["Will", "Phil", "Frances", "Jordi", "Markus", "Mark", "Gabriele", "Byron", "Jennie", "Tania"];

function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " received " + damage + " points of damage and died in combat";
    }
};

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
};

var f = new Viking("bob", 10, 10);

console.log(f);

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon received " + damage + " points of damage and died in combat";
    }
};


//War

function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

var randomSax, randomVik;

var maxVikingHealth = 200;
var minVikingHealth = 100;

var maxVikingStrength = 100;
var minVikingStrength = 50;

var maxSaxonHealth = 150;
var minSaxonHealth = 50;

var maxSaxonStrength = 80;
var minSaxonStrength = 30;

var war = new War();

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function () {
  randomSax = Math.floor(Math.random() * this.saxonArmy.length);
  randomVik = Math.floor(Math.random() * this.vikingArmy.length);
  this.saxonArmy[randomSax].receiveDamage(this.vikingArmy[randomVik].attack());
  console.log(this.saxonArmy[randomSax].receiveDamage(this.vikingArmy[randomVik].attack()));
  if (this.saxonArmy[randomSax].health <= 0) {
    this.saxonArmy.splice(randomSax, 1);
  }
  if (Math.floor(Math.random() * 3) === 0) {
    console.log (this.vikingArmy[randomVik].name + " yells " + this.vikingArmy[randomVik].battleCry());
  }
};

War.prototype.saxonAttack = function () {
  randomSax = Math.floor(Math.random() * this.saxonArmy.length);
  randomVik = Math.floor(Math.random() * this.vikingArmy.length);
  this.vikingArmy[randomVik].receiveDamage(this.saxonArmy[randomSax].attack());
  console.log(this.vikingArmy[randomVik].receiveDamage(this.saxonArmy[randomSax].attack()));
  if (this.vikingArmy[randomVik].health <= 0) {
    this.vikingArmy.splice(randomVik, 1);
  }
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};

War.prototype.simulate = function (vikingArmySize, saxonArmySize) {

  // create viking army with random property values
  var randomVikingName = Math.floor(Math.random() * vikNames.length);
  var randomVikingHealth = Math.floor(Math.random() * (maxVikingHealth - minVikingHealth + 1)) + minVikingHealth;
  var randomVikingStrength = Math.floor(Math.random() * (maxVikingStrength - minVikingStrength + 1)) + minVikingStrength;
  for (i=0; i < vikingArmySize; i++) {
    this.vikingArmy.push(new Viking(vikNames[randomVikingName], randomVikingHealth, randomVikingStrength));
    randomVikingName = Math.floor(Math.random() * vikNames.length);
    randomVikingHealth = Math.floor(Math.random() * (maxVikingHealth - minVikingHealth + 1)) + minVikingHealth;
    randomVikingStrength = Math.floor(Math.random() * (maxVikingStrength - minVikingStrength + 1)) + minVikingStrength;
  }

  /// create saxon army with random property values
  var randomSaxonHealth = Math.floor(Math.random() * (maxSaxonHealth - minSaxonHealth + 1)) + minSaxonHealth;
  var randomSaxonStrength = Math.floor(Math.random() * (maxSaxonStrength - minSaxonStrength + 1)) + minSaxonStrength;
  for (i=0; i < saxonArmySize; i++) {
    this.saxonArmy.push(new Saxon(randomSaxonHealth, randomSaxonStrength));
    randomSaxonHealth = Math.floor(Math.random() * (maxSaxonHealth - minSaxonHealth + 1)) + minSaxonHealth;
    randomSaxonStrength = Math.floor(Math.random() * (maxSaxonStrength - minSaxonStrength + 1)) + minSaxonStrength;
  }

  console.log("Vikings have " + this.vikingArmy.length + " troops and Saxons have " + this.saxonArmy.length + " troops.");
  console.log("Begin the war!");

  // pick a random side to attack
  while (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
    var x = Math.floor(Math.random() * 2);
    if (x === 1) {
      this.vikingAttack();
      console.log("Saxons have " + this.saxonArmy.length + " troops left");
    } else {
      this.saxonAttack();
      console.log("Vikings have " + this.vikingArmy.length + " troops left");
    }
    x = Math.floor(Math.random() * 2);
    console.log(this.showStatus());
  }
};



war.simulate(3,7);
