// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  }
  Soldier.prototype.attack = function(){
  return this.strength;
   }
  Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
  }


// Viking
function Viking(nameArg, healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.name = nameArg;
  }
  Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;
  Viking.battlecry = function(){
    return "Odin Owns You All!";
     };

  Viking.attack = function(){
    return this.strengthArg;
   }
  Viking.prototype.recieveDamage = function (damage) {
      this.health -= damage; 
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }  else {
      return `${this.name} has died in act of combat`

    }
  }
 
// Saxon
function Saxon(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  } 
  Saxon.prototype.attack = function(){
    return this.strength;
     }
     Saxon.prototype = Object.create(Soldier.prototype);
     Saxon.prototype.constructor = function(){
      return this.strength;
       }
    Saxon.prototype.receiveDamage = function (damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } 
      else {
        return `A Saxon has died in combat` ;
  
      }
    }

// War
function War() {}
