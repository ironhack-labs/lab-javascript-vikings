// Soldier
function Soldier(health, strength) {
   this.health = health;
   this.strength = strength;
}
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}
//console.log(Soldier.receiveDamage(50));

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
    this.damage=damage;
    this.health -= this.damage;
    if (this.health > 0) {
        return this.name + " has received " +  this.damage + " points of damage" ;    
    } else {
        return this.name +" has died in act of combat";
    }
}
Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
} 
// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function (damage) {
    this.damage = damage;
    this.health -= this.damage;
    if (this.health > 0) {
        return "A Saxon has received " + this.damage + " points of damage";
    } else {
        return "A Saxon has died in combat";
    }
}
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function() {
    //choosing a random saxon from the army
  var indexRandomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
  var saxon = saxonArmy[indexRandomSaxon];
   //choosing a rnadom viking from the army
  var indexRandomViking = Math.floor(Math.random()*this.vikingArmy.length);
  var viking = vikingArmy[indexRandomViking];
   
  if (saxon.health > 0) {
  saxon.receiveDamage(Viking.strength);
    saxonArmy.splice(indexRandomSaxon, 1);
  } else { 
      var message = "A saxon have got injuried"
    return message
  }
}