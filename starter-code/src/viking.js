// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health=this.health - damage;
};


// Viking
function Viking (name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
  // return "Harald has received "+ receiveDamage(50)+ "points of damage";
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){

    this.health = this.health - damage;
    if (this.health > 0 ) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }

  // this.damage= (this.health-= this.receiveDamage);
  // return this.name+ "has received " +this.damage + ""
};




// //Viking.receiveDamage = function(damage) {
//   this.health=this.health - damage;
//   return this.name+ "has received "+ this.receiveDamage  + "points of damage";
// } ;

// Saxon
function Saxon () {}

// War
function War () {}
