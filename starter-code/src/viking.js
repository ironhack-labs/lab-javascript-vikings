// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}



// Viking
function Viking(name, health, strength) {
  this.name = name;
Vicking.prototype.receiveDamage= funcion(damage){
  this.health-=damage;
  if(this.health>0){


Viking.prototype=Object.create(Soldier.prototype);
viking.prototype.constructor=Viking;
// Saxon
function Saxon() {}

// War
function War() {}
