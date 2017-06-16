// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
      this.health = this.health - damage;
  };
};

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      console.log(this.name + " has received " + damage + " points of damage");
    }
    else {
      console.log(this.name + " has died in act of combat");
    }
  };
  this.battleCry =  function () {
    return "Odin Owns You All!";
  };
};

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      console.log("A Saxon has received " + damage + " points of damage");
    }
    else {
      console.log("A Saxon as died in act of combat");
    }
  };
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function () {
    var viking = new Viking("Viking" + this.vikingArmy.length + 1, 10, _.random(7,10));
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function () {
    var saxon = new Saxon(10,_.random(5,7))
    this.saxonArmy.push(saxon);
  };
  this.vikingAttack = function () {
    var saxonIndex = _.random(0, this.saxonArmy.length-1);
    var randomSaxon = this.saxonArmy[saxonIndex];
    var randomIndex = _.random(0, this.vikingArmy.length-1);
    var randomViking = this.vikingArmy[randomIndex];

    var damageRecieved = randomSaxon.receiveDamage(randomViking.strength);

    this.saxonArmy = this.saxonArmy.filter(function(saxon) {
      return saxon.health > 0;
    });
    return damageRecieved;
  };
  this.saxonAttack = function () {
    var vikingIndex = _.random(0, this.vikingArmy.length-1);
    var randomViking = this.vikingArmy[vikingIndex];
    var randomIndex = _.random(0, this.saxonArmy.length-1);
    var randomSaxon = this.saxonArmy[randomIndex];

    var damageRecieved = randomViking.receiveDamage(randomSaxon.strength);
    _.filter(this.vikingArmy, ['health' > 0]);
    return damageRecieved;
  };
  this.showStatus = function () {
    if (this.saxonArmy.length === 0) {
      console.log("Vikings have won the war of the century!");
      return false;
    }
    else if (this.vikingArmy.length === 0) {
      console.log("Saxons have fought for their lives and survive another day...");
      return false;
    }
    else {
      console.log("Vikings and Saxons are still in the thick of battle.");
      return true;
    }
  };
}

var war = new War();
for (var i = 0; i< 5; i++) {
  war.addViking();
  war.addSaxon();
}

var continueFighting = true;
while (continueFighting) {
  war.vikingAttack();
  continueFighting = war.showStatus();
  if (continueFighting) {
    war.saxonAttack();
    continueFighting = war.showStatus();
  }
}
