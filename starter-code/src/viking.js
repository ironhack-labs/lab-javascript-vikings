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
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    // console.log(this.name + ' has received ' + damage + ' points of damage');
    return (this.name + ' has received ' + damage + ' points of damage');
  } else {
    // console.log(this.name + ' has died in act of combat');
    return (this.name + ' has died in act of combat');
  }
};

Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!';
};
// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    // console.log('A Saxon has received ' + damage + ' points of damage');
    return ('A Saxon has received ' + damage + ' points of damage');
  } else {
    // console.log('A Saxon has died in combat');
    return ('A Saxon has died in combat');
  }
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(viking) {
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  }
  this.vikingAttack = function() {
      var result = '';
      result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
      if (this.saxonArmy[0].health <= 0)
        this.saxonArmy.splice(0,1);
      return result;
  }
  this.saxonAttack = function() {
      var result = '';
      result =
      this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
      if (this.vikingArmy[0].health <= 0)
        this.vikingArmy.splice(0,1);
      return result;
  }
  this.showStatus = function() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...';
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
