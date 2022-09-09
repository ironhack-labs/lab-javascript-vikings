// Soldier
class Soldier {
  constructor(health, strength,){
    this.health = health;
    this.strength = strength;
    
  };
  attack(){
    return (this.strength);
  }

  receiveDamage (theDamage) {
   this.health -= theDamage
  }
}   
  
let theDamage = true;

// Viking
class Viking extends Soldier {
  constructor (name, health, strength,){
  super (health, strength, name);  
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
 
  battleCry () {
    return ("Odin Owns You All!")
  }

  receiveDamage (theDamage) {
    if (this.health -= theDamage){
      return (`${this.name} has received ${theDamage} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    }
   }


}

const viking1 = new Viking ('Joao')

// Saxon
class Saxon extends Soldier {
  receiveDamage (theDamage) {
    if (this.health -= theDamage) {
      return (`A Saxon has received ${theDamage} points of damage`) }
        else {
          return ("A Saxon has died in combat")
      }
  }
}

// War
class War {}


// TENHO 4 CLASSES if 
/* (this.health -= theDamage){
      return (`${this.name} has received ${theDamage} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    } */