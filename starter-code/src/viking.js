// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  return (this.health > 0) ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
}

Viking.prototype.battleCry = function () {
  return ("Odin Owns You All!");
}



// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  return (this.health > 0) ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
}



// War
function War() {
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
  
  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var RandomViking = this.vikingArmy[entierAleatoire(0, this.vikingArmy.length - 1)];
  var RandomSaxon = this.saxonArmy[entierAleatoire(0, this.saxonArmy.length - 1)];

  var health = RandomSaxon.health;

    if (RandomViking.strength >= health) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(RandomSaxon),1);
        return RandomSaxon.receiveDamage(RandomViking.strength);
      } else {
        return RandomSaxon.receiveDamage(RandomViking.strength)
      }
};


War.prototype.saxonAttack = function () {
  
  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var RandomViking = this.vikingArmy[entierAleatoire(0, this.vikingArmy.length - 1)];
  var RandomSaxon = this.saxonArmy[entierAleatoire(0, this.saxonArmy.length - 1)];

  var health = RandomViking.health;

    if (RandomSaxon.strength >= health) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(RandomViking),1);
        return RandomViking.receiveDamage(RandomSaxon.strength);
      } else {
        return RandomViking.receiveDamage(RandomSaxon.strength)
      }
};


// Status of War
War.prototype.showStatus = function() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } 
  }