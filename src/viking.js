// Soldier
class Soldier {
    constructor(health, strength) {
      this.strength = strength;
      this.health = health;
    }
    attack() {
       return this.strength;
    }
     
   receiveDamage(damage){
     // damage is a method-level variable that is received as input
     this.health -= damage;

   }
  }

// Viking
class Viking extends Soldier {
constructor(name, health, strength){
  super(health, strength)
  this.name = name;
}
receiveDamage(damage) {
  this.health -= damage;
  if (this.health >0) {
    return `${this.name} has received ${damage} points of damage`; 
    } else {
    return `${this.name} has died in the act of combat`;
  }
}

battleCry() {
  return "Odin Owns You All!"
}}
// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    this.health -= damage; 
    if (this.health >0) {
      return `A Saxon has received ${damage} points of damage`; 
      } else {
      return `A Saxon has died in the act of combat`; 
  }
}}

/*// War
// class War {}

function testFunc(param1) {
  console.log(param1);
  return param1;


let soldierOne = new Viking("blargh", 5, 1);
console.log(soldierOne.health);
console.log(soldierOne.receiveDamage(2));
console.log(soldierOne.health);*/
