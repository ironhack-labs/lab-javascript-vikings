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
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack  = function(){
  return Soldier.prototype.attack.call(this);
}

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health <= 0){
    return this.name + " has died in act of combat";
  } else {return this.name + " has received " + damage + " points of damage";} 
}
 Viking.prototype.battleCry = function(){
   return "Odin Owns You All!"
 }

// Saxon
function Saxon(health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health <= 0){
    return "A Saxon has died in combat";
  } else {return  "A Saxon has received " + damage + " points of damage";} 
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype = Object.create(Viking.prototype);
War.prototype.constructor = War;

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking)
}

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon)
}

War.prototype.vikingAttack = function(){
 var saxonChosen = Math.floor(Math.random() * this.saxonArmy.length);
 var vikingChosen = Math.floor(Math.random() * this.vikingArmy.length);
 var damageSaxon = this.saxonArmy[saxonChosen].receiveDamage(this.vikingArmy[vikingChosen].attack());

     if (this.saxonArmy[saxonChosen].health <= 0) { 
       this.saxonArmy.splice(0, 1);  
     }
     return damageSaxon;  
 };

 War.prototype.saxonAttack = function(){
  var saxonChosen = Math.floor(Math.random() * this.saxonArmy.length);
  var vikingChosen = Math.floor(Math.random() * this.vikingArmy.length);
  var damageViking = this.vikingArmy[vikingChosen].receiveDamage(this.saxonArmy[saxonChosen].attack());
 
      if (this.vikingArmy[vikingChosen].health <= 0) { 
        this.vikingArmy.splice(0, 1);  
      }
      return damageViking;  
  };
 
  War.prototype.showStatus = function(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }
    else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle."
    } else {};
  }