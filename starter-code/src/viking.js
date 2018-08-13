// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
};

Soldier.prototype.attack = function(){
return this.strength;
};

Soldier.prototype.receiveDamage = function(damgeArg){
    this.health -= damgeArg;
};




// Viking
function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
   
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damageArg){
    this.health -= damageArg ;
    if (this.health> 0) { 
      return this.name +" has received " +damageArg +" points of damage"
      }
    else { 
      return  this.name +" has died in act of combat";
      };
};

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}


// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
}


Saxon.prototype = Object.create(Soldier.prototype);


Saxon.prototype.receiveDamage = function(damageArg){
    this.health -= damageArg ;
    if (this.health> 0) { 
      return "A Saxon has received " +damageArg +" points of damage"
      }
    else { 
      return  "A Saxon has died in combat";
      };
};

// War
function War() {}
