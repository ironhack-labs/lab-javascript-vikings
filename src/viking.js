// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  } attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }   
}
   


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super('abc', health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;

  }
  attack(){
    return this.strength;
  }
}
const Odin = new Viking;
Odin.battleCry();

battleCry() 
    console.log ("Odin Owns You All!");





// Saxon
class Saxon {}

// War
class War {}
