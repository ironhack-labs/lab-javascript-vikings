// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.receiveDamage = function(damage) {
 this.health -= damage;
};
Soldier.prototype.attack = function() {
  return this.strength;
};

// Viking
function Viking(name, healthVik, strengthVik) {
this.name = name;
Soldier.call(this, healthVik, strengthVik)
this.battleCry = function() {
  return "Odin Owns You All!";
}
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage
  if (this.health === 0) {
    return this.name + " has died in act of combat";
  } else {
    return this.name + " has received " + damage + " points of damage";
  }
}


// Saxon
function Saxon(healthSax, strengthSax) {
  Soldier.call(this, healthSax, strengthSax)
  
}

 Saxon.prototype = Object.create(Soldier.prototype);
 Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health === 0) {
    return "A Saxon has died in combat";
  } else {
    return "A Saxon has received " + damage  + " points of damage";
  }

  this.health -= damage;
 };

 


// War
function War() {}
