// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}
Soldier.prototype.attack = function () {
    return this.strength;
  }
  
  Soldier.prototype.receiveDamage = function (theDamage){
      this.health = this.health - theDamage;
  }

  Soldier.prototype.battleCry = function() {
    return "Odin Owns You All!";
}

// Viking
function Viking(name, healthArg, strengthArg ) {
    Soldier.call(this, healthArg, strengthArg)
    this.name = name;
}

Viking.prototype.receiveDamage = function(theDamage) {
    this.health = this.health - theDamage;
        if(this.health > 0){ 
            return viking.name + " has received " + theDamage + " points of damage";}
        else {
            return viking.name + " has died in act of combat";
        }
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.constructor = Viking;

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, strengthArg, healthArg);
    this.health = receiveDamage();
} 

Saxon.prototype.constructor = Saxon;

// War
function War() {}

// Methods










