// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
} 

Soldier.prototype.attack = function () {
    this.strength;
}



Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
}

function battleCry () {

}



// Viking
function Viking (name, health, strenght) {
    Soldier.call(this, health, strenght);
    this.name = name;

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function () {
    this.strength;
}

Viking.prototype.health = function (health) {
    if (this.health > 0) {
      throw (Viking.name +' has received '+ receiveDamage +' points of damage');
    }
     throw (Viking.name + ' has died in act of combat');
  };

// Saxon
function Saxon() {}

// War
function War() {}
