// Soldier

function Soldier (health, strength) {
this.health = health;
this.strength = strength;

Soldier.prototype.attack= function attack(){
  return this.strength}
}

Soldier.prototype.receiveDamage = function receiveDamage(damage){
this.health -= damage;
}

// Viking

function Viking (name, health, strength) {
  Soldier.call (this, health,strength);
  this.name = name;
  
}
Viking.prototype =Object.create (Soldier.prototype);

Viking.prototype.receiveDamage = function receiveDamage(damage){
  var NewHealth= this.health -= damage;

  if (NewHealth > 0) {return this.name +" has received " + damage + " points of damage"}
  else { return this.name +" has died in act of combat"}
  }

  


  // Vikings.prototype.battleCry= function battleCry(){
  //   return
  // }


  


// Saxon
function Saxon() {}

// War
function War() {}
