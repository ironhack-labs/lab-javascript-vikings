// Soldier
function Soldier(healthArg, strengthArg) {
  (this.health = healthArg), (this.strength = strengthArg);
}
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " " + "has received " + damage + " points of damage";
  }
  return this.name + " has died in act of combat";
};
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};



// Saxon
function Saxon(health, strenght) {
  Soldier.call(this, health, strenght);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  return "A Saxon has died in combat";
};


// War
function War() {
  this.vikingArmy =[];
  this.saxonArmy =[];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function() {
     var random1=Math.floor(Math.random()*this.saxonArmy.length);
     var random2=Math.floor(Math.random()*this.vikingArmy.length);
     var sajon=this.saxonArmy[random1]
     var viking=this.vikingArmy[random2].strength;
     if(sajon.health<=viking){
          this.saxonArmy.splice(random1,1);
     }
     return sajon.receiveDamage(viking);
};
War.prototype.saxonAttack = function() {
     var random1=Math.floor(Math.random()*this.vikingArmy.length);
     var random2=Math.floor(Math.random()*this.saxonArmy.length);
     var viking=this.vikingArmy[random1]
     var sajon=this.saxonArmy[random2].strength;
     if(viking.health<=sajon){
          this.vikingArmy.splice(random1,1);
     }
     return viking.receiveDamage(sajon);
};
War.prototype.showStatus = function() {
     if(this.saxonArmy.length==0){
          return "Vikings have won the war of the century!"
     }
     else if(this.vikingArmy.length==0){
          return "Saxons have fought for their lives and survive another day..."
     }
     else{
          return "Vikings and Saxons are still in the thick of battle."
     }
};
