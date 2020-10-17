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
  battleCry() {}
}

// Saxon
class Saxon {}

// War
class War {}

function testFunc(param1) {
  console.log(param1);
  return param1;
}

let soldierOne = new Soldier(5, 1);
// console.log(soldierOne.attack());
console.log(soldierOne.health);
soldierOne.receiveDamage(2);
console.log(soldierOne.health);
