

// Soldier
function Soldier(health, strength) {

  this.health = health;
  this.strength = strength;
  Soldier.prototype.attack = function (){
    return strength;
  }
  Soldier.prototype.receiveDamage = function (damage){
    var newHealth = Soldier.health - damage;
  }
}
 

// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength, name);
  this.name = name;
  

};
 // vikings.receiveDamage()
 Viking.prototype = Object.create(Soldier.prototype);
 Viking.prototype.receiveDamage = function (damage) {
   console.log(damage);
   var vikingHealth = Viking.health - damage;
 
  if (vikingHealth >= 0 ) {
    console.log(this.name + " has received " + damage + " points of damage");
   }
   else {
     console.log(this.name + " has died in act of combat");
   }
}



//proto battleCry()
Viking.prototype.battleCry = function () {
  return "Odin Owns You All!"
}




// Saxon
function Saxon(health, strength) {
Soldier.call(this, health, strength);

}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.receiveDamage = function (damage) {
 
  if (newHealth >= 0 ) {
    console.log( "A Saxon has received " + damage + " points of damage");
   }
   else {
     console.log("A Saxon has died in combat");
   }
}

// War
function War() {}
