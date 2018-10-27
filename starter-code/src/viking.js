// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}



Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
}


Viking.prototype = Object.create(Soldier.prototype);

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;

  this.receiveDamage = function(damage) {
    this.health = health - damage;
    console.log(this.health);

    if (damage < health) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  this.battleCry = function(){
    return `Odin Owns You All!`;
  }
}


Saxon.prototype = Object.create(Soldier.prototype);
// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function(damage){
    this.health = health - damage;

    if (health > damage){
      return `A Saxon has received ${damage} points of damage`;
    }else{
      return `A Saxon has died in combat`;

    }
  }



}


// War
function War() {

  this.vikingArmy = [];
  this.saxonArmy = [];


}


War.prototype.addViking = function(Viking){
  
  this.vikingArmy.push(Viking);

}

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon)
}
War.prototype.vikingAttack = function(){

}
War.prototype.saxonAttack = function(){

}
War.prototype.showStatus = function(){

}


