// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  Soldier.prototype.attack = function(){
      return this.strength;
  }
  Soldier.prototype.receiveDamage= function(damage){
       return (this.health - damage);
  }
// var thrall = new Soldier(10, 8);
// console.log(thrall.receiveDamage(8))

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype.receiveDamage = function(damage){
    var total = (this.health - damage);
    if(total > 0){
      console.log(this.name + " has received " + damage + " points of damage");
    }else{
      console.log(this.name + "has died in the act of combat");
    }
    return total;
}
var thrallVar = new Viking("thrall",3,4);
console.log(thrallVar.receiveDamage(2));

// Saxon
function Saxon() {}

// War
function War() {}
