// Soldier
class Soldier{
  constructor(healthArg, strengthArg){
    this.health=healthArg;
    this.strength=strengthArg;
  }
}
Soldier.prototype.attack=function(){
  return this.strength;
}
Soldier.prototype.receiveDamage=function(damage){

  this.health = (this.health - damage);
}
// Viking
class Viking extends Soldier{
  constructor(name, healthArg, strengthArg){
    super(healthArg, strengthArg)
    this.name=name;
    this.health=healthArg;
    this.strength=strengthArg;
  }
}
Viking.prototype.receiveDamage=function(damage){
  this.health -= damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`
  }
  if (this.health <= 0) {
    return `${this.name} has died in act of combat`
  }
}
Viking.prototype.battleCry=function(){
  return "Odin Owns You All!"
}
// Saxon
class Saxon extends Soldier{
  constructor(healthArg, strengthArg){
    super(healthArg, strengthArg)
  }
}
Saxon.prototype.receiveDamage=function(damage){
  this.health -= damage;
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`
  }
  if (this.health <= 0) {
    return `A Saxon has died in combat`
  }
}
// War
class War{
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
}
War.prototype.addViking=function(Viking){
  this.vikingArmy.push(Viking);
}
War.prototype.addSaxon=function(Saxon){
  this.saxonArmy.push(Saxon);
}
War.prototype.vikingAttack=function(){
  let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking])
}
War.prototype.saxonAttack=function(){
  
}
War.prototype.showStatus=function(){
}
