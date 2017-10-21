// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking (name,health,strength){
  this.name = name;
  Soldier.call(this,health,strength);
}

Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if(this.health <= 0 ) {
    var sms = this.name + " has died in act of combat"
    return sms;
  }
  else if(damage) {
    var sms = this.name + " has received " + damage + " points of damage"
    return sms;
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!"
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
 Soldier.call(health, strength)
 this.health = health;
 this.strength = strength;
}

Saxon.prototype.attack = function() {
  return this.strength
}

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage
  if (this.health <= 0) {
    var smsSaxonDead = "A Saxon has died in combat"
    return smsSaxonDead
  }
  else if(damage){
    var smsSaxonDamage = "A Saxon has received " + damage +
              " points of damage"
    return smsSaxonDamage
  }
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
  var saxon = this.saxonArmy[0];
  var viking = this.vikingArmy[0];
  var saxonReceiveDamage = saxon.receiveDamage(viking.strength);
  if (saxonReceiveDamage == "A Saxon has died in combat") {
    var saxonDead = this.saxonArmy.indexOf(saxon);
    this.saxonArmy.splice(saxonDead,1);
    return saxonReceiveDamage
  }
}

War.prototype.saxonAttack = function() {
  var saxon = this.saxonArmy[0];
  var viking = this.vikingArmy[0];
  var vikingReceiveDamage = viking.receiveDamage(saxon.strength);
  var smsVikingDamage = viking.name + " has received " + saxon.strength + " points of damage"
  if (vikingReceiveDamage == viking.name + " has died in act of combat" ) {
    var saxonDead = this.vikingArmy.indexOf(viking);
    this.vikingArmy.splice(viking,1);
    return vikingReceiveDamage
  }
  return smsVikingDamage
}

War.prototype.showStatus = function() {
  if(this.saxonArmy.length == 0) {
    return "Vikings have won the war of the century!"
  }
  else if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day..."
  }
  else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}
