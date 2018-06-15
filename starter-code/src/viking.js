// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
    return this.strengthArg;
  };
  
  this.receiveDamage = function(damage){
    if (damage) {
      this.healthArg--;
  };
}
}

// Viking 
function Viking(name, healthArg, strengthArg) {
  Soldier.call(this,healthArg,strengthArg);
  this.name = name;
  this.stillAlive = true;
  
  this.prototype.receiveDamage = function(damage){
    healthArg= healthArg-damage;
    if(healthArg > 0) {
      console.log(name + " has received " + damage + "damage points")
    } else {
        console.log(name + "has died in combat")
      }
    }
  };

  this.battleCry= function(){
    console.log("Odin owns you all!")
  };

// Saxon
function Saxon(healthArg,strengthArg) {
  Soldier.call(this,healthArg,strengthArg)

  this.prototype.receiveDamage = function(damage){
    healthArg= healthArg-damage;
    if(healthArg > 0) {
      console.log("A Saxon has received " + damage + "damage points")
    } else {
      console.log(" A Saxon has died in combat")
    }
  }
}

// War
function War() {}

