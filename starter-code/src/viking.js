// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  }
  this.receiveDamage = function(damage) {
    this.health -= damage;
  }
}

//Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength)
  this.attack = function() {
    return this.strength;
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

/*Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    var result = "Harald has died in act of combat"
    if (this.health > 0) {
      result = this.name + ' has received ' + damage + "points of damage"
    }
    return result
  }
  */

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}
// Saxon

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.attack = function() {
    return this.strength;
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  else {
    return "A Saxon has died in combat";
  }
}

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
  var s = Math.floor(Math.random()*saxonArmy.length + 1);
  var v = Math.floor(Math.random()*vikingArmy.length + 1);
  (saxonArmy[s].health).receiveDamage(viking[v].strength);
  if (saxonArmy[s].health = 0) {
    saxonarmy[s].splice(s, s+1);
  }
}
