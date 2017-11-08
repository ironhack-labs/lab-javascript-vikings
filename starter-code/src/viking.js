// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};
// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}
// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};
// War
function War () {
  this.saxonArmy = [];
  this.vikingArmy = [];
}

War.prototype.addViking = function(viking) {
  if(viking instanceof Viking){
    this.vikingArmy.push(viking);
  }
}

War.prototype.addSaxon = function(saxon) {
  if(saxon instanceof Saxon){
    this.saxonArmy.push(saxon);
  }
}

War.prototype.vikingAttack = function(){
   randomSaxson = Math.floor(Math.random() * this.saxonArmy.length);
   randomViking = Math.floor(Math.random() * this.vikingArmy.length);
   fightResult = this.saxonArmy[randomSaxson].receiveDamage(this.vikingArmy[randomViking].attack());

  if(this.saxonArmy[randomSaxson].health <= 0){
    this.saxonArmy.splice(randomSaxson, 1);
  }
  return fightResult;
}

War.prototype.saxonAttack = function(){
   randomSaxson = Math.floor(Math.random() * this.saxonArmy.length);
   randomViking = Math.floor(Math.random() * this.vikingArmy.length);
   fightResult = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxson].attack());

  if(this.vikingArmy[randomViking].health <= 0){
    this.vikingArmy.splice(randomViking, 1);
  }
  return fightResult;
}

War.prototype.showStatus = function(){
  if(this.saxonArmy[0] !== undefined && this.vikingArmy[0] !== undefined){
    return "Vikings and Saxons are still in the thick of battle.";
  } else if(this.saxonArmy[0] === undefined) return "Vikings have won the war of the century!";
            else if(this.vikingArmy[0] === undefined) return "Saxons have fought for their lives and survive another day...";
}
