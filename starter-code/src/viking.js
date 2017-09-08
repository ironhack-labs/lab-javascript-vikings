// Soldier
function Soldier (health, strength) {
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
function Viking (name,health,strength) {
  this.name = name;
  Soldier.call(this,health,strength);

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };

}

Viking.prototype= Object.create(Soldier.prototype);

Soldier.prototype.battleCry = function () {
  return "Odin Owns You All!";

};


// Saxon
function Saxon (health,strength) {
  this.health = health;
  this.strength = strength;

}

Saxon.prototype=Object.create(Soldier.prototype);


Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  else {
      return "A Saxon has died in combat";
    }
};



// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
  var randSaxon = randomSelect(this.saxonArmy);
  var randViking = randomSelect(this.vikingArmy);
  var index = this.saxonArmy.indexOf[randSaxon];
  var result = randSaxon.receiveDamage(randViking.strength);
  if (randSaxon.health <= 0) {
    this.saxonArmy.splice(index, 1);
  } return result ;

};

War.prototype.saxonAttack = function() {
  var randViking = randomSelect(this.vikingArmy);
  var randSaxon = randomSelect(this.saxonArmy);
  var index = this.vikingArmy.indexOf[randViking];
  var result = randViking.receiveDamage(randSaxon.strength);
  if (randViking.health <= 0) {
    this.vikingArmy.splice(index, 1);
  } return result;
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};

function randomSelect(array) {
  randomSelected = array[Math.floor(Math.random() * array.length)];
  return randomSelected;
}


/*

var mySoldier = new Soldier(100, 42);
*/
