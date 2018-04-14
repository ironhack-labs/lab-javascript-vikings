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

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;

  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage) {
    // Viking.call(this, name, health, strength);
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else if (this.health <= 0) {
      return this.name + " has died in act of combat";
    }
  };

  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;

  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
  };
}

// War
War.prototype = Object.create(Viking.prototype);
War.prototype.constructor = War;
War.prototype = Object.create(Saxon.prototype);
War.prototype.constructor = War;

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  };

  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  };

  this.vikingAttack = function() {
    randSaxNum = Math.floor(Math.random(this.saxonArmy.length));
    randVikNum = Math.floor(Math.random(this.vikingArmy.length));
    randSaxon = this.saxonArmy[randSaxNum];
    randViking = this.vikingArmy[randVikNum];

    let fightSax = randSaxon.receiveDamage(randViking.attack());

    if (randSaxon.health <= 0) {
      this.saxonArmy.splice(randSaxNum, 1);
    }
    return fightSax;
  };

  this.saxonAttack = function() {
    randSaxNum = Math.floor(Math.random(this.saxonArmy.length));
    randVikNum = Math.floor(Math.random(this.vikingArmy.length));
    randSaxon = this.saxonArmy[randSaxNum];
    randViking = this.vikingArmy[randVikNum];

    let fightVik = randViking.receiveDamage(randSaxon.attack());

    if (randViking.health <= 0) {
      this.vikingArmy.splice(randVikNum, 1);
    }
    return fightVik;
  };

  this.showStatus = function() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}
