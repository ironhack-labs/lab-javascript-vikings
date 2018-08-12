// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(dmg){
  this.health -= dmg
  console.log("initial"this.health - dmg)
  if (this instanceof Viking){
    if ( this.health - dmg <= 0 )
      return this.name + ' has died in act of combat';
    else
      return this.name + ' has received ' + dmg + ' points of damage';
  }
  if (this instanceof Saxon){
    console.log(this.health)
    if( this.health - dmg <= 0)
      return "A Saxon has died in combat";
    else
      return "A Saxon has received " + dmg + " points of damage"
  }
}

Viking.prototype = Object.create(Soldier.prototype)

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!"
}

Saxon.prototype = Object.create(Soldier.prototype)

function Saxon(health,strength) {
  Soldier.call(this, health,strength)
}

// War
function War() {}

// Viking
// should inherit from Soldier
// constructor function
// should receive 3 arguments (name, health & strength)
// should receive the name property as its 1st argument
// should receive the health property as its 2nd argument
// should receive the strength property as its 3rd argument
// attack() method
// should be a function
// should receive 0 arguments
// should return the strength property of the Viking
// receiveDamage() method
// should be a function
// should receive 1 argument (the damage)
// should remove the received damage from the health property
// should return "NAME has received DAMAGE points of damage", if the Viking is still alive
// should return "NAME has died in act of combat", if the Viking dies
// battleCry() method
// should be a function
// should receive 0 arguments
// should return "Odin Owns You All!"