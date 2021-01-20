// ### Iteration 1: Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  //Methods
  attack() {
   // console.log(this.strength)
    return this.strength

  }
  receiveDamage(damage) {
     this.health = this.health - damage;
     // return damage // shouldn't return** anything
  }
}

/*
let soldier = new Soldier(150, 300);
//console.log(soldier.receiveDamage(20));
console.log(soldier.receiveDamage(20))
*/


// Iteration 2: Class Viking  
class Viking extends Soldier {
  constructor(name, health, strength) {
    super (health, strength)
    this.name = name;
}
battleCry() {
  return 'Odin Owns You All!'
} 

receiveDamage(damage) {
  this.health = this.health - damage;
  
  if(this.health > 0) {
     return `${this.name} has received ${damage} points of damage`;
  } 
    return `${this.name} has died in act of combat`;
}
}

/*
// ---  Harald Viking   ---
let viking = new Viking ('Harald',200, 300,);
console.log(viking.receiveDamage(20));
//console.log(viking.attack())
//console.log(viking.battleCry())
*/


// Iteration 3: Saxon
class Saxon extends Soldier {
  constructor( health, strength) {
    super (health, strength)
   
}
battleCry() {
  return 'Odin Owns You All!'
} 

receiveDamage(damage) {
  this.health = this.health - damage;
  
  if(this.health > 0) {
     return `A Saxon has received ${damage} points of damage`;
  } 
    return `A Saxon has died in combat`;
}
}


// ### BONUS- Iteration 4: War
class War {
  constructor(health, strength) {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

//Methods
addViking() {


}
addSaxon() {

}
vikingAttack() {

}
saxonAttack() {

}

showStatus(){

}
}
