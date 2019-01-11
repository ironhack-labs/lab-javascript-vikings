// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
  
};



// // Viking
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0) {
    return this.name + ' has received ' + damage + ' points of damage';
  } else {
    return this.name + ' has died in act of combat'; 
  }
}

Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!'
}

function Viking(name, healthArg, strengthArg) {
  this.name = name;
  this.health = healthArg;
  this.strength = strengthArg;
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0) {
    return 'A Saxon has received ' + damage + ' points of damage';
  } else {
    return 'A Saxon has died in combat'; 
  }
}

function Saxon(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

// War

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {
  let fightViking = Math.random() * (War.vikingArmy.length);
  let fightSaxon = Math.random() * (War.saxonArmy.length);
  let vikingAttack = this.vikingArmy[fightViking].attack();
  return saxonDamage = this.saxonArmy[fightSaxon].receiveDamage(vikingAttack);
}

