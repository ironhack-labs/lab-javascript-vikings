// Soldier
function Soldier(health,strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.damage = damage; 
  this.health = (this.health)-(this.damage);
}

// Viking
function Viking(name, health, strength) {
  this.name = name;  
  Soldier.call(this, health, strength)
}

  Viking.prototype = Object.create(Soldier.prototype);

  Viking.prototype.receiveDamage = function (damage) {
    this.damage = damage;
    this.health = this.health-this.damage;

    if (this.health>0) {
      return this.name + " has received " + this.damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
  }

// Saxon
function Saxon(health, strength) {
 Soldier.call(this, health, strength)
}

Saxon.prototype= Object.create(Soldier.prototype)

Saxon.prototype.receiveDamage = function (damage){
  this.damage = damage;
  this.health = this.health - this.damage;
  if (this.health > 0){
    return "A Saxon has received " + this.damage + " points of damage"
  } else {
    return "A Saxon has died in combat";
  }
} 

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy =[]

};

War.prototype.randomVik = function () {
  var vikingRan = Math.floor(Math.random()*this.vikingArmy.length)
  return this.vikingArmy[vikingRan]; 
}
War.prototype.randomSax = function () {
  var saxonRan = Math.floor(Math.random()*this.saxonArmy.length)
  return this.saxonArmy[saxonRan];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
}
War.prototype.vikingAttack = function () {
  var sax1 = this.randomSax();
  var vik1 = this.randomVik();
  var result = sax1.receiveDamage(vik1.strength);
  if (sax1.health <= 0) {
    this.saxonArmy.splice(this.saxonArmy.indexOf(sax1),1)
  }
  return result;
}
War.prototype.saxonAttack = function () {
  var sax1 = this.randomSax();
  var vik1 = this.randomVik();
  var result = vik1.receiveDamage(sax1.strength);
  if (vik1.health <= 0) {
    this.vikingArmy.splice(this.vikingArmy.indexOf(vik1), 1);
  }
  return result;
}
War.prototype.showStatus = function () {
  if (this.saxonArmy.length===0) {
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}