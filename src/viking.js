//Iteration 1: Soldier

class Soldier {

    constructor(health, strength){
        this.health = health;
        this.strength = strength;
        }

    attack(){
        return this.strength;
        }  
    
    receiveDamage(theDamage){
        this.health -= theDamage; 
        }

    }

// Iteration 2: Viking

class Viking extends Soldier{

  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
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
    return "Odin Owns You All!!";
  }

}

// Iteration 3: Saxon

class Saxon extends Soldier{

  receiveDamage(theDamage){
    this.health -= theDamage
    if(this.health <= theDamage){
      return `A Saxon has died in combat`;
    } 
    else {
      return `A Saxon has received ${theDamage} points of damage`;
    }
  }


// War
/*class War {}*/}