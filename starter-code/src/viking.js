// Soldier
function Soldier(health, strength) {
 this.health = health;
 this.strength = strength;
 this.attack = function() {
   return strength};
  this.receiveDamage = function (damage) {
    this.health -= damage;
    return 
  }
}

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call (this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;

      if (this.health >0) {
        return  this.name + " has received " + damage + " points of damage";
      }
      else {
        return this.name + " has died in act of combat"
      }
  }
  this.battleCry = function () {
    return "Odin Owns You All!"
  }
}

Viking.prototype = Object.create(Soldier.prototype);



// Saxon
function Saxon(health, strength) {
  Soldier.call (this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return  "A Saxon has received " + damage + " points of damage";
    }
    else return  "A Saxon has died in combat";

  }

}

Saxon.prototype = Object.create (Soldier.prototype);



// War
function War() {
this.vikingArmy = [];
this.saxonArmy = [];
this.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
  return
}
this.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
  return
}

this.vikingAttack = function () {
  var randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
  randomSaxon.receiveDamage = Viking.strength;
  
  if (randomSaxon.health <= 0) { this.saxonArmy.splice (randomSaxon)
  }
  return 
  Saxon.receiveDamage (Viking.strength)
}
}
