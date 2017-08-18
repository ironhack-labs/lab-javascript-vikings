// Soldier
function Soldier (health, strength) {
  this.health = health ;
  this.strength = strength;
}

  Soldier.prototype.attack = function() {
    return this.strength;
  };

  Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
  };

// Viking
Viking.prototype = Object.create(Soldier.prototype);
// Viking.prototype.constructor = Viking;

function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype.receiveDamage = function (damage) {
  var vikHealth = Soldier.call(this, receiveDamage);
  if (vikHealth > health) {
    return name + "has received " + damage + " points of damage";
  } else {
    return name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function battleCry () {
  return "Odin Owns You All";
};


// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

// War
function War () {}
