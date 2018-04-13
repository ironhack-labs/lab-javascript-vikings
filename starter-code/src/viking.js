// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(theDamage) {
  this.health -= theDamage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

Viking.prototype.receiveDamage = function(theDamage) {
  this.health -= theDamage;
  if (this.health > 0) {
    return this.name + " has received " + theDamage + " points of damage";
  } else if (this.health <= 0){
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

Saxon.prototype.receiveDamage = function(theDamage) {
  this.health -= theDamage;
  if (this.health > 0) {
    return "A Saxon has received " + theDamage + " points of damage";
  } else if (this.health <= 0) {
    return "A Saxon has died in combat";
  }
 }
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
}

function random(arg) {
 return Math.floor(Math.random() * arg.length);
}

War.prototype.vikingAttack = function(){
   let saxInd =  Math.floor(Math.random()*this.saxonArmy.length);
   let randomSax = this.saxonArmy[saxInd];
   let randomVik = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
   let fight = randomSax.receiveDamage(randomVik.attack());

   if (randomSax.health <= 0) {
     this.saxonArmy.splice(saxInd);
   }
   return fight;
}

War.prototype.saxonAttack = function(){
  let vikInd =  Math.floor(Math.random()*this.vikingArmy.length);
  let randomSax = this.saxonArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  let randomVik = this.vikingArmy[vikInd];
  let fight = randomVik.receiveDamage(randomSax.attack());

  if (randomVik.health <= 0) {
    this.vikingArmy.splice(vikInd);
  }
  return fight;
}


War.prototype.showStatus = function(){
  if (this.saxonArmy.length <= 0) {
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length <= 0) {
    return "Saxons have fought for their lives and survive another day..."
  } else if (this.saxonArmy.length >=1 && this.vikingArmy.length >=1){
    return "Vikings and Saxons are still in the thick of battle."
  }
}
