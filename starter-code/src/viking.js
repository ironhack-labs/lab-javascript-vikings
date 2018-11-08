// Soldier
function Soldier(health,strength) {
  this.health= health;
  this.strength= strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health-damage;
  }
Soldier.prototype.attack = function(){
    return this.strength;
  }

// Viking
function Viking(name,health,strength) {
  Soldier.call(this,health,strength);
  this.name=name;
}

Viking.prototype= Object.create(Soldier.prototype);
Viking.prototype.constructor=Viking;
Viking.prototype.receiveDamage=function(damage){
    this.health = this.health - damage;
    if(this.health > 0)
      return this.name + " has received " + damage + " points of damage";
    else
      return this.name + " has died in act of combat";
  }
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
  };

// Saxon
function Saxon(health,strength) {
  Soldier.call(this,health,strength);
}

Saxon.prototype=Object.create(Soldier.prototype);
Saxon.prototype.constructor=Saxon;
Saxon.prototype.receiveDamage=function(damage){
  this.health=this.health-damage;
  if(this.health > 0)
    return "A Saxon has received " + damage + " points of damage";
  else
    return "A Saxon has died in combat";
};

// War
function War() {
  this.vikingArmy=[];
  this.saxonArmy=[];
}

War.prototype.addViking = function addViking(viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function addSaxon(saxon){
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function vikingAttack(){
  let saxonStatus = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
  if(this.saxonArmy[0].health<=0)
    this.saxonArmy.shift();
  return saxonStatus;
};

War.prototype.saxonAttack = function saxonAttack(){
  let vikingStatus = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
  if(this.vikingArmy[0].health<=0)
    this.vikingArmy.shift();
  return vikingStatus;
};

War.prototype.showStatus = function showStatus(){
  if(this.saxonArmy.length<=0)
    return "Vikings have won the war of the century!";
  if(this.vikingArmy.length<=0)
    return "Saxons have fought for their lives and survive another day...";
  return "Vikings and Saxons are still in the thick of battle.";
  };
