// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function () {
    return this.strength;
  };

  this.receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = (damage) => {
    this.health -= damage;
    return this.health > 0 ? this.name + ' has received ' + damage + ' points of damage' : this.name + ' has died in act of combat';
  };
  this.battleCry = function () {
    return 'Odin Owns You All!';
  };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = (damage) => {
    this.health -= damage;
    return this.health > 0 ? 'A Saxon has received ' + damage + ' points of damage' : 'A Saxon has died in combat';
  };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function (object) {
    this.vikingArmy.push(object);
  };

  this.addSaxon = function (object) {
    this.saxonArmy.push(object);
  };

  this.vikingAttack = function () {
    var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
    var newArmy = this.saxonArmy.filter(element => {
      return element.health > 0
    });
    this.saxonArmy = newArmy;
    return result
  };

  this.saxonAttack = function () {
    var result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
    var newArmy = this.vikingArmy.filter(element => {
      return element.health > 0
    });
    this.vikingArmy = newArmy;
    return result
  }

  this.showStatus = function () {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...'
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
