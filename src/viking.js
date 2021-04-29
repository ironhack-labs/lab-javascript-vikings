//Iteration 1: Soldier

class Soldier {

    constructor(health, strength){
        this.health = health;
        this.strength = strength;
        }

    attack(){
        return strength;
        }  
    
    receiveDamage(theDamage){
        this.health -= theDamage; 
        }

    }

// Iteration 2: Viking


class Viking extends Soldier{

  constructor(name, health, strength){
    super(health, strength)
    this.strength = strength;
  }

  receiveDamage(theDamage){
    this.health -= theDamage
    if(this.health > theDamage){
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    } 
}

  battleCry(){
    return `Odin Owns You All!!`
  }

}

// Saxon
//class Saxon {}

// War
/*class War {}*/