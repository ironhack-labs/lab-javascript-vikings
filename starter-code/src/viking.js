// Soldier
function Soldier (health, strength) {
 this.health = health;
 this.strength = strength;
 }

Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = "Harald";

}
Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health>=1){
    return this.name + " has received " + damage + " points of damage";
  }else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function (battle) {
  return "Odin Owns You All"
}


// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon (health, strength) {
  soldier.call(this, health, strength);
}



// War
function War () {}
