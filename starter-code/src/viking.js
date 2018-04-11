// Soldier

// Soldier Constructor
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  // attack method
  Soldier.prototype.attack = function() {
    return this.strength;
  }

  // receiveDamage method
  Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
  }
}

// Viking

// Viking Constructor. Inherits Soldier props and defines a name prop
Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  // receiveDamage method
  Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return this.name + ' has received ' + damage + ' points of damage'
    } else {
      return this.name + ' has died in act of combat'
    }
  }

  // battleCry method
  Viking.prototype.battleCry = function() {
    return 'Odin Owns You All!'
  }
}

// Saxon

// Saxon Constructor. Inherits Soldier props
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  // receivedDamage method
  Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return 'A Saxon has received ' + damage + ' points of damage';
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War

// War Constructor
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  // addViking method
  War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  }

  // addSaxon method
  War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  // vikingAttack method
  War.prototype.vikingAttack = function() {
    this.saxIndex = Math.floor(Math.random() * this.saxonArmy.length); // picks random index of saxonArmy
    this.vikIndex = Math.floor(Math.random() * this.vikingArmy.length); // picks random index of vikingArmy
    this.randomSax = this.saxonArmy[this.saxIndex]; // picks a random Saxon
    this.randomVik = this.vikingArmy[this.vikIndex]; // picks a random Viking
    this.attackedSax = this.randomSax.receiveDamage(this.randomVik.strength) // applies damage to the pciked Saxon
    
    // removes dead Saxon from array
    if (this.randomSax.health <= 0) {
      this.saxonArmy.splice(this.saxIndex, 1);
      return this.saxonArmy, this.attackedSax;
    }
  }
}
