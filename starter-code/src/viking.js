// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function (damage) {
    this.health -= damage;
  };
}

Soldier.prototype.attack = function () {
  return this.strength;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);

  this.name = name;
  this.attack();
  //this.attack = function () {
  //  return this.strength;
  //}

  this.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  this.battleCry = function () {
    return "Odin Owns You All!"
  }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
  this.attack();
  this.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [ ];
  this.saxonArmy = [ ];
  this.addViking = function (Viking) {
    this.vikingArmy.push(Viking);
  };

  this.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon);
  };

  this.vikingAttack = function () {
    var randomSax = Math.floor(Math.random()*this.saxonArmy.length);
    var randomVik = Math.floor(Math.random()*this.vikingArmy.length);

    var selectVikingAttack = this.vikingArmy[randomVik].attack();
    var selectSaxonDamage = this.saxonArmy[randomSax].receiveDamage(selectVikingAttack);
    if (this.saxonArmy[randomSax].health <= 0) {
      this.saxonArmy.splice(randomSax, 1);
    }

    return selectSaxonDamage;

  };
  this.saxonAttack = function () {
    var randomSax = Math.floor(Math.random()*this.saxonArmy.length);
    var randomVik = Math.floor(Math.random()*this.vikingArmy.length);

    var selectSaxAttack = this.saxonArmy[randomSax].attack();
    var selectVikDamage = this.vikingArmy[randomVik].receiveDamage(selectSaxAttack);
    if (this.vikingArmy[randomVik].health <= 0) {
      this.vikingArmy.splice(randomVik, 1);
    }

    return selectVikDamage;
  };
  this .showStatus = function () {
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.saxonArmy.length == 0 && this.vikingArmy.length >= 1) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0 && this.saxonArmy.length >= 1) {
      return "Saxons have fought for their lives and survive another day...";
    }
  };
}