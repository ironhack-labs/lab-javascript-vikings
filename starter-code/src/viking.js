// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function () {
    return this.strength;
  }
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
  }
}

// Viking
function Viking(name, healthArg, strengthArg) {
  Soldier.call(this);
  this.name = name;
  this.health = healthArg;
  this.strength = strengthArg;
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return this.name + " has died in act of combat";
    }
    else {
      return this.name + " has received " + damage + " points of damage"
    }
  }
  this.battleCry = function () {
    return "Odin Owns You All!"
  }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this);
  this.health = healthArg;
  this.strength = strengthArg;
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
    else {
      return "A Saxon has received " + damage + " points of damage"
    }
  }


}
Saxon.prototype = Object.create(Soldier.prototype);
// Saxon.prototype.constructor=Saxon;


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function (viking) {
    this.vikingArmy.push(viking);
  }
  this.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
  }
  this.vikingAttack = function () {
    // this.saxonArmy[0].health-=this.vikingArmy[0].strength
    var x = this.saxonArmy[(Math.floor(Math.random()*(this.saxonArmy.length)))].receiveDamage(this.vikingArmy[(Math.floor(Math.random()*(this.vikingArmy.length)))].strength)
    if (this.saxonArmy[(Math.floor(Math.random()*(this.saxonArmy.length)))].health <= 0) {
      this.saxonArmy = this.saxonArmy.filter(function (el, index) {
        return false;
      })
    }
    return x;

  }

  this.saxonAttack = function () {

    var x = this.vikingArmy[(Math.floor(Math.random()*(this.vikingArmy.length)))].receiveDamage(this.saxonArmy[(Math.floor(Math.random()*(this.saxonArmy.length)))].strength)
    if (this.vikingArmy[(Math.floor(Math.random()*(this.vikingArmy.length)))].health <= 0) {
      this.vikingArmy = this.vikingArmy.filter(function (el, index) {
        return false;
      })
    }
    return x;
  }
  var that = this;
  this.showStatus = function () {
    if (that.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    if (that.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (that.saxonArmy.length > 0 && that.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

